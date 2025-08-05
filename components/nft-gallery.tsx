"use client"

import { useState } from "react"
import { lionsmaneNFTs } from "@/data/nfts"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function NFTGallery() {
  const [selectedNFT, setSelectedNFT] = useState(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {lionsmaneNFTs.map((nft) => (
          <Card
            key={nft.id}
            className="bg-zinc-900 border-zinc-800 overflow-hidden h-full cursor-pointer hover:border-red-500 transition-colors"
            onClick={() => setSelectedNFT(nft)}
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${nft.image})` }} />
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold">{nft.name}</h3>
                <Badge
                  className={`${
                    nft.rarity === "Legendary"
                      ? "bg-amber-900 hover:bg-amber-800"
                      : nft.rarity === "Rare"
                        ? "bg-purple-900 hover:bg-purple-800"
                        : "bg-blue-900 hover:bg-blue-800"
                  }`}
                >
                  {nft.rarity}
                </Badge>
              </div>
              <p className="text-zinc-400 text-sm mb-3">{nft.description.substring(0, 60)}...</p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500">Power: {nft.power}</span>
                <span className="text-red-500 font-medium">{nft.price} ETH</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedNFT && (
        <Dialog open={!!selectedNFT} onOpenChange={() => setSelectedNFT(null)}>
          <DialogContent className="bg-zinc-900 border-zinc-800 sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{selectedNFT.name}</DialogTitle>
              <DialogDescription>{selectedNFT.rarity} LIONSMANE NFT</DialogDescription>
            </DialogHeader>

            <div className="relative aspect-square rounded-md overflow-hidden mb-4">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedNFT.image})` }}
              />
            </div>

            <p className="text-zinc-300 mb-4">{selectedNFT.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-zinc-800 p-3 rounded-md">
                <div className="text-sm text-zinc-500">Power</div>
                <div className="text-lg font-bold">{selectedNFT.power}</div>
              </div>
              <div className="bg-zinc-800 p-3 rounded-md">
                <div className="text-sm text-zinc-500">Price</div>
                <div className="text-lg font-bold text-red-500">{selectedNFT.price} ETH</div>
              </div>
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700">Mint This NFT</Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
