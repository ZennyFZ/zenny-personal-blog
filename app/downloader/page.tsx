import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BackgroundEffects } from "@/components/background-effects";
import { DownloadSection } from "@/components/download-section";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import type { SparklePosition } from "@/types";

export const metadata: Metadata = {
  title: "Video Downloader | F r e e s i a",
  description: "A tiny surprise from Zenny: download a YouTube video.",
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

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-8 pt-8 sm:px-6 sm:pt-10 md:px-8 md:pt-12">
        <header className="flex items-center justify-between rounded-lg border-4 border-pink-300 bg-white/80 p-3 backdrop-blur-sm pixel-shadow sm:p-4">
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
          <p className="pixelated-font text-xs text-purple-700 sm:text-sm">
            Click for surprise!
          </p>
        </header>

        <section className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center py-12 sm:py-16">
          <div className="mb-6 text-center">
            <p className="pixelated-font mb-2 text-sm text-pink-700">
              A little surprise for you
            </p>
            <h1 className="pixelated-font text-2xl font-bold text-purple-900 sm:text-3xl">
              Your video, ready to go
            </h1>
            <p className="mx-auto mt-3 max-w-md text-sm text-purple-800 sm:text-base">
              Paste a YouTube video or Short link and I’ll prepare a download link for you.
            </p>
          </div>

          <DownloadSection />
        </section>

        <Footer />
      </div>
    </div>
  );
}
