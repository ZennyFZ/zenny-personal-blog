import { ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ShopSection() {
  return (
    <Card className="p-6 bg-gradient-to-br from-yellow-100 to-orange-100 border-4 border-yellow-300 pixel-shadow">
      <div className="flex items-center gap-2 mb-4">
        <ShoppingBag className="w-5 h-5 text-yellow-600" />
        <h2 className="pixelated-font font-bold text-yellow-800">
          {"My Little Shop"}
        </h2>
      </div>
      <div className="bg-white/80 p-4 rounded border-2 border-yellow-200 space-y-3">
        <p className="text-sm font-bold text-gray-700">
          {
            "I also run a digital shop to earn extra income! Here's what I offer:"
          }
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>{"Game keys for Steam, GOG, Microsoft, Epic, EA, Uplay"}</li>
          <li>{"Gacha recharge services"}</li>
          <li>{"Software licenses"}</li>
          <li>{"Account subscriptions at discounted prices"}</li>
          <li>{"Gift cards"}</li>
        </ul>
        <p className="text-sm font-bold text-gray-700">
          {
            "shhh for personal reason, no public links available!! (˶˃ ᵕ ˂˶) buut i sell on:"
          }
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li>Most keyshops on gg.deals</li>
          <li>Marketplaces that are outside of gg.deals</li>
          <li>Local/Native marketplaces</li>
          <li>Social Networking Site</li>
          <li>Forums</li>
          <li>Buildinggg my own website. coming soon!</li>
        </ul>
      </div>
    </Card>
  );
}
