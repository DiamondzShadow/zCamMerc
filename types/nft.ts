export interface NFT {
  id: string
  name: string
  image: string
  fullBodyImage?: string
  description: string
  rarity: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary" | "Mythic"
  power: number
  price: number
  level?: number
  weapons?: string[]
  collection?: string
  openseaUrl?: string
}
