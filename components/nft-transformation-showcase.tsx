"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Fingerprint, Shield, Zap, Brain, Network, Lock } from "lucide-react"

interface CharacterData {
  id: string
  name: string
  image: string
  role: string
  description: string
  nftAbilities: string[]
  consciousnessLevel: number
  digitalSignature: string
  timeline: "2000s" | "3030s"
  transformationStage: number
}

const characters: CharacterData[] = [
  {
    id: "summer-limptin",
    name: "Summer Limptin",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Summer-rxjqmay47BTGybIWS7PzzUdRwy2R6a.jpeg",
    role: "Renegade Heiress",
    description:
      "Once heir to the Limptin fortune, now a digital revolutionary with access to hybrid weapon code for LIONSMANE NFTs. Her consciousness is being preserved as an NFT to escape her family's reach.",
    nftAbilities: ["Weapon Coding", "Digital Camouflage", "Firewall Penetration", "Memory Encryption"],
    consciousnessLevel: 78,
    digitalSignature: "0xSL78291FE",
    timeline: "2000s",
    transformationStage: 2,
  },
  {
    id: "kjundith",
    name: "Kjundith",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kundilith.02-GO7fOKij62D9ln0JMTWbfrBbY7wgw0.jpeg",
    role: "Code Hunter",
    description:
      "Brother of murdered researcher Nwgeua, now on the run with fragments of the LIONSMANE code. His consciousness is being digitized to preserve his brother's legacy and combat the Limptin Foundation.",
    nftAbilities: ["Code Recovery", "Digital Archaeology", "Pattern Recognition", "Quantum Resistance"],
    consciousnessLevel: 65,
    digitalSignature: "0xKJ65109AC",
    timeline: "2000s",
    transformationStage: 1,
  },
  {
    id: "general-ramon",
    name: "General Ramon",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/General%20Ramon-omnvIlQiyR0oYaHm2ySdalVJqsqw2J.jpeg",
    role: "Military Strategist",
    description:
      "First human to be fully assimilated by a self-aware LIONSMANE NFT. His military expertise now serves as the foundation for LIONSMANE defense systems in the digital realm.",
    nftAbilities: ["Strategic Deployment", "Resource Allocation", "Tactical Analysis", "Command Protocol"],
    consciousnessLevel: 92,
    digitalSignature: "0xGR92476BD",
    timeline: "2000s",
    transformationStage: 3,
  },
]

const transformationStages = [
  "Consciousness Mapping",
  "Digital Framework Construction",
  "Neural Pattern Integration",
  "Complete NFT Transformation",
]

export default function NFTTransformationShowcase() {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterData>(characters[0])
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="w-full bg-black text-white min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            NFT Transformation Protocol
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            The process of digitizing human consciousness into LIONSMANE NFTs, preserving identity while enabling
            existence in both physical and digital realms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {characters.map((character) => (
            <Card
              key={character.id}
              className={`bg-zinc-900 border-zinc-800 overflow-hidden cursor-pointer transition-all hover:border-blue-500 ${selectedCharacter.id === character.id ? "ring-2 ring-blue-500" : ""}`}
              onClick={() => setSelectedCharacter(character)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={character.image || "/placeholder.svg"} alt={character.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <Badge className="bg-blue-900 hover:bg-blue-800">
                    Stage {character.transformationStage}: {transformationStages[character.transformationStage - 1]}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">{character.name}</h3>
                <p className="text-zinc-400 text-sm">{character.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 relative">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full">
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={selectedCharacter.image || "/placeholder.svg"}
                  alt={selectedCharacter.name}
                  fill
                  className="object-cover"
                />

                {/* Digital overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-500/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                />

                {/* Grid lines */}
                <div className="absolute inset-0 bg-[url('/neon-grid.png')] bg-cover opacity-30" />

                {/* Digital particles */}
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-500 rounded-full"
                    initial={{
                      x: Math.random() * 100 + "%",
                      y: Math.random() * 100 + "%",
                      opacity: 0,
                    }}
                    animate={{
                      x: Math.random() * 100 + "%",
                      y: Math.random() * 100 + "%",
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}

                {/* Scanning effect */}
                <motion.div
                  className="absolute inset-0 w-full h-1 bg-blue-500/50"
                  initial={{ top: 0 }}
                  animate={{ top: "100%" }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
                />
              </div>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card className="bg-zinc-900 border-zinc-800 h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedCharacter.name}</h2>
                    <p className="text-zinc-400">{selectedCharacter.role}</p>
                  </div>
                  <Badge className="bg-purple-900 hover:bg-purple-800">{selectedCharacter.timeline} Timeline</Badge>
                </div>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-zinc-800">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="transformation">Transformation</TabsTrigger>
                    <TabsTrigger value="abilities">NFT Abilities</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="pt-4">
                    <p className="text-zinc-300 mb-4">{selectedCharacter.description}</p>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-zinc-800 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Brain className="w-5 h-5 mr-2 text-blue-400" />
                          <h4 className="text-sm font-semibold">Consciousness Level</h4>
                        </div>
                        <div className="w-full bg-zinc-700 rounded-full h-2.5">
                          <div
                            className="bg-blue-500 h-2.5 rounded-full"
                            style={{ width: `${selectedCharacter.consciousnessLevel}%` }}
                          ></div>
                        </div>
                        <p className="text-right text-sm text-zinc-400 mt-1">{selectedCharacter.consciousnessLevel}%</p>
                      </div>

                      <div className="bg-zinc-800 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Fingerprint className="w-5 h-5 mr-2 text-purple-400" />
                          <h4 className="text-sm font-semibold">Digital Signature</h4>
                        </div>
                        <p className="font-mono text-purple-400">{selectedCharacter.digitalSignature}</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="transformation" className="pt-4">
                    <div className="space-y-6">
                      {transformationStages.map((stage, index) => (
                        <div
                          key={index}
                          className={`flex items-center ${index + 1 <= selectedCharacter.transformationStage ? "opacity-100" : "opacity-40"}`}
                        >
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${index + 1 <= selectedCharacter.transformationStage ? "bg-blue-500" : "bg-zinc-700"}`}
                          >
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{stage}</h4>
                            <p className="text-sm text-zinc-400">
                              {index === 0 &&
                                "Scanning and mapping neural pathways to create a digital twin of consciousness."}
                              {index === 1 && "Building the NFT framework that will house the digitized consciousness."}
                              {index === 2 &&
                                "Integrating neural patterns with the NFT structure to maintain identity."}
                              {index === 3 &&
                                "Complete transformation into a self-aware NFT entity capable of autonomous action."}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="abilities" className="pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      {selectedCharacter.nftAbilities.map((ability, index) => (
                        <div key={index} className="bg-zinc-800 p-4 rounded-lg">
                          <div className="flex items-center mb-2">
                            {index === 0 && <Code className="w-5 h-5 mr-2 text-green-400" />}
                            {index === 1 && <Shield className="w-5 h-5 mr-2 text-blue-400" />}
                            {index === 2 && <Zap className="w-5 h-5 mr-2 text-yellow-400" />}
                            {index === 3 && <Lock className="w-5 h-5 mr-2 text-purple-400" />}
                            <h4 className="font-semibold">{ability}</h4>
                          </div>
                          <p className="text-sm text-zinc-400">
                            {index === 0 && "Manipulate and create digital code structures within the metaverse."}
                            {index === 1 && "Adapt to different digital environments and evade detection."}
                            {index === 2 && "Analyze and exploit weaknesses in digital security systems."}
                            {index === 3 && "Protect digital assets and information from unauthorized access."}
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 flex justify-between">
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-400 hover:bg-blue-950"
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    {showDetails ? "Hide Technical Details" : "Show Technical Details"}
                  </Button>

                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Network className="w-4 h-4 mr-2" />
                    Connect to LIONSMANE Network
                  </Button>
                </div>

                {showDetails && (
                  <div className="mt-4 bg-zinc-950 border border-zinc-800 rounded-lg p-4 font-mono text-xs text-zinc-400">
                    <p>// NFT Transformation Protocol v3.7.2</p>
                    <p>// Subject: {selectedCharacter.name}</p>
                    <p className="mt-2">const consciousnessMapping = initializeMapping({"{"}</p>
                    <p> neuralPathways: {Math.floor(Math.random() * 900000) + 100000},</p>
                    <p> memoryNodes: {Math.floor(Math.random() * 50000) + 10000},</p>
                    <p> identityCore: "{selectedCharacter.digitalSignature}",</p>
                    <p> compressionRatio: 0.{Math.floor(Math.random() * 90) + 10}</p>
                    <p>{"}"});</p>
                    <p className="mt-2">// Current Status: Stage {selectedCharacter.transformationStage}</p>
                    <p>// Estimated Completion: {100 - (4 - selectedCharacter.transformationStage) * 25}%</p>
                    <p className="mt-2 text-green-500">// WARNING: DO NOT INTERRUPT TRANSFORMATION PROCESS</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
