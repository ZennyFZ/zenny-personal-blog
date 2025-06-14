import { Heart, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function ProfileSection() {
  return (
    <Card className="p-6 bg-gradient-to-br from-pink-100 to-purple-100 border-4 border-pink-300 pixel-shadow transform hover:scale-105 transition-transform">
      <div className="flex flex-col gap-2 text-center">
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-pink-300 to-purple-300 rounded-full border-4 border-white pixel-shadow flex items-center justify-center">
          <Image
            src="/TheHerta.png"
            alt="The Herta"
            width={256}
            height={256}
            className="rounded-full w-full h-full"
          />
        </div>
        <h1 className="pixelated-font text-xl font-bold text-purple-800 mb-2">
          {"Magic Engineering ♡"}
        </h1>
        <p className="text-purple-600 text-sm">{"Kuru Kuru ~~"}</p>
        <div className="flex justify-center gap-2 mt-3">
          <Heart className="w-4 h-4 text-pink-500 fill-pink-400" />
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
          <Heart className="w-4 h-4 text-pink-500 fill-pink-400" />
        </div>
      </div>
    </Card>
  );
}
