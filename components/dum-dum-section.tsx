import { Card } from "@/components/ui/card";
import Image from "next/image";

export function DumDumSection() {
  return (
    <Card className="p-4 bg-yellow-100 border-4 border-yellow-300 pixel-shadow">
      <h3 className="pixelated-font font-bold text-yellow-800 mb-3">
        {"Dum Dum Thing Heree✨"}
      </h3>
      <div className="space-y-2 text-sm text-yellow-700">
        <Image src="/cute.gif" alt="Dum Dum Icon" width={640} height={320} />
      </div>
    </Card>
  );
}
