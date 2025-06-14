"use client";
import { useState, useEffect } from "react";
import { BackgroundEffects } from "@/components/background-effects";
import { StatusBar } from "@/components/status-bar";
import { MusicPlayer } from "@/components/music-player";
import { ProfileSection } from "@/components/profile-section";
import { SkillsSection } from "@/components/skills-section";
import { AboutSection } from "@/components/about-section";
import { GalleryPreview } from "@/components/gallery-preview";
import { ShopSection } from "@/components/shop-section";
import { ContactSection } from "@/components/contact-section";
import { AffLinksSection } from "@/components/aff-links-section";
import { MysteryBoxSection } from "@/components/mystery-box-section";
import { Footer } from "@/components/footer";
import { playlist, featuredArtworks } from "@/data/content";
import type { SparklePosition } from "@/types";

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState("");
  const [sparklePositions, setSparklePositions] = useState<SparklePosition[]>(
    []
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      <BackgroundEffects sparklePositions={sparklePositions} />

      <div className="relative z-10 p-8 pt-12">
        <StatusBar currentTime={currentTime} />
        <MusicPlayer playlist={playlist} />

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <ProfileSection />
            <SkillsSection />
            <ShopSection />
          </div>

          {/* Center Column */}
          <div className="lg:col-span-1 space-y-6">
            <AboutSection />
            <GalleryPreview artworks={featuredArtworks} />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            <ContactSection />
            <AffLinksSection />
            <MysteryBoxSection />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
