import type { Track, Artwork, Skill, Project } from "@/types";

export const playlist: Track[] = [
  { title: "Freesia", artist: "Rie Tanaka", duration: "4:28" },
];

export const featuredArtworks: Artwork[] = [
  {
    id: 1,
    title: "Pixel Princess",
    category: "Digital Art",
    image: "/placeholder.svg?height=200&width=200",
    colors: ["#ff69b4", "#da70d6", "#9370db"],
  },
  {
    id: 2,
    title: "Neon Dreams",
    category: "Illustration",
    image: "/placeholder.svg?height=200&width=200",
    colors: ["#00ffff", "#ff1493", "#9370db"],
  },
  {
    id: 3,
    title: "Kawaii Cat",
    category: "Character Design",
    image: "/placeholder.svg?height=200&width=200",
    colors: ["#ffb6c1", "#ffd700", "#98fb98"],
  },
  {
    id: 4,
    title: "Starry Night",
    category: "Background Art",
    image: "/placeholder.svg?height=200&width=200",
    colors: ["#191970", "#ff69b4", "#ffd700"],
  },
];

export const allArtworks: Artwork[] = [
  {
    id: 1,
    title: "Pixel Princess",
    category: "Digital Art",
    image: "/placeholder.svg?height=400&width=400",
    colors: ["#ff69b4", "#da70d6", "#9370db"],
    description:
      "A cute pixel art princess character with magical powers. This piece was inspired by classic 16-bit RPG games and features a kawaii art style with pastel colors.",
    createdDate: "2024-01-15",
    tools: ["Adobe Photoshop", "Pixel Art"],
    dimensions: "512x512px",
    likes: 127,
  },
  {
    id: 2,
    title: "Neon Dreams",
    category: "Illustration",
    image: "/placeholder.svg?height=400&width=400",
    colors: ["#00ffff", "#ff1493", "#9370db"],
    description:
      "A vibrant cyberpunk-inspired illustration featuring neon lights and futuristic elements. The piece combines anime aesthetics with retro-futuristic themes.",
    createdDate: "2024-01-20",
    tools: ["Adobe Illustrator", "Digital Painting"],
    dimensions: "1920x1080px",
    likes: 89,
  },
  {
    id: 3,
    title: "Kawaii Cat",
    category: "Character Design",
    image: "/placeholder.svg?height=400&width=400",
    colors: ["#ffb6c1", "#ffd700", "#98fb98"],
    description:
      "An adorable cat character design with big sparkly eyes and a cheerful expression. Perfect for use in games, stickers, or merchandise.",
    createdDate: "2024-02-01",
    tools: ["Procreate", "Character Design"],
    dimensions: "2048x2048px",
    likes: 203,
  },
  {
    id: 4,
    title: "Starry Night",
    category: "Background Art",
    image: "/placeholder.svg?height=400&width=400",
    colors: ["#191970", "#ff69b4", "#ffd700"],
    description:
      "A magical starry night background with floating stars and dreamy clouds. This piece was created for a mobile game's night scene.",
    createdDate: "2024-02-10",
    tools: ["Adobe Photoshop", "Digital Painting"],
    dimensions: "3840x2160px",
    likes: 156,
  },
  {
    id: 5,
    title: "Cherry Blossom",
    category: "Digital Art",
    image: "/placeholder.svg?height=400&width=400",
    colors: ["#ffb6c1", "#ffc0cb", "#ffffff"],
    description:
      "Delicate cherry blossom petals floating in the wind. This serene piece captures the beauty of spring with soft pink tones and gentle movement.",
    createdDate: "2024-02-14",
    tools: ["Adobe Photoshop", "Digital Painting"],
    dimensions: "1600x1200px",
    likes: 178,
  },
  {
    id: 6,
    title: "Magical Girl",
    category: "Character Design",
    image: "/placeholder.svg?height=400&width=400",
    colors: ["#ff69b4", "#9370db", "#ffd700"],
    description:
      "A magical girl character with flowing hair and a sparkly outfit. Inspired by classic anime magical girl series with modern kawaii elements.",
    createdDate: "2024-02-20",
    tools: ["Clip Studio Paint", "Character Design"],
    dimensions: "1080x1920px",
    likes: 245,
  },
  {
    id: 7,
    title: "Pixel Landscape",
    category: "Background Art",
    image: "/placeholder.svg?height=400&width=400",
    colors: ["#87ceeb", "#98fb98", "#ffd700"],
    description:
      "A peaceful pixel art landscape with rolling hills, fluffy clouds, and a bright sun. Perfect for retro-style games or nostalgic artwork.",
    createdDate: "2024-03-01",
    tools: ["Aseprite", "Pixel Art"],
    dimensions: "640x480px",
    likes: 134,
  },
  {
    id: 8,
    title: "Cute Monster",
    category: "Character Design",
    image: "/placeholder.svg?height=400&width=400",
    colors: ["#9370db", "#ff69b4", "#00ffff"],
    description:
      "A friendly monster character with big eyes and a sweet smile. Despite being a 'monster', this character is designed to be approachable and cute.",
    createdDate: "2024-03-05",
    tools: ["Adobe Illustrator", "Character Design"],
    dimensions: "1024x1024px",
    likes: 167,
  },
];

export const Projects: Project[] = [
  {
    id: 1,
    title: "DTCTranslation",
    coverImage: "/projects/DTCTranslation.PNG",
    description:
      "A cozy little website where a translation team can upload their translated doujinshi for everyone to enjoy. Readers can browse, read, bookmark their favorites, and leave comments to share their thoughts. The site also lets users read manga from external sources right from the team’s website, making it a comfy place for manga lovers to hang out",
    technologies: [
      "ReactJS",
      "NestJS",
      "MongoDB",
      "Vite",
      "ShadCN UI",
      "TailwindCSS",
      "Typescript",
    ],
    link: "https://dtctranslation.moe/",
    date: "2026-03-01",
  },
  {
    id: 2,
    title: "Tiệm Bánh Nhà Tèo",
    coverImage: "/projects/TBNT.PNG",
    description:
      "An average and cute bakery landing page. Go ahead… order the croissant🥐",
    technologies: ["NextJS", "ShadCN UI", "TailwindCSS", "Typescript"],
    link: "https://tiem-banh-nha-teo.vercel.app",
    date: "2025-12-05",
  },
  {
    id: 3,
    title: "ReselleyZ",
    coverImage: "/projects/ResellyZ.PNG",
    description:
      "A mysterious little control panel created by the great witch Jenny. Its main purpose is to help Jenny with reselling adventures by providing all sorts of magical tools and helpful buttons. No one truly knows what every button does… but somehow it makes reselling empire run smoothly (and maybe a little chaotically).",
    technologies: [
      "NextJS",
      "NestJS",
      "PerplexityAI",
      "MongoDB",
      "ShadCN UI",
      "TailwindCSS",
      "Typescript",
      "Javascript",
    ],
    link: "https://reselly-z-frontend.vercel.app",
    date: "2025-11-30",
  },
  {
    id: 4,
    title: "Pixelated Princesses",
    coverImage: "/projects/PP.PNG",
    description:
      "A chaotic little curator landing page for Chaos Princess, where she proudly displays her very serious (but actually dum dum) game reviews",
    technologies: ["NextJS", "ShadCN UI", "TailwindCSS", "Typescript"],
    link: "https://pixelated-princesses-of-chaos.vercel.app",
    date: "2024-09-12",
  },
  {
    id: 5,
    title: "[Redacted] Website",
    coverImage: "/projects/NVZ.PNG",
    description:
      "⚠️ Warning! Warning! ⚠️ This is a very suspiciously cultured manga website where users can read totally wholesome (definitely not questionable) hentai manga, chat and debate their refined tastes in the forums, and where the mysterious [Redacted] team secretly operates an admin panel to manage and upload their translated works",
    technologies: [
      "NextJS",
      "ElysiaJS",
      "MongoDB",
      "ShadCN UI",
      "TailwindCSS",
      "Typescript",
      "Javascript",
    ],
    type: "redacted",
    date: "2025-02-06",
  },
  {
    id: 6,
    title: "SteamTradeBump",
    coverImage: "/projects/STB.PNG",
    description:
      "A tiny piece of mysterious internet wizardry that magically makes a SteamTrades thread bump itself every hour. No one truly understands the dark arts behind it, just imagine a little goblin in the server room pressing the bump button every 60 minutes while whispering, 'stay at the top… stay at the top…'",
    type: "no_demo",
    technologies: ["NodeJS", "Javascript"],
    date: "2024-05-28",
  },
  {
    id: 7,
    title: "KawaiiKeys",
    coverImage: "/projects/KawaiiKeys.PNG",
    description:
      "Building my own tiny digital shop of goodies where I sell all sorts of fun stuff like game keys, gacha packages, software licenses, account subscriptions, and gift cards. It is basically a little treasure shop where you come in for one key and somehow leave with five other shiny things you didnt plan to buy",
    technologies: ["Unknown"],
    type: "coming_soon",
    date: "2026-03-10",
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "ReactJS", category: "frontend" },
  { name: "NextJS", category: "frontend" },

  // Backend
  { name: "Java Core", category: "backend" },
  { name: "ExpressJS", category: "backend" },
  { name: "ElysiaJS", category: "backend" },
  { name: "SQL", category: "backend" },
  { name: "NoSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Microsoft SQL Server", category: "backend" },

  // Mobile
  { name: "React Native", category: "mobile" },
  { name: "Android", category: "mobile" },
  { name: "iOS", category: "mobile" },
  { name: "Cross-platform", category: "mobile" },

  // Design
  { name: "Adobe Photoshop", category: "design" },
  { name: "Adobe After Effects", category: "design" },
  { name: "Magix Vegas", category: "design" },
  { name: "Format/Converter Software", category: "design" },
];
