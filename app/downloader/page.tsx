import type { Metadata } from "next";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { BackgroundEffects } from "@/components/background-effects";
import { DownloadSection } from "@/components/download-section";
import { SupportedHostsPanel } from "@/components/supported-hosts-panel";
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

export default function DownloaderPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      <BackgroundEffects sparklePositions={sparklePositions} />

      <div className="relative z-10 px-4 pb-8 pt-8 sm:p-6 sm:pt-10 md:p-8 md:pt-12">
        <header className="mb-6 flex flex-col gap-4 rounded-lg border-4 border-pink-300 bg-white/80 p-3 backdrop-blur-sm pixel-shadow sm:mb-8 sm:flex-row sm:items-center sm:justify-between sm:p-4">
          <div className="flex w-full items-center gap-3 sm:w-auto sm:gap-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="shrink-0 border-2 border-pink-300 hover:bg-pink-100"
            >
              <Link href="/" aria-label="Back to home">
                <ArrowLeft aria-hidden="true" className="size-4" />
                <span>Home</span>
              </Link>
            </Button>
            <div className="min-w-0">
              <h1 className="pixelated-font text-lg font-bold leading-tight text-purple-800 sm:text-2xl">
                Video Downloader
              </h1>
              <p className="text-xs text-purple-600 sm:text-sm">
                Paste a link from a video site and get a download link.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start rounded-md border-2 border-pink-200 bg-white/70 px-2 py-1 sm:self-auto">
            <Download aria-hidden="true" className="h-5 w-5 text-pink-500" />
            <span className="pixelated-font text-xs text-purple-700 sm:text-sm">
              1000+ hosts supported
            </span>
          </div>
        </header>

        <main className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <section aria-label="Download a video">
            <DownloadSection />
          </section>
          <SupportedHostsPanel />
        </main>
      </div>
    </div>
  );
}
