import type { Track, Artwork, Skill } from "@/types"

export const playlist: Track[] = [
  { title: "Kawaii Dreams", artist: "Pixel Princess", duration: "3:24" },
  { title: "Neon Nights", artist: "Anime Beats", duration: "4:12" },
  { title: "Cherry Blossom", artist: "Lo-fi Girl", duration: "2:58" },
  { title: "Digital Love", artist: "Synth Wave", duration: "3:45" },
]

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
]

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
]

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
]
