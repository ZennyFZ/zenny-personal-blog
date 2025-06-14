import { Heart, Mail, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import Image from "next/image";

export function ContactSection() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("_vanilla@choco.la");
    toast.success("Email copied to clipboard!", {
      position: "top-center",
      duration: 2000,
      style: {
        color: "#f472b6",
      },
    });
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-green-100 to-blue-100 border-4 border-green-300 pixel-shadow">
      <h3 className="pixelated-font font-bold text-green-800 mb-4 flex items-center gap-2">
        <Heart className="w-4 h-4 text-pink-500 fill-pink-400" />
        {"Let's Connect!"}
      </h3>
      <div className="flex flex-col gap-2 space-y-3">
        <Button
          className="w-full bg-pink-400 hover:bg-pink-500 text-white border-2 border-pink-600 pixel-shadow"
          onClick={handleCopyEmail}
        >
          <Mail />
          {"Email me"}
        </Button>
        <Button
          className="w-full flex bg-blue-400 hover:bg-blue-500 text-white border-2 border-blue-600 pixel-shadow"
          onClick={() =>
            window.open("https://discord.com/users/337217983279661056")
          }
        >
          <Image src="/Discord.png" alt="Discord Icon" width={16} height={16} />
          {"Discord"}
        </Button>
        <Button
          className="w-full bg-red-400 hover:bg-red-500 text-white border-2 border-red-600 pixel-shadow"
          onClick={() => window.open("https://www.youtube.com/@Zennyy197")}
        >
          <Youtube />
          {"Visit my YouTube"}
        </Button>
      </div>
    </Card>
  );
}
