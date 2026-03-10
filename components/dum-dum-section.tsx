import { Card } from "@/components/ui/card";
import Image from "next/image";

export function DumDumSection() {
  return (
    <Card className="p-4 flex flex-col gap-2 bg-yellow-100 border-4 border-yellow-300 pixel-shadow">
      <h3 className="pixelated-font font-bold text-yellow-800 mb-3">
        {"Dum Dum Thing Hereee~!"}
      </h3>
      <div className="space-y-2 text-sm text-yellow-700">
        <Image src="/cute.gif" alt="Dum Dum Icon" width={640} height={320} />
      </div>
      <ul className="list-disc pl-5 text-sm text-yellow-700 space-y-1">
        <li>{"Genshin Impact: 828751535 | Asia ar60"}</li>
        <li>{"Honkai Star Rail: 801242853 | Asia lv70"}</li>
        <li>{"Wuthering Waves: 900424433 | SEA lv80"}</li>
      </ul>
    </Card>
  );
}
