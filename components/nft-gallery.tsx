"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Crown, Eye, Infinity } from "lucide-react"

const lionsmaneEvolutions = [
  {
    id: "mystical",
    name: "Mystical LIONSMANE",
    image: "/lionsmane/evolution-mystical.png",
    level: 25,
    power: 750,
    rarity: "Rare",
    fusion: "Spirit-Digital",
    class: "Mystic Guardian",
    description:
      "A spiritual evolution with ethereal energy and floating feathers. Connects to ancient digital spirits.",
    abilities: ["Energy Manipulation", "Spirit Communication", "Ethereal Form"],
    price: 2.5,
  },
  {
    id: "vr-tech",
    name: "VR Tech LIONSMANE",
    image: "/lionsmane/evolution-vr-tech.png",
    level: 50,
    power: 1500,
    rarity: "Epic",
    fusion: "Tech-Digital",
    class: "Cyber Predator",
    description:
      "Enhanced with VR technology and circuit board integration. Can interface directly with the metaverse.",
    abilities: ["VR Interface", "Circuit Manipulation", "Digital Roar"],
    price: 5.0,
  },
  {
    id: "legendary",
    name: "Legendary LIONSMANE",
    image: "/lionsmane/evolution-legendary.png",
    level: 99,
    power: 9999,
    rarity: "Legendary",
    fusion: "Human-Digital Lion",
    class: "Evolved Predator",
    description:
      "The ultimate fusion of human consciousness and digital lion power. Crowned with spikes of pure energy.",
    abilities: ["Reality Manipulation", "Infinite Power", "Dimensional Travel"],
    price: 15.0,
  },
  {
    id: "ultimate",
    name: "Ultimate Chain LIONSMANE",
    image: "/lionsmane/evolution-ultimate.png",
    level: 100,
    power: "Infinity",
    rarity: "Mythic",
    fusion: "Blockchain-Integrated",
    class: "NFT Hunter Supreme",
    description:
      "The final evolution - fully integrated with the blockchain. Can hunt and capture other NFTs in the metaverse.",
    abilities: ["NFT Hunting", "Blockchain Control", "Diamond Generation"],
    price: 25.0,
  },
]

const basicLionsmane = [
  {
    id: "defender",
    name: "LIONSMANE Defender",
    image: "/placeholder.svg?height=300&width=300&text=Defender",
    level: 1,
    power: 75,
    rarity: "Common",
    fusion: "Basic Digital",
    class: "Guardian",
    description: "A protective LIONSMANE NFT that specializes in digital defense and system repair.",
    abilities: ["Shield Generation", "System Repair", "Basic Combat"],
    price: 0.5,
  },
  {
    id: "hunter",
    name: "LIONSMANE Hunter",
    image: "/placeholder.svg?height=300&width=300&text=Hunter",
    level: 5,
    power: 150,
    rarity: "Uncommon",
    fusion: "Combat Digital",
    class: "Tracker",
    description: "An aggressive LIONSMANE NFT designed to track and neutralize SCAM nanobots.",
    abilities: ["Threat Detection", "Combat Protocols", "Stealth Mode"],
    price: 1.2,
  },
  {
    id: "architect",
    name: "LIONSMANE Architect",
    image: "/placeholder.svg?height=300&width=300&text=Architect",
    level: 10,
    power: 300,
    rarity: "Rare",
    fusion: "Builder Digital",
    class: "Constructor",
    description: "A builder LIONSMANE NFT that can create secure digital habitats and repair damaged code.",
    abilities: ["Habitat Creation", "Code Repair", "Digital Construction"],
    price: 2.0,
  },
]

export default function NFTGallery() {
  const [selectedNFT, setSelectedNFT] = useState(lionsmaneEvolutions[0])

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

  const getClassIcon = (nftClass: string) => {
    if (nftClass.includes("Predator") || nftClass.includes("Hunter")) return <Zap className="h-4 w-4" />
    if (nftClass.includes("Supreme") || nftClass.includes("Evolved")) return <Crown className="h-4 w-4" />
    if (nftClass.includes("Mystic") || nftClass.includes("Guardian")) return <Eye className="h-4 w-4" />
    return <Zap className="h-4 w-4" />
  }

  return (
    <div className="space-y-8">
      <Tabs defaultValue="evolutions" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="evolutions" className="data-[state=active]:bg-red-600">
            Evolution Gallery
          </TabsTrigger>
          <TabsTrigger value="basic" className="data-[state=active]:bg-red-600">
            Basic Collection
          </TabsTrigger>
        </TabsList>

        <TabsContent value="evolutions" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* NFT Selection Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">Evolution Stages</h3>
              <div className="grid grid-cols-2 gap-4">
                {lionsmaneEvolutions.map((nft) => (
                  <Card
                    key={nft.id}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedNFT.id === nft.id ? "ring-2 ring-cyan-500 shadow-lg shadow-cyan-500/25" : ""
                    }`}
                    onClick={() => setSelectedNFT(nft)}
                  >
                    <CardContent className="p-4">
                      <div className="relative aspect-square mb-3 rounded-lg overflow-hidden">
                        <Image src={nft.image || "/placeholder.svg"} alt={nft.name} fill className="object-cover" />
                        <div className="absolute top-2 right-2">
                          <Badge className={`${getRarityColor(nft.rarity)} text-white`}>{nft.rarity}</Badge>
                        </div>
                        <div className="absolute top-2 left-2">
                          <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                            Lv.{nft.level}
                          </Badge>
                        </div>
                      </div>
                      <h4 className="font-bold text-sm mb-1">{nft.name}</h4>
                      <div className="flex items-center gap-2 text-xs text-zinc-400">
                        {getClassIcon(nft.class)}
                        <span>{nft.class}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Selected NFT Details */}
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={selectedNFT.image || "/placeholder.svg"}
                    alt={selectedNFT.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={`${getRarityColor(selectedNFT.rarity)} text-white`}>{selectedNFT.rarity}</Badge>
                      <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                        Level {selectedNFT.level}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{selectedNFT.name}</h3>
                    <div className="flex items-center gap-2 text-cyan-400">
                      {getClassIcon(selectedNFT.class)}
                      <span className="text-sm">{selectedNFT.class}</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-zinc-400 mb-1">Power Level</div>
                      <div className="text-xl font-bold text-cyan-400">
                        {selectedNFT.power === "Infinity" ? (
                          <div className="flex items-center gap-1">
                            <Infinity className="h-5 w-5" />
                            <span>∞</span>
                          </div>
                        ) : (
                          selectedNFT.power.toLocaleString()
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-zinc-400 mb-1">Fusion Type</div>
                      <div className="text-lg font-semibold text-purple-400">{selectedNFT.fusion}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm text-zinc-400 mb-2">Description</div>
                    <p className="text-zinc-300 text-sm leading-relaxed">{selectedNFT.description}</p>
                  </div>

                  <div>
                    <div className="text-sm text-zinc-400 mb-2">Special Abilities</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedNFT.abilities.map((ability, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {ability}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                    <div>
                      <div className="text-sm text-zinc-400">Price</div>
                      <div className="text-xl font-bold text-green-400">{selectedNFT.price} ETH</div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700">Acquire NFT</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="basic" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basicLionsmane.map((nft) => (
              <Card
                key={nft.id}
                className="overflow-hidden hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <div className="relative aspect-square">
                  <Image src={nft.image || "/placeholder.svg"} alt={nft.name} fill className="object-cover" />
                  <div className="absolute top-3 right-3">
                    <Badge className={`${getRarityColor(nft.rarity)} text-white`}>{nft.rarity}</Badge>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                      Lv.{nft.level}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{nft.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      {getClassIcon(nft.class)}
                      <span>{nft.class}</span>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed">{nft.description}</p>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-zinc-500">Power</div>
                      <div className="font-semibold text-cyan-400">{nft.power}</div>
                    </div>
                    <div>
                      <div className="text-zinc-500">Fusion</div>
                      <div className="font-semibold text-purple-400">{nft.fusion}</div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-zinc-500 mb-2">Abilities</div>
                    <div className="flex flex-wrap gap-1">
                      {nft.abilities.map((ability, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {ability}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
                    <div className="text-lg font-bold text-green-400">{nft.price} ETH</div>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      Mint NFT
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
