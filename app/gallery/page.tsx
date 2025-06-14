"use client";

import { useState } from "react";
import { ArrowLeft, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArtworkModal } from "@/components/gallery/artwork-modal";
import { BackgroundEffects } from "@/components/background-effects";
import Link from "next/link";
import { allArtworks } from "@/data/content";
import type { Artwork, SparklePosition } from "@/types";
import Image from "next/image";

export default function GalleryPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Digital Art",
    "Illustration",
    "Character Design",
    "Background Art",
  ];
  const filteredArtworks =
    filter === "All"
      ? allArtworks
      : allArtworks.filter((art) => art.category === filter);

  // Generate sparkles for background
  const sparklePositions: SparklePosition[] = Array.from(
    { length: 20 },
    () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    })
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      <BackgroundEffects sparklePositions={sparklePositions} />

      <div className="relative z-10 p-8 pt-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 bg-white/80 backdrop-blur-sm rounded-lg p-4 border-4 border-pink-300 pixel-shadow">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button
                variant="outline"
                size="sm"
                className="border-2 border-pink-300 hover:bg-pink-100"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back Home
              </Button>
            </Link>
            <div>
              <h1 className="pixelated-font text-2xl font-bold text-purple-800">
                {"My Artwork Gallery ✨"}
              </h1>
              <p className="text-sm text-purple-600">
                {"Explore my creative journey through pixels and colors ♡"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Palette className="w-6 h-6 text-pink-500" />
            <span className="pixelated-font text-sm text-purple-700">
              {allArtworks.length} Artworks
            </span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              className={`${
                filter === category
                  ? "bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white border-2 border-pink-500"
                  : "border-2 border-pink-300 hover:bg-pink-100"
              } pixel-shadow`}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredArtworks.map((artwork) => (
            <Card
              key={artwork.id}
              className="group bg-white/90 border-4 border-pink-300 pixel-shadow hover:border-purple-400 transition-all cursor-pointer hover:scale-105"
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="p-4">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg mb-3 overflow-hidden">
                  <Image
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    width={300}
                    height={300}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="pixelated-font text-sm font-bold text-purple-800 truncate">
                      {artwork.title}
                    </h3>
                    {artwork.likes && (
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-pink-600">
                          {artwork.likes}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-purple-600">{artwork.category}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {artwork.colors.slice(0, 3).map((color, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-full border border-white shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    {artwork.createdDate && (
                      <span className="text-xs text-gray-500">
                        {artwork.createdDate}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedArtwork && (
          <ArtworkModal
            artwork={selectedArtwork}
            onClose={() => setSelectedArtwork(null)}
          />
        )}
      </div>
    </div>
  );
}
