"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Sword, Shield, Zap } from "lucide-react"
import { presidentialNFTs } from "@/data/nfts"

export default function NFTGallery() {
  const [selectedNFT, setSelectedNFT] = useState(presidentialNFTs[0])
  const [viewMode, setViewMode] = useState<"portrait" | "fullbody">("portrait")

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-500"
      case "Uncommon":
        return "bg-green-500"
      case "Rare":
        return "bg-blue-500"
      case "Epic":
        return "bg-purple-500"
      case "Legendary":
        return "bg-orange-500"
      case "Mythic":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const hasFullBody = selectedNFT.fullBodyImage !== undefined

  return (
    <div className="space-y-8">
      {/* Video Showcase Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="overflow-hidden bg-zinc-900 border-violet-500/30">
          <CardContent className="p-0">
            <video className="w-full h-auto" controls loop muted playsInline poster="/nfts/president-lv0.png">
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ramon%20and%20Lionsmane%20Ethereal%20.1-gdZ18KEHcF8tWYQaN6AwiqkzvpYc4M.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
              <h3 className="text-lg font-bold text-violet-300">Ramon's Transformation</h3>
              <p className="text-sm text-zinc-400">Violet Archon-induced LIONSMANE metamorphosis</p>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden bg-zinc-900 border-cyan-500/30">
          <CardContent className="p-0">
            <video className="w-full h-auto" controls loop muted playsInline poster="/nfts/president-lv0.png">
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_019997f3-e8ab-7298-ad34-221bf6ae28ec-b5R7tyC3zcMQXPERxNM4SBdTlBSEs7.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
              <h3 className="text-lg font-bold text-cyan-300">Combat Abilities Preview</h3>
              <p className="text-sm text-zinc-400">See the power in action</p>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden bg-zinc-900 border-purple-500/30">
          <CardContent className="p-0">
            <video className="w-full h-auto" controls loop muted playsInline poster="/nfts/president-lv9.png">
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video_01999784-34c2-79ac-94b9-efc2884b0997-89FdKEjBVvJtbQ7YdsCymi8Jp2tpyS.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
              <h3 className="text-lg font-bold text-purple-300">LIONSMANE Evolution Showcase</h3>
              <p className="text-sm text-zinc-400">Watch the Presidential transformation</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="gallery" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="gallery">NFT Gallery</TabsTrigger>
          <TabsTrigger value="details">Selected Details</TabsTrigger>
        </TabsList>

        <TabsContent value="gallery" className="space-y-6">
          {/* View Mode Toggle */}
          {hasFullBody && (
            <div className="flex justify-center gap-4 mb-6">
              <Button
                variant={viewMode === "portrait" ? "default" : "outline"}
                onClick={() => setViewMode("portrait")}
                className="bg-cyan-600 hover:bg-cyan-700"
              >
                Portrait View
              </Button>
              <Button
                variant={viewMode === "fullbody" ? "default" : "outline"}
                onClick={() => setViewMode("fullbody")}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Full Body View
              </Button>
            </div>
          )}

          {/* NFT Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {presidentialNFTs.map((nft) => (
              <Card
                key={nft.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedNFT.id === nft.id ? "ring-2 ring-cyan-500 bg-zinc-800" : "bg-zinc-900 hover:bg-zinc-800"
                } border-zinc-700`}
                onClick={() => setSelectedNFT(nft)}
              >
                <CardContent className="p-3">
                  <div className="aspect-square relative mb-3 rounded overflow-hidden">
                    <Image
                      src={viewMode === "fullbody" && nft.fullBodyImage ? nft.fullBodyImage : nft.image}
                      alt={nft.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-sm text-white truncate">{nft.name}</h3>
                    <div className="flex items-center justify-between">
                      <Badge className={`${getRarityColor(nft.rarity)} text-white text-xs`}>{nft.rarity}</Badge>
                      <span className="text-xs text-cyan-400 font-bold">Lv.{nft.level}</span>
                    </div>
                    <div className="text-xs text-zinc-400">
                      <span className="text-purple-400 font-semibold">⚡ {nft.power}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="details">
          <Card className="bg-zinc-900 border-zinc-700">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image Display */}
                <div className="space-y-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden bg-zinc-800">
                    <Image
                      src={
                        viewMode === "fullbody" && selectedNFT.fullBodyImage
                          ? selectedNFT.fullBodyImage
                          : selectedNFT.image
                      }
                      alt={selectedNFT.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {hasFullBody && (
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant={viewMode === "portrait" ? "default" : "outline"}
                        onClick={() => setViewMode("portrait")}
                        className="flex-1"
                      >
                        Portrait
                      </Button>
                      <Button
                        size="sm"
                        variant={viewMode === "fullbody" ? "default" : "outline"}
                        onClick={() => setViewMode("fullbody")}
                        className="flex-1"
                      >
                        Full Body
                      </Button>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedNFT.name}</h2>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className={`${getRarityColor(selectedNFT.rarity)} text-white`}>{selectedNFT.rarity}</Badge>
                      <span className="text-cyan-400 font-bold">Level {selectedNFT.level}</span>
                      <span className="text-purple-400 font-bold">⚡ {selectedNFT.power}</span>
                    </div>
                    <p className="text-zinc-300 leading-relaxed">{selectedNFT.description}</p>
                  </div>

                  {selectedNFT.floorPrice && (
                    <div className="p-4 bg-zinc-800 rounded-lg border border-zinc-700">
                      <div className="text-sm text-zinc-400 mb-1">Floor Price</div>
                      <div className="text-2xl font-bold text-cyan-400">{selectedNFT.floorPrice}</div>
                    </div>
                  )}

                  {selectedNFT.weapons && selectedNFT.weapons.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Sword className="h-5 w-5 text-cyan-400" />
                        Equipped Weapons
                      </h3>
                      <div className="space-y-2">
                        {selectedNFT.weapons.map((weapon, index) => (
                          <div
                            key={index}
                            className="p-3 bg-zinc-800 rounded border border-cyan-500/30 flex items-center gap-2"
                          >
                            <Shield className="h-4 w-4 text-cyan-400" />
                            <span className="text-zinc-300">{weapon}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedNFT.abilities && selectedNFT.abilities.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Zap className="h-5 w-5 text-purple-400" />
                        Special Abilities
                      </h3>
                      <div className="space-y-2">
                        {selectedNFT.abilities.map((ability, index) => (
                          <div key={index} className="p-3 bg-zinc-800 rounded border border-purple-500/30">
                            <span className="text-purple-300">{ability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700"
                    onClick={() => window.open(selectedNFT.openseaUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View on OpenSea
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Evolution Path */}
      <Card className="bg-zinc-900 border-zinc-700">
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold text-white mb-6">Evolution Path</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {presidentialNFTs.map((nft, index) => (
              <div key={nft.id} className="flex items-center">
                <div
                  className={`px-4 py-2 rounded-lg cursor-pointer transition-all ${
                    selectedNFT.id === nft.id
                      ? "bg-cyan-600 text-white scale-110"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                  }`}
                  onClick={() => setSelectedNFT(nft)}
                >
                  <div className="text-xs font-bold">Lv.{nft.level}</div>
                  <div className={`text-xs ${getRarityColor(nft.rarity)} px-2 py-0.5 rounded mt-1`}>{nft.rarity}</div>
                </div>
                {index < presidentialNFTs.length - 1 && <div className="text-zinc-600 mx-2">→</div>}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
