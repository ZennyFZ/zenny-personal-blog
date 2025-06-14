import { Heart } from "lucide-react";

export function Footer() {
  return (
    <div className="text-center mt-12 p-4 bg-white/80 backdrop-blur-sm rounded-lg border-4 border-pink-300 pixel-shadow">
      <p className="text-purple-600 text-sm pixelated-font">
        {"The world awaits your light!"}
      </p>
      <div className="flex justify-center gap-2 mt-2">
        {[...Array(7)].map((_, i) => (
          <Heart
            key={i}
            className="w-3 h-3 text-pink-500 fill-pink-400 animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}
