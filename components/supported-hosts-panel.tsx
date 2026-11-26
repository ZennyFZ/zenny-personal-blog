"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { supportedHosts } from "@/data/supported-hosts";

export function SupportedHostsPanel() {
  const [query, setQuery] = useState("");

  const filteredHosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return supportedHosts;

    return supportedHosts.filter((host) =>
      host.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  return (
    <Card className="border-4 border-pink-300 bg-white/90 p-5 pixel-shadow sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="pixelated-font font-bold text-purple-900">
          Supported sites
        </h2>
        <span className="text-xs text-purple-700">
          {supportedHosts.length.toLocaleString("en-US")} entries
        </span>
      </div>

      <div className="relative mt-4">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-purple-500"
        />
        <Input
          type="search"
          aria-label="Search supported sites"
          placeholder="Search the full list"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="border-pink-200 bg-white pl-9 focus-visible:ring-purple-500"
        />
      </div>

      <p className="mt-3 text-xs text-purple-700" aria-live="polite">
        Showing {filteredHosts.length.toLocaleString("en-US")} of{" "}
        {supportedHosts.length.toLocaleString("en-US")} entries. Availability
        can change by site and link.
      </p>

      <ul
        aria-label="Full supported site list"
        className="mt-3 grid max-h-[34rem] grid-cols-1 gap-1 overflow-y-auto rounded-md border-2 border-pink-200 bg-white/70 p-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
      >
        {filteredHosts.map((host) => (
          <li
            key={host}
            className="break-words rounded-sm px-2 py-1 text-sm text-purple-900 odd:bg-pink-50/80"
          >
            {host}
          </li>
        ))}
        {filteredHosts.length === 0 && (
          <li className="col-span-full px-2 py-4 text-sm text-purple-700">
            No sites match that search.
          </li>
        )}
      </ul>
    </Card>
  );
}
