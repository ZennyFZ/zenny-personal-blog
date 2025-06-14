"use client"

import type { Track } from "@/types"

interface PlaylistProps {
  tracks: Track[]
  currentTrack: number
  isPlaying: boolean
  onTrackSelect: (index: number) => void
}

export function Playlist({ tracks, currentTrack, isPlaying, onTrackSelect }: PlaylistProps) {
  return (
    <div className="w-full lg:w-64">
      <h4 className="pixelated-font text-sm font-bold text-purple-800 mb-2">Playlist ♡</h4>
      <div className="space-y-1 max-h-32 overflow-y-auto">
        {tracks.map((track, index) => (
          <div
            key={index}
            className={`p-2 rounded cursor-pointer transition-colors text-xs ${
              index === currentTrack ? "bg-pink-200 border border-pink-300" : "bg-white/50 hover:bg-pink-100"
            }`}
            onClick={() => onTrackSelect(index)}
          >
            <div className="flex items-center gap-2">
              {index === currentTrack && isPlaying && (
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-pink-500 animate-pulse"></div>
                  <div className="w-1 h-3 bg-purple-500 animate-pulse" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-1 h-3 bg-blue-500 animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                </div>
              )}
              <div className="flex-1">
                <div className="font-bold text-purple-800">{track.title}</div>
                <div className="text-purple-600">{track.artist}</div>
              </div>
              <span className="text-purple-500">{track.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
