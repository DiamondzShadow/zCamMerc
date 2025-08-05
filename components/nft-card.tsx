import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { NFT } from "@/types/nft"

interface NFTCardProps {
  nft: NFT
}

export default function NFTCard({ nft }: NFTCardProps) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full">
      <div className="relative aspect-square">
        <Image
          src={nft.image || "/placeholder.svg"}
          alt={nft.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{nft.name}</h3>
          <Badge
            className={`bg-${nft.rarity === "Legendary" ? "amber" : nft.rarity === "Rare" ? "purple" : "blue"}-900`}
          >
            {nft.rarity}
          </Badge>
        </div>
        <p className="text-zinc-400 text-sm mb-3">{nft.description}</p>
        <div className="flex justify-between items-center text-sm">
          <span className="text-zinc-500">Power: {nft.power}</span>
          <span className="text-red-500 font-medium">{nft.price} ETH</span>
        </div>
      </CardContent>
    </Card>
  )
}
