"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import type { DownloadJob } from "@/lib/download-job";

function isActive(job: DownloadJob | null) {
  return job?.status === "queued" || job?.status === "downloading" || job?.status === "uploading";
}

function describeJob(job: DownloadJob | null) {
  switch (job?.status) {
    case "queued": return "Waiting for a download slot…";
    case "downloading": return job.progress === undefined ? "Downloading video…" : `Downloading video… ${job.progress}%`;
    case "uploading": return "Uploading your video…";
    case "complete": return "Your download is ready.";
    case "failed": return "This video could not be downloaded or uploaded. Try another video.";
    case "cancelled": return "This download was stopped or exceeded the file size limit.";
    default: return "";
  }
}

export function DownloadSection() {
  const [url, setUrl] = useState("");
  const [job, setJob] = useState<DownloadJob | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [paused, setPaused] = useState(false);
  const [error, setError] = useState("");

  const pendingId = isActive(job) ? job?.id : undefined;

  useEffect(() => {
    if (!pendingId || paused) return;

    const controller = new AbortController();
    let timer: ReturnType<typeof setTimeout>;
    let failures = 0;

    async function checkStatus() {
      try {
        const response = await fetch(`/api/download?id=${pendingId}`, { signal: controller.signal });
        if (response.status === 404) {
          setJob(null);
          setError("This download request has expired. Submit the link again.");
          return;
        }
        if (!response.ok) throw new Error("Status unavailable");
        const nextJob: DownloadJob = await response.json();
        if (controller.signal.aborted) return;
        failures = 0;
        setError("");
        setJob(nextJob);
        if (!isActive(nextJob)) return;
      } catch {
        if (controller.signal.aborted) return;
        failures += 1;
        if (failures >= 3) {
          setError("Couldn't check the status. Your download may still be running.");
          setPaused(true);
          return;
        }
      }
      timer = setTimeout(checkStatus, 3000);
    }

    timer = setTimeout(checkStatus, 1500);
    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [pendingId, paused]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting || pendingId) return;

    setSubmitting(true);
    setError("");
    setJob(null);
    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      if (response.ok) {
        setPaused(false);
        setJob(await response.json());
      } else if (response.status === 400) {
        setError("This link isn't supported or couldn't be processed. Check the supported hosts and try another link.");
      } else if (response.status === 429) {
        setError("The downloader is busy. Try again in a minute.");
      } else {
        setError("The downloader is unavailable right now. Try again later.");
      }
    } catch {
      setError("Couldn't reach the downloader. Try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card className="border-4 border-violet-300 bg-violet-50 p-6 pixel-shadow">
      <h2 className="pixelated-font mb-4 flex items-center gap-2 font-bold text-violet-900">
        <Download aria-hidden="true" className="size-4 shrink-0" />
        Video Downloader
      </h2>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <div className="space-y-1.5">
          <label htmlFor="video-download-url" className="block text-sm font-medium text-violet-950">Video or post URL</label>
          <Input
            id="video-download-url"
            type="url"
            inputMode="url"
            autoComplete="off"
            placeholder="Paste a link from a supported host"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            maxLength={2048}
            required
            disabled={submitting || !!pendingId}
            className="border-violet-300 bg-white focus-visible:ring-violet-600"
          />
        </div>
        <Button type="submit" disabled={submitting || !!pendingId} className="w-full bg-violet-700 text-white hover:bg-violet-800">
          {submitting ? "Sending link…" : "Get download link"}
        </Button>
      </form>

      <div role="status" className="text-sm text-violet-950">
        {(error || job) && <p className="mt-3">{error || describeJob(job)}</p>}
      </div>
      {paused && pendingId && (
        <Button variant="outline" className="mt-2" onClick={() => { setPaused(false); setError(""); }}>
          Check status again
        </Button>
      )}
      {job?.status === "complete" && job.downloadUrl && (
        <Button asChild className="mt-2 w-full bg-violet-700 text-white hover:bg-violet-800">
          <a href={job.downloadUrl} target="_blank" rel="noopener noreferrer">
            <Download aria-hidden="true" /> Download video
          </a>
        </Button>
      )}
    </Card>
  );
}
