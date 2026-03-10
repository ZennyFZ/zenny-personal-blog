"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type DiscordStatus = "online" | "idle" | "dnd" | "offline";

type LanyardResponse = {
  success: boolean;
  data?: {
    discord_user?: {
      username?: string;
      global_name?: string;
      avatar?: string;
    };
    discord_status?: DiscordStatus;
    listening_to_spotify?: boolean;
    spotify?: {
      song?: string;
      artist?: string;
    };
    activities?: Array<{
      id?: string;
      name?: string;
      type?: number;
      state?: string;
      details?: string;
    }>;
  };
};

const DISCORD_USER_ID = "337217983279661056";

const statusColorMap: Record<DiscordStatus, string> = {
  online: "bg-green-500",
  idle: "bg-yellow-400",
  dnd: "bg-red-500",
  offline: "bg-gray-400",
};

const statusTextMap: Record<DiscordStatus, string> = {
  online: "Online",
  idle: "Idle",
  dnd: "Do Not Disturb",
  offline: "Offline",
};

export function DiscordStatusSection() {
  const [status, setStatus] = useState<DiscordStatus>("offline");
  const [displayName, setDisplayName] = useState("Zenny");
  const [activity, setActivity] = useState("Probably plotting chaos...");
  const [avatarHash, setAvatarHash] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchDiscordStatus = async () => {
      try {
        const response = await fetch(
          `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`,
          { cache: "no-store" },
        );

        if (!response.ok) {
          throw new Error("Could not fetch Discord status");
        }

        const json = (await response.json()) as LanyardResponse;

        if (!isMounted || !json.success || !json.data) {
          return;
        }

        const lanyardStatus = json.data.discord_status ?? "offline";
        setStatus(lanyardStatus);

        const nameFromApi =
          json.data.discord_user?.global_name ??
          json.data.discord_user?.username ??
          "Zenny";
        setDisplayName(nameFromApi);
        setAvatarHash(json.data.discord_user?.avatar ?? null);

        if (json.data.listening_to_spotify && json.data.spotify?.song) {
          const song = json.data.spotify.song;
          const artist = json.data.spotify.artist ?? "Unknown artist";
          setActivity(`Listening to ${song} by ${artist}`);
          return;
        }

        const richPresence = (json.data.activities ?? []).find(
          (item) => item.type === 0 && item.name,
        );

        if (richPresence?.name) {
          setActivity(
            richPresence.details
              ? `${richPresence.name}: ${richPresence.details}`
              : `Playing ${richPresence.name}`,
          );
          return;
        }

        setActivity("Probably plotting chaos...");
      } catch {
        if (isMounted) {
          setStatus("offline");
          setActivity("Status orb is sleeping right now");
        }
      }
    };

    fetchDiscordStatus();
    const interval = setInterval(fetchDiscordStatus, 30000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const avatarUrl = useMemo(() => {
    if (!avatarHash) {
      return "/Discord.png";
    }

    return `https://cdn.discordapp.com/avatars/${DISCORD_USER_ID}/${avatarHash}.png?size=128`;
  }, [avatarHash]);

  return (
    <Card className="p-6 bg-gradient-to-br from-indigo-100 to-sky-100 border-4 border-indigo-300 pixel-shadow">
      <h3 className="pixelated-font font-bold text-indigo-800 mb-4">
        {"Discord Status"}
      </h3>

      <div className="rounded border-2 border-indigo-200 bg-white/80 p-4">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-300 bg-indigo-50">
            <Image
              src={avatarUrl}
              alt="Discord avatar"
              fill
              unoptimized
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <p className="truncate font-semibold text-indigo-900">
              {displayName}
            </p>
            <div className="mt-1 flex items-center gap-2">
              <span
                className={`h-2.5 w-2.5 rounded-full ${statusColorMap[status]}`}
              />
              <span className="text-xs text-indigo-700">
                {statusTextMap[status]}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 rounded border border-indigo-100 bg-indigo-50/60 p-2 text-sm text-indigo-900">
          {activity}
        </p>

        <Button
          className="mt-4 w-full bg-indigo-500 text-white hover:bg-indigo-600 border-2 border-indigo-700 pixel-shadow"
          onClick={() =>
            window.open(
              `https://discord.com/users/${DISCORD_USER_ID}`,
              "_blank",
            )
          }
        >
          <Image src="/Discord.png" alt="Discord" width={16} height={16} />
          {"Open Profile"}
        </Button>
      </div>
    </Card>
  );
}
