export type Skill = {
  id: string
  name: string
  description: string
  level: number
  maxLevel: number
  category: "combat" | "hacking" | "stealth" | "social"
  icon: string
}

export type Character = {
  id: string
  name: string
  image: string
  faction: "hero" | "villain" | "neutral"
  location: string
  description: string
  abilities: string[]
  xp: number
  level: number
  skillPoints: number
  skills: Skill[]
}
