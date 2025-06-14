import { Palette, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import type { Artwork } from "@/types";
import Image from "next/image";

interface GalleryPreviewProps {
  artworks: Artwork[];
}

export function GalleryPreview({ artworks }: GalleryPreviewProps) {
  return (
    <Card className="p-6 bg-gradient-to-br from-pink-100 to-orange-100 border-4 border-pink-300 pixel-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Palette className="w-5 h-5 text-pink-600" />
          <h2 className="pixelated-font font-bold text-pink-800">
            {"Steam Artwork"}
          </h2>
        </div>
        <Link href="/gallery">
          <Button
            size="sm"
            className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white border-2 border-pink-500 pixel-shadow text-xs"
          >
            <Eye className="w-3 h-3 mr-1" />
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="group relative bg-white/80 rounded-lg p-2 border-2 border-pink-200 hover:border-pink-400 transition-all cursor-pointer hover:scale-105"
          >
            <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded mb-2 flex items-center justify-center overflow-hidden">
              <Image
                src={artwork.image || "/placeholder.svg"}
                alt={artwork.title}
                width={300}
                height={300}
              />
            </div>
            <div className="text-center">
              <h4 className="text-xs font-bold text-pink-800 truncate">
                {artwork.title}
              </h4>
              <p className="text-xs text-pink-600">{artwork.category}</p>
            </div>
            <div className="flex justify-center gap-1 mt-1">
              {artwork.colors.map((color, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full border border-white"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
