import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function ShopSection() {
  return (
    <Card className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100 border-4 border-yellow-300 pixel-shadow">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingBag className="w-5 h-5 text-yellow-600" />
        <h2 className="pixelated-font font-bold text-yellow-800">
          {"My Little Shop ✨"}
        </h2>
      </div>
      <div className="bg-white/80 p-4 rounded border-2 border-yellow-200 space-y-3">
        <p className="text-sm text-gray-700">
          {
            "I also run a digital shop to earn extra income! Here's what I offer:"
          }
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>{"Game keys for Steam, GOG, Microsoft, Epic, EA, Uplay"}</li>
          <li>{"Gacha recharge services"}</li>
          <li>{"Software licenses (rarely)"}</li>
          <li>{"Account subscriptions at discounted prices (rarely)"}</li>
          <li>{"Gift cards (rarely)"}</li>
        </ul>
        <div className="flex flex-col gap-2">
          <Link
            href="https://gameflip.com/profile/us-east-1:bd5ed527-53bf-462c-af10-ef02435ebce0/jenny"
            target="_blank"
          >
            <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white border-2 border-gray-600 pixel-shadow text-sm">
              {"🛍️ Visit Gameflip"}
            </Button>
          </Link>

          <Link href="https://difmark.com/en/profile/ZennyShop" target="_blank">
            <Button className="w-full bg-green-400 hover:bg-green-500 text-white border-2 border-green-600 pixel-shadow text-sm">
              {"🛍️ Visit Difmark"}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
