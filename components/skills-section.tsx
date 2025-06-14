"use client";

import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <Card className="p-4 bg-white/90 border-4 border-purple-300 pixel-shadow cursor-pointer">
      <h3 className="pixelated-font font-bold text-purple-800 mb-3 flex items-center gap-2">
        <Sparkles className="w-4 h-4" />
        {"Hiring me as a Developer?"}
      </h3>
      <div className="flex mb-3 gap-2">
        <div className="underline text-blue-600">
          Come here to see my skills
        </div>
      </div>
    </Card>
  );
}
