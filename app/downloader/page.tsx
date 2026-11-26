import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BackgroundEffects } from "@/components/background-effects";
import { DownloadSection } from "@/components/download-section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { SparklePosition } from "@/types";

export const metadata: Metadata = {
  title: "Video Downloader | F r e e s i a",
  description: "Create a download link from a supported video host.",
};

const sparklePositions: SparklePosition[] = [
  { x: 12, y: 18, delay: 0.2 },
  { x: 86, y: 22, delay: 1.1 },
  { x: 19, y: 73, delay: 1.8 },
  { x: 79, y: 82, delay: 0.7 },
];

const supportedHosts = [
  "YouTube",
  "TikTok",
  "Instagram",
  "X (Twitter)",
  "Vimeo",
  "Twitch",
  "Kick",
  "Reddit",
  "SoundCloud",
  "Facebook",
  "Dailymotion",
  "Bilibili",
  "Pinterest",
  "Rumble",
  "Streamable",
];

export default function DownloaderPage() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 py-8 sm:py-10">
      <BackgroundEffects sparklePositions={sparklePositions} />

      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6">
        <header className="flex items-center rounded-lg border-4 border-pink-300 bg-white/80 p-3 backdrop-blur-sm pixel-shadow sm:p-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-2 border-pink-300 hover:bg-pink-100"
          >
            <Link href="/">
              <ArrowLeft aria-hidden="true" className="size-4" />
              Home
            </Link>
          </Button>
        </header>

        <section className="mt-8">
          <div className="mb-6 text-center">
            <h1 className="pixelated-font text-2xl font-bold text-purple-900 sm:text-3xl">
              Download from supported sites
            </h1>
            <p className="mx-auto mt-3 max-w-md text-sm text-purple-800 sm:text-base">
              Paste a link from a supported host. We’ll check it and prepare a download when the source is available.
            </p>
          </div>

          <DownloadSection />

          <Card className="mt-5 border-4 border-pink-300 bg-white/85 p-5 pixel-shadow">
            <h2 className="pixelated-font font-bold text-purple-900">
              Supported hosts
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Common supported hosts">
              {supportedHosts.map((host) => (
                <li
                  key={host}
                  className="rounded-md border-2 border-pink-200 bg-pink-50 px-2.5 py-1 text-sm text-purple-900"
                >
                  {host}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-purple-700">
              Support depends on the individual link and the host’s availability. More sites may work too.
            </p>
            <a
              href="https://github.com/yt-dlp/yt-dlp/blob/master/supportedsites.md"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-medium text-violet-800 underline underline-offset-2 hover:text-violet-950"
            >
              See the full yt-dlp site list
            </a>
          </Card>
        </section>
      </div>
    </div>
  );
}
