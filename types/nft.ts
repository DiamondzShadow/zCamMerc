export type NFT = {
  id: string
  name: string
  image: string
  description: string
  rarity: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary" | "Mythic"
  power: number
  price: number
  level?: number
  collection?: string
  openseaUrl?: string
}
