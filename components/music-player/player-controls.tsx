"use client"

import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Track } from "@/types"

interface PlayerControlsProps {
  currentTrack: Track
  isPlaying: boolean
  volume: number
  currentTime: number
  duration: number
  onTogglePlay: () => void
  onPrevTrack: () => void
  onNextTrack: () => void
  onVolumeChange: (volume: number) => void
}

export function PlayerControls({
  currentTrack,
  isPlaying,
  volume,
  currentTime,
  duration,
  onTogglePlay,
  onPrevTrack,
  onNextTrack,
  onVolumeChange,
}: PlayerControlsProps) {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex-1 space-y-4">
      {/* Track Info */}
      <div className="text-center lg:text-left">
        <h3 className="pixelated-font text-lg font-bold text-purple-800">{currentTrack.title}</h3>
        <p className="text-sm text-purple-600">{currentTrack.artist}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center lg:justify-start gap-4">
        <Button
          size="sm"
          variant="outline"
          className="border-2 border-pink-300 hover:bg-pink-100"
          onClick={onPrevTrack}
        >
          <SkipBack className="w-4 h-4" />
        </Button>

        <Button
          size="lg"
          className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white border-2 border-pink-500 pixel-shadow"
          onClick={onTogglePlay}
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </Button>

        <Button
          size="sm"
          variant="outline"
          className="border-2 border-pink-300 hover:bg-pink-100"
          onClick={onNextTrack}
        >
          <SkipForward className="w-4 h-4" />
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs text-purple-600 font-mono">{formatTime(currentTime)}</span>
          <div className="flex-1 h-2 bg-pink-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300"
              style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
            />
          </div>
          <span className="text-xs text-purple-600 font-mono">{currentTrack.duration}</span>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-purple-600" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => onVolumeChange(Number.parseFloat(e.target.value))}
            className="flex-1 h-2 bg-pink-200 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #f472b6 0%, #f472b6 ${volume * 100}%, #fce7f3 ${volume * 100}%, #fce7f3 100%)`,
            }}
          />
          <span className="text-xs text-purple-600 font-mono">{Math.round(volume * 100)}%</span>
        </div>
      </div>
    </div>
  )
}
