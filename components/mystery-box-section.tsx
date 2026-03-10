"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function MysteryBoxSection() {
  return (
    <Card className="flex flex-col gap-2 p-4 bg-gradient-to-br from-purple-100 to-pink-100 border-4 border-purple-300 pixel-shadow">
      <h3 className="pixelated-font font-bold text-purple-800 mb-3">
        {"Click for surprise!"}
      </h3>
      <Button
        className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white border-2 border-purple-600 pixel-shadow"
        onClick={() =>
          alert(
            "You found a secret! your browser has been injected with a cute cookie! (Just kidding~) ◝(ᵔᗜᵔ)◜",
          )
        }
      >
        {"🎁 Mystery Box"}
      </Button>
      <Button
        className="w-full bg-gradient-to-r from-[#52c7ad] to-[#47dfd3] hover:from-[#47dfd3] hover:to-[#52c7ad] text-white border-2 border-[#47dfd3] pixel-shadow"
        onClick={() => window.location.assign("/mikutap/index.html")}
      >
        {"Miku Tap"}
      </Button>

      <Link href="/notadmin" className="w-full">
        <Button className="w-full bg-gradient-to-r from-[#ff6f91] to-[#ff9671] hover:from-[#ff9671] hover:to-[#ff6f91] text-white border-2 border-[#ff9671] pixel-shadow">
          {"How carelessly! i just reveal admin route!"}
        </Button>
      </Link>
    </Card>
  );
}
