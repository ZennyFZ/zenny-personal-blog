"use client";

import { X, Heart, Eye, Tag, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Artwork } from "@/types";
import Image from "next/image";

interface ArtworkModalProps {
  artwork: Artwork;
  onClose: () => void;
}

export function ArtworkModal({ artwork, onClose }: ArtworkModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="bg-white border-4 border-pink-300 pixel-shadow max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Modal Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <h2 className="pixelated-font text-xl font-bold text-purple-800">
                {artwork.title}
              </h2>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-2 border-pink-300 hover:bg-pink-100"
              onClick={onClose}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Modal Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg overflow-hidden border-2 border-pink-200">
                <Image
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-400" />
                  <span className="text-sm font-bold text-pink-600">
                    {artwork.likes} likes
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-purple-500" />
                  <span className="text-sm text-purple-600">
                    View count: {(artwork.likes || 0) * 3}
                  </span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="bg-pink-50 p-4 rounded-lg border-2 border-pink-200">
                <h3 className="pixelated-font text-sm font-bold text-pink-800 mb-3">
                  {"Artwork Details ♡"}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-purple-500" />
                    <span className="text-purple-700">
                      Category: {artwork.category}
                    </span>
                  </div>
                  {artwork.createdDate && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      <span className="text-purple-700">
                        Created: {artwork.createdDate}
                      </span>
                    </div>
                  )}
                  {artwork.dimensions && (
                    <div className="flex items-center gap-2">
                      <span className="text-purple-700">
                        Dimensions: {artwork.dimensions}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              {artwork.description && (
                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                  <h3 className="pixelated-font text-sm font-bold text-blue-800 mb-3">
                    {"Description ✨"}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {artwork.description}
                  </p>
                </div>
              )}

              {/* Tools Used */}
              {artwork.tools && artwork.tools.length > 0 && (
                <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                  <h3 className="pixelated-font text-sm font-bold text-purple-800 mb-3">
                    {"Tools Used 🎨"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {artwork.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-purple-100 text-purple-800 rounded-md border border-purple-300 text-xs"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Palette */}
              <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                <h3 className="pixelated-font text-sm font-bold text-yellow-800 mb-3">
                  {"Color Palette 🌈"}
                </h3>
                <div className="flex gap-3">
                  {artwork.colors.map((color, i) => (
                    <div key={i} className="text-center">
                      <div
                        className="w-8 h-8 rounded-full border-2 border-white shadow-md mb-1"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs font-mono text-gray-600">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button className="flex-1 bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white border-2 border-pink-500 pixel-shadow">
                  <Heart className="w-4 h-4 mr-2" />
                  Like Artwork
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-pink-300 hover:bg-pink-100"
                >
                  Share ✨
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
