import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

export function AffLinksSection() {
  // const aff_links = [
  //   "https://lootbar.gg/top-up/honkai-star-rail?aff_short=zennyhsr",
  //   "https://lootbar.gg/top-up/genshin-impact-top-up?aff_short=zennyhsr",
  //   "https://www.g2g.com/r/10561e526b56426183d324d089b4db4d",
  //   "https://www.g2g.com/r/21d2b68de36f4ce7a61e90ac6319eb91",
  //   "https://www.g2g.com/r/e9544af628ea49448b3bdfb31e8a1078",
  // ];

  const aff_links = [
    {
      href: "https://lootbar.gg/top-up/honkai-star-rail?aff_short=zennyhsr",
      label: "HSR Top-Up (Lootbar)",
    },
    {
      href: "https://lootbar.gg/top-up/genshin-impact-top-up?aff_short=zennyhsr",
      label: "Genshin Top-Up (Lootbar)",
    },
    {
      href: "https://www.g2g.com/r/10561e526b56426183d324d089b4db4d",
      label: "HSR Top-Up (G2G)",
    },
    {
      href: "https://www.g2g.com/r/21d2b68de36f4ce7a61e90ac6319eb91",
      label: "Genshin Top-Up (G2G)",
    },
    {
      href: "https://www.g2g.com/r/e9544af628ea49448b3bdfb31e8a1078",
      label: "Steam Wallet (G2G)",
    },
    {
      href: "https://www.g2g.com/r/9af2b14412cb416b842dee71d547672c",
      label: "XBOX (G2G)",
    },
    {
      href: "https://www.g2g.com/r/39b577eb3f02437e97488347e84eddf5",
      label: "Razer Gold (G2G)",
    },
    {
      href: "https://www.g2g.com/r/574dfcecfa7542a99a8c528fba5db5f5",
      label: "PlayStation Network (G2G)",
    },
  ];

  return (
    <Card className="p-4 bg-yellow-100 border-4 border-yellow-300 pixel-shadow">
      <h3 className="pixelated-font font-bold text-yellow-800 mb-3">
        {"Useless Affiliate Links ✨"}
      </h3>
      <div className="space-y-2 text-sm text-yellow-700">
        {aff_links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block hover:underline"
            target="_blank"
          >
            <Button className="w-full text-[0.75rem] bg-yellow-200 hover:bg-yellow-300 text-yellow-800 pixelated-font">
              {link.label}
            </Button>
          </Link>
        ))}
      </div>
    </Card>
  );
}
