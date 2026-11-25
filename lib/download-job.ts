import { z } from "zod";

const httpsUrl = z.string().url().refine((value) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !url.username && !url.password;
  } catch {
    return false;
  }
});

export const downloadJobId = z.string().regex(/^[0-9a-f]{32}$/);

export const downloadJobSchema = z.object({
  id: downloadJobId,
  status: z.enum(["queued", "downloading", "uploading", "complete", "failed", "cancelled"]),
  progress: z.number().int().min(0).max(100).optional(),
  downloadUrl: httpsUrl.optional(),
}).refine((job) => job.status !== "complete" || job.downloadUrl !== undefined);

export type DownloadJob = z.infer<typeof downloadJobSchema>;
