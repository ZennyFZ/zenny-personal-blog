import { Card } from "@/components/ui/card";
import Image from "next/image";

export function ProfileSection() {
  return (
    <Card className="p-6 bg-gradient-to-br from-pink-100 to-purple-100 border-4 border-pink-300 pixel-shadow transform hover:scale-105 transition-transform">
      <div className="flex flex-col gap-2 text-center">
        <div className="w-36 h-36 mx-auto">
          <Image
            src="/TheHertaP.jpg"
            alt="The Herta"
            width={256}
            height={256}
            className="rounded-full w-full h-full"
          />
        </div>
        <h1 className="pixelated-font text-xl font-bold text-purple-800 mb-2">
          {"Zenny"}
        </h1>
        <p className="text-purple-600 text-sm">{"Magic Engineer"}</p>
        <p className="text-purple-600 text-sm">{"Pathstrider of Akivili"}</p>
      </div>
    </Card>
  );
}
