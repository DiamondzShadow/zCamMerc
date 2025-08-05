export type NFT = {
  id: string
  name: string
  image: string
  description: string
  rarity: "Common" | "Rare" | "Legendary"
  power: number
  price: number
}
