"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function MysteryBoxSection() {
  return (
    <Card className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 border-4 border-purple-300 pixel-shadow">
      <h3 className="pixelated-font font-bold text-purple-800 mb-3">
        {"Click for surprise! ✨"}
      </h3>
      <Button
        className="w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white border-2 border-purple-600 pixel-shadow"
        onClick={() =>
          alert(
            "You found a secret! your browser has been injected with a cute cookie! (Just kidding~) ◝(ᵔᗜᵔ)◜"
          )
        }
      >
        {"🎁 Mystery Box"}
      </Button>
    </Card>
  );
}
