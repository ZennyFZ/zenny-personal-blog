import { downloadJobId, downloadJobSchema } from "@/lib/download-job";

const MAX_BODY_BYTES = 4096;
const headers = { "Cache-Control": "no-store" };

function errorResponse(error: string, status: number) {
  return Response.json({ error }, { status, headers });
}

function workerConfig() {
  const baseUrl = process.env.DOWNLOAD_API_URL?.trim();
  const token = process.env.DOWNLOAD_API_TOKEN?.trim();
  if (!baseUrl || !token) return null;

  try {
    const url = new URL(baseUrl);
    const localHttp = url.protocol === "http:" && ["localhost", "127.0.0.1"].includes(url.hostname);
    if ((url.protocol !== "https:" && !localHttp) || url.username || url.password || url.search || url.hash) {
      return null;
    }
    url.pathname = `${url.pathname.replace(/\/+$/, "")}/`;
    return { url, token };
  } catch {
    return null;
  }
}

async function workerRequest(jobId?: string, sourceUrl?: string) {
  const config = workerConfig();
  if (!config) return errorResponse("unavailable", 503);

  try {
    const response = await fetch(new URL(jobId ? `jobs/${jobId}` : "jobs", config.url), {
      method: jobId ? "GET" : "POST",
      headers: {
        Authorization: `Bearer ${config.token}`,
        ...(jobId ? {} : { "Content-Type": "application/json" }),
      },
      body: jobId ? undefined : JSON.stringify({ url: sourceUrl }),
      redirect: "error",
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!jobId && response.status === 400) return errorResponse("invalid_source", 400);
    if (!jobId && response.status === 429) return errorResponse("busy", 429);
    if (jobId && response.status === 404) return errorResponse("not_found", 404);
    if (!response.ok) return errorResponse("unavailable", 502);

    const result = downloadJobSchema.safeParse(await response.json());
    if (!result.success || (jobId && result.data.id !== jobId)) {
      return errorResponse("unavailable", 502);
    }
    return Response.json(result.data, { status: jobId ? 200 : 202, headers });
  } catch {
    return errorResponse("unavailable", 502);
  }
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase();
  if (contentType !== "application/json" || !request.body) return errorResponse("invalid_source", 400);

  const reader = request.body.getReader();
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let bytes = 0;
  let body = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BODY_BYTES) {
        await reader.cancel();
        return errorResponse("invalid_source", 400);
      }
      body += decoder.decode(value, { stream: true });
    }
    const data = JSON.parse(body + decoder.decode());
    if (typeof data?.url !== "string" || !data.url.trim() || data.url.length > 2048) {
      return errorResponse("invalid_source", 400);
    }
    return workerRequest(undefined, data.url);
  } catch {
    return errorResponse("invalid_source", 400);
  } finally {
    reader.releaseLock();
  }
}

export async function GET(request: Request) {
  const id = downloadJobId.safeParse(new URL(request.url).searchParams.get("id"));
  if (!id.success) return errorResponse("not_found", 404);
  return workerRequest(id.data);
}
