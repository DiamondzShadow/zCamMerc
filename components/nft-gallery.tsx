"use client"

import { useState } from "react"
import Image from "next/image"
import { presidentNFTs } from "@/data/nfts"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Crown, Zap } from "lucide-react"

export default function NFTGallery() {
  const [selectedNFT, setSelectedNFT] = useState(presidentNFTs[0])

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-600 hover:bg-gray-500"
      case "Uncommon":
        return "bg-green-600 hover:bg-green-500"
      case "Rare":
        return "bg-blue-600 hover:bg-blue-500"
      case "Epic":
        return "bg-purple-600 hover:bg-purple-500"
      case "Legendary":
        return "bg-orange-600 hover:bg-orange-500"
      case "Mythic":
        return "bg-red-600 hover:bg-red-500"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div className="space-y-8">
      {/* Collection Header */}
      <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              The Sentient Economy
            </h3>
            <p className="text-zinc-400">LIONSMANE x DIAMONDZ Edition - The Origin Wave</p>
          </div>
          <Button
            className="bg-cyan-600 hover:bg-cyan-700"
            onClick={() =>
              window.open(
                "https://opensea.io/collection/the-sentient-economy-lionsmane-x-diamondz-edition-the-origin-wave",
                "_blank",
              )
            }
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View on OpenSea
          </Button>
        </div>
      </div>

      {/* NFT Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {presidentNFTs.map((nft) => (
          <Card
            key={nft.id}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 ${
              selectedNFT.id === nft.id ? "ring-2 ring-cyan-500 shadow-lg shadow-cyan-500/50" : ""
            }`}
            onClick={() => setSelectedNFT(nft)}
          >
            <CardContent className="p-3">
              <div className="relative aspect-square mb-3 rounded-lg overflow-hidden bg-black">
                <Image src={nft.image || "/placeholder.svg"} alt={nft.name} fill className="object-contain" />
                <div className="absolute top-2 right-2">
                  <Badge className={`${getRarityColor(nft.rarity)} text-white text-xs`}>{nft.rarity}</Badge>
                </div>
                <div className="absolute top-2 left-2">
                  <Badge variant="outline" className="bg-black/70 text-white border-cyan-500/50 text-xs">
                    Lv.{nft.level}
                  </Badge>
                </div>
              </div>
              <h4 className="font-bold text-sm mb-1 text-center">{nft.name}</h4>
              <div className="flex items-center justify-center gap-1 text-xs text-cyan-400">
                <Crown className="h-3 w-3" />
                <span>President</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Selected NFT Details */}
      {selectedNFT && (
        <Card className="overflow-hidden bg-gradient-to-br from-zinc-900 to-black border-cyan-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            {/* Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-black">
              <Image
                src={selectedNFT.image || "/placeholder.svg"}
                alt={selectedNFT.name}
                fill
                className="object-contain"
              />
              <div className="absolute top-4 right-4">
                <Badge className={`${getRarityColor(selectedNFT.rarity)} text-white`}>{selectedNFT.rarity}</Badge>
              </div>
              <div className="absolute top-4 left-4">
                <Badge variant="outline" className="bg-black/70 text-white border-cyan-500/50">
                  Level {selectedNFT.level}
                </Badge>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {selectedNFT.name}
                </h3>
                <p className="text-zinc-400 text-sm mb-4">{selectedNFT.collection}</p>
                <p className="text-zinc-300 leading-relaxed">{selectedNFT.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-4 border border-zinc-700">
                  <div className="text-sm text-zinc-400 mb-1">Power Level</div>
                  <div className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    {selectedNFT.power}
                  </div>
                </div>
                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-4 border border-zinc-700">
                  <div className="text-sm text-zinc-400 mb-1">Floor Price</div>
                  <div className="text-2xl font-bold text-green-400">{selectedNFT.price} ETH</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  className="flex-1 bg-cyan-600 hover:bg-cyan-700"
                  onClick={() => window.open(selectedNFT.openseaUrl, "_blank")}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on OpenSea
                </Button>
                <Button className="flex-1 bg-red-600 hover:bg-red-700">
                  <Crown className="h-4 w-4 mr-2" />
                  Acquire NFT
                </Button>
              </div>

              <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                <p className="text-sm text-zinc-300">
                  <span className="font-semibold text-cyan-400">The Origin Wave:</span> These Presidential LIONSMANE
                  NFTs represent the first wave of sentient digital entities in the DIAMONDZ ecosystem. Each level
                  unlocks new powers and abilities in the metaverse.
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
