"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Card } from "@/components/ui/card";

// Anime-style controls from Sakuga VFX (github.com/finktheartist/sakuga-vfx, MIT).
// Each one is a plain script in /public/sakuga-vfx that defines a <sakuga-*> element.
const SAKUGA_FILES = [
  "button",
  "toggle",
  "slider",
  "checkbox",
  "radio",
  "input",
  "tabs",
  "progress",
  "rating",
  "toast",
  "tooltip",
];

function loadSakugaScripts() {
  for (const name of SAKUGA_FILES) {
    if (document.querySelector(`script[data-sakuga="${name}"]`)) continue;
    const script = document.createElement("script");
    script.src = `/sakuga-vfx/${name}.js`;
    script.async = true;
    script.dataset.sakuga = name;
    document.body.appendChild(script);
  }
}

type SakugaEl = HTMLElement & {
  value?: string;
  checked?: boolean;
  done?: (ms?: number) => void;
  show?: (message?: string) => void;
  set?: (value: number, instant?: boolean) => void;
  reset?: () => void;
};

const MOODS: Record<string, string> = {
  sleepy: "zZz... 5 more minutes (－_－) zzZ",
  gaming: "Dailies first, then gacha~ 🎲",
  coding: "Fullstuck mode: ON 💻",
};

const GAMES: Record<string, string> = {
  genshin: "Genshin Impact",
  hsr: "Honkai Star Rail",
  wuwa: "Wuthering Waves",
};

function Tile({
  title,
  children,
  className = "",
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-3 rounded border-2 border-purple-200 bg-white/80 p-3 sm:p-4 ${className}`}
    >
      <h4 className="pixelated-font text-xs text-purple-700">{title}</h4>
      <div className="flex flex-1 flex-col items-center justify-center gap-3">
        {children}
      </div>
    </div>
  );
}

export function SakugaSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const toastRef = useRef<SakugaEl>(null);
  const nameRef = useRef<SakugaEl>(null);
  const sendRef = useRef<SakugaEl>(null);
  const clearRef = useRef<SakugaEl>(null);
  const tabsRef = useRef<SakugaEl>(null);
  const toggleRef = useRef<SakugaEl>(null);
  const sliderRef = useRef<SakugaEl>(null);
  const radioRef = useRef<SakugaEl>(null);
  const ratingRef = useRef<SakugaEl>(null);
  const checkboxRef = useRef<SakugaEl>(null);
  const progressRef = useRef<SakugaEl>(null);
  const chargeRef = useRef<SakugaEl>(null);

  const [mood, setMood] = useState("sleepy");
  const [asleep, setAsleep] = useState(false);
  const [sleepiness, setSleepiness] = useState(80);

  // Load the scripts only when the card is about to scroll into view (the toggle alone is ~500 KB).
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          loadSakugaScripts();
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  // Wire up the events. Listeners can go on before the elements are defined; the events fire on the host.
  useEffect(() => {
    const toast = (message: string) => toastRef.current?.show?.(message);
    const cleanups: Array<() => void> = [];
    const on = (
      el: SakugaEl | null,
      type: string,
      fn: (e: Event) => void,
    ) => {
      if (!el) return;
      el.addEventListener(type, fn);
      cleanups.push(() => el.removeEventListener(type, fn));
    };

    on(sendRef.current, "click", () => {
      const name = (nameRef.current?.value ?? "").trim();
      if (!name) {
        toast("Type your name first! (｀へ´)");
        return;
      }
      sendRef.current?.done?.();
      toast(`Hiii ${name}! ✨`);
    });
    on(clearRef.current, "click", () => {
      if (nameRef.current) nameRef.current.value = "";
    });
    on(tabsRef.current, "change", (e) => {
      const value = (e as CustomEvent<{ value: string }>).detail?.value;
      if (value) setMood(value);
    });
    on(toggleRef.current, "change", () => {
      setAsleep(!!toggleRef.current?.checked);
    });
    on(sliderRef.current, "input", () => {
      setSleepiness(Number(sliderRef.current?.value ?? 0));
    });
    on(radioRef.current, "change", () => {
      const game = GAMES[radioRef.current?.value ?? ""];
      if (game) toast(`Fellow ${game} enjoyer! 🤝`);
    });
    on(ratingRef.current, "change", () => {
      const stars = Number(ratingRef.current?.value ?? 0);
      if (stars === 5) toast("Five stars?! Thank youuu (˶˃ ᵕ ˂˶)");
      else if (stars > 0) toast(`${stars} star${stars > 1 ? "s" : ""}, noted~`);
    });
    on(checkboxRef.current, "change", () => {
      if (checkboxRef.current?.checked) toast("Pinky promise! 💗");
    });

    // A pretend load that fills in surges.
    let timer: ReturnType<typeof setTimeout> | undefined;
    const charge = () => {
      const bar = progressRef.current;
      if (!bar?.set) return;
      clearTimeout(timer);
      bar.reset?.();
      let value = 0;
      const tick = () => {
        value = Math.min(1, value + 0.04 + Math.random() * 0.16);
        bar.set?.(value);
        if (value < 1) timer = setTimeout(tick, 280 + Math.random() * 520);
      };
      timer = setTimeout(tick, 400);
    };
    on(chargeRef.current, "click", charge);

    // Play the load once, the first time the bar is on screen.
    let seen: IntersectionObserver | undefined;
    customElements.whenDefined("sakuga-progress").then(() => {
      const bar = progressRef.current;
      if (!bar) return;
      seen = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          charge();
          seen?.disconnect();
        }
      });
      seen.observe(bar);
    });

    return () => {
      cleanups.forEach((fn) => fn());
      clearTimeout(timer);
      seen?.disconnect();
    };
  }, []);

  const sleepinessNote =
    sleepiness > 70
      ? "Need coffee ☕"
      : sleepiness > 30
        ? "Functional-ish (・_・;)"
        : "FULL POWER! ٩(ˊᗜˋ*)و";

  return (
    <Card
      ref={cardRef}
      className="sakuga-section mx-auto mt-6 max-w-6xl p-4 sm:p-6 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 border-4 border-purple-300 pixel-shadow"
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>
          <h2 className="pixelated-font font-bold text-purple-800">
            {"zenny.exe"}
          </h2>
        </div>
        <sakuga-tooltip
          label="About these toys"
          text="Anime-style controls by Sakuga VFX (MIT). Go on, poke them all!"
        ></sakuga-tooltip>
      </div>
      <p className="mb-4 text-sm text-gray-700">
        {"Ordinary buttons that react like an anime fight scene. Poke everything~ (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"}
      </p>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Tile title="say_hi.txt">
          <sakuga-input
            ref={nameRef}
            label="Your name"
            placeholder="your name~"
          ></sakuga-input>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <sakuga-button ref={sendRef}>{"Send ✦"}</sakuga-button>
            <sakuga-button ref={clearRef} variant="secondary">
              {"Clear"}
            </sakuga-button>
          </div>
        </Tile>

        <Tile title="current_mood">
          <sakuga-tabs ref={tabsRef} label="Current mood">
            <option value="sleepy">{"Sleepy"}</option>
            <option value="gaming">{"Gaming"}</option>
            <option value="coding">{"Coding"}</option>
          </sakuga-tabs>
          <p className="text-center font-mono text-sm text-purple-700">
            {`> ${MOODS[mood]}`}
          </p>
        </Tile>

        <Tile title="sleep_mode">
          <sakuga-toggle ref={toggleRef} label="Sleep mode"></sakuga-toggle>
          <p className="text-center font-mono text-sm text-purple-700">
            {asleep ? "> Shh... sleepyhead is resting 💤" : "> Wide awake! (for now)"}
          </p>
        </Tile>

        <Tile title="sleepiness_meter">
          <sakuga-slider
            ref={sliderRef}
            label="Sleepiness"
            value="80"
          ></sakuga-slider>
          <p className="text-center font-mono text-sm text-purple-700">
            {`> ${sleepinessNote}`}
          </p>
        </Tile>

        <Tile title="fav_game">
          <sakuga-radio ref={radioRef} label="Favourite game" value="hsr">
            {Object.entries(GAMES).map(([value, game]) => (
              <option key={value} value={value}>
                {game}
              </option>
            ))}
          </sakuga-radio>
        </Tile>

        <Tile title="rate_my_blog">
          <sakuga-rating ref={ratingRef} label="Rate my blog"></sakuga-rating>
          <sakuga-checkbox ref={checkboxRef}>
            {"I'll come back again~"}
          </sakuga-checkbox>
        </Tile>

        <Tile title="charging_fullstuck_power" className="sm:col-span-2 lg:col-span-3">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-10">
            <sakuga-progress
              ref={progressRef}
              label="Charging fullstuck power"
              done-label="Fullstuck ✓"
            ></sakuga-progress>
            <sakuga-button ref={chargeRef} variant="secondary">
              {"Charge again!"}
            </sakuga-button>
          </div>
        </Tile>
      </div>

      <sakuga-toast
        ref={toastRef}
        className="sakuga-toast-dock"
      ></sakuga-toast>
    </Card>
  );
}
