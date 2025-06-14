export interface Track {
  title: string
  artist: string
  duration: string
}

export interface Artwork {
  id: number
  title: string
  category: string
  image: string
  colors: string[]
  description?: string
  createdDate?: string
  tools?: string[]
  dimensions?: string
  likes?: number
}

export interface Skill {
  name: string
  category: "frontend" | "backend" | "mobile" | "design"
}

export interface SparklePosition {
  x: number
  y: number
  delay: number
}
