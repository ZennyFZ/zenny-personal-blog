"use client";
import { useState, useEffect } from "react";
import { BackgroundEffects } from "@/components/background-effects";
import { StatusBar } from "@/components/status-bar";
import { MusicPlayer } from "@/components/music-player";
import { ProfileSection } from "@/components/profile-section";
import { SkillsSection } from "@/components/skills-section";
import { AboutSection } from "@/components/about-section";
import { DiscordStatusSection } from "@/components/discord-status-section";
// import { GalleryPreview } from "@/components/gallery-preview";
import { ShopSection } from "@/components/shop-section";
import { ContactSection } from "@/components/contact-section";
import { DumDumSection } from "@/components/dum-dum-section";
import { MysteryBoxSection } from "@/components/mystery-box-section";
import { Footer } from "@/components/footer";
import { playlist } from "@/data/content";
import type { SparklePosition } from "@/types";
import Image from "next/image";

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState("");
  const [sparklePositions, setSparklePositions] = useState<SparklePosition[]>(
    [],
  );

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Generate random sparkle positions
    const sparkles = Array.from({ length: 15 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setSparklePositions(sparkles);

    return () => clearInterval(interval);
  }, []);

  const Background = "/HertaFaceless.png";
  const MobileBackground = "/HFO.png";
  const Sticker = "/TheHertaSticker.png";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-center bg-cover opacity-10 md:hidden"
        style={{ backgroundImage: `url(${MobileBackground})` }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-top bg-cover opacity-10 hidden md:block"
        style={{ backgroundImage: `url(${Background})` }}
      />

      <BackgroundEffects sparklePositions={sparklePositions} />

      <Image
        src={Sticker}
        alt="Decorative sticker"
        width={144}
        height={144}
        className="pointer-events-none absolute right-2 bottom-40 z-20 h-20 w-20 select-none md:bottom-28"
      />

      <div className="relative z-10 px-4 pb-24 pt-6 sm:px-6 sm:pt-8 sm:pb-28 md:p-8 md:pt-12 md:pb-8">
        <StatusBar currentTime={currentTime} />
        <MusicPlayer playlist={playlist} />

        {/* Main Layout Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <ProfileSection />
            <SkillsSection />
            <ShopSection />
          </div>

          {/* Center Column */}
          <div className="lg:col-span-1 space-y-6">
            <AboutSection />
            <DiscordStatusSection />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            <ContactSection />
            <DumDumSection />
            <MysteryBoxSection />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
