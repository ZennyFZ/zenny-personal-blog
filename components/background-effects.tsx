import { Star } from "lucide-react"
import type { SparklePosition } from "@/types"

interface BackgroundEffectsProps {
  sparklePositions: SparklePosition[]
}

export function BackgroundEffects({ sparklePositions }: BackgroundEffectsProps) {
  return (
    <>
      {/* Animated Background Sparkles */}
      {sparklePositions.map((sparkle, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <Star className="w-3 h-3 text-pink-400 fill-pink-300" />
        </div>
      ))}

      {/* Pixel Art Border */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 pixel-border-top"></div>
        <div className="w-full h-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 pixel-border-bottom absolute bottom-0"></div>
        <div className="w-4 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 pixel-border-left absolute left-0"></div>
        <div className="w-4 h-full bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 pixel-border-right absolute right-0"></div>
      </div>
    </>
  )
}
