"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  Zap,
  Target,
  Eye,
  Brain,
  Heart,
  Cpu,
  Crown,
  Star,
  ArrowUp,
  Lock,
  CheckCircle,
  User,
  Users,
  Diamond,
} from "lucide-react"

interface HunterStats {
  health: number
  armor: number
  speed: number
  stealth: number
  accuracy: number
  lionsmaneResonance: number
  power?: number
  fusion?: number
}

interface HunterAbility {
  name: string
  description: string
  cooldown: number
  energyCost: number
  unlocked: boolean
}

interface HunterLevel {
  level: number
  name: string
  description: string
  image: string
  stats: HunterStats
  abilities: HunterAbility[]
  cost: number
  unlocked: boolean
  requirements?: string
  hunterId?: string
  class?: string
  rank?: string
  geneFusion?: string
  rarity: string
}

const hunterProgression: HunterLevel[] = [
  {
    level: 1,
    name: "Digital Recruit",
    description: "Basic CAUSE operative equipped with standard tactical gear and basic LIONSMANE interface.",
    image: "/hunters/level-1-hunter.jpeg",
    stats: {
      health: 100,
      armor: 60,
      speed: 70,
      stealth: 50,
      accuracy: 65,
      lionsmaneResonance: 25,
    },
    abilities: [
      {
        name: "Tactical Scan",
        description: "Basic enemy detection and threat assessment.",
        cooldown: 30,
        energyCost: 20,
        unlocked: true,
      },
      {
        name: "Combat Training",
        description: "Enhanced weapon handling and combat reflexes.",
        cooldown: 0,
        energyCost: 0,
        unlocked: true,
      },
    ],
    cost: 0,
    unlocked: true,
    rarity: "Common",
  },
  {
    level: 25,
    name: "SCAM Maxi Hunter",
    description:
      "Elite cybernetic lion warrior equipped with advanced VR interface and quantum weaponry. Dominates the digital battlefield with unmatched precision.",
    image: "/hunters/hunter-scam-maxi.png",
    stats: {
      health: 250,
      armor: 120,
      speed: 110,
      stealth: 95,
      accuracy: 98,
      lionsmaneResonance: 85,
      power: 95,
      fusion: 90,
    },
    abilities: [
      {
        name: "Quantum Strike",
        description: "Teleport behind enemies and deliver devastating quantum-enhanced attacks.",
        cooldown: 45,
        energyCost: 60,
        unlocked: false,
      },
      {
        name: "Digital Dominance",
        description: "Take control of enemy systems and turn them against their masters.",
        cooldown: 90,
        energyCost: 80,
        unlocked: false,
      },
      {
        name: "SCAM Protocol",
        description: "Deploy advanced countermeasures against SCAM entities.",
        cooldown: 120,
        energyCost: 100,
        unlocked: false,
      },
    ],
    cost: 150000,
    unlocked: false,
    requirements: "Complete 50 missions, Achieve 85% LIONSMANE resonance",
    rarity: "Epic",
  },
  {
    level: 50,
    name: "Future-Leo Alpha Strike",
    description:
      "Legendary hunter with perfect gene-fusion technology. ID: 007 represents the pinnacle of digital-biological integration.",
    image: "/hunters/hunter-future-leo.png",
    stats: {
      health: 300,
      armor: 150,
      speed: 120,
      stealth: 110,
      accuracy: 95,
      lionsmaneResonance: 95,
      power: 98,
      fusion: 95,
    },
    abilities: [
      {
        name: "Alpha Strike Protocol",
        description: "Unleash devastating area-of-effect attacks that eliminate multiple targets.",
        cooldown: 180,
        energyCost: 120,
        unlocked: false,
      },
      {
        name: "Gene-Fusion Overdrive",
        description: "Temporarily boost all stats to maximum levels through biological enhancement.",
        cooldown: 300,
        energyCost: 150,
        unlocked: false,
      },
      {
        name: "Future Sight",
        description: "Predict enemy movements and counter-attack with perfect precision.",
        cooldown: 240,
        energyCost: 100,
        unlocked: false,
      },
    ],
    cost: 500000,
    unlocked: false,
    requirements: "Defeat 3 SCAM Overlords, Master quantum weaponry",
    hunterId: "007",
    class: "FUTURE-LEO",
    rank: "ALPHA-STRIKE",
    geneFusion: "DIGI-LION",
    rarity: "Legendary",
  },
  {
    level: 75,
    name: "Evolved Mane Legacy",
    description:
      "CPAC-001 class hunter representing the legacy of evolved consciousness. Wields reality-bending powers through complete LIONSMANE integration.",
    image: "/hunters/hunter-evolved-mane.png",
    stats: {
      health: 400,
      armor: 180,
      speed: 130,
      stealth: 120,
      accuracy: 110,
      lionsmaneResonance: 98,
      power: 99,
      fusion: 98,
    },
    abilities: [
      {
        name: "Reality Blade",
        description: "Manifest energy weapons that can cut through any material or digital construct.",
        cooldown: 60,
        energyCost: 80,
        unlocked: false,
      },
      {
        name: "Consciousness Transfer",
        description: "Project consciousness into digital realms to fight on multiple planes.",
        cooldown: 400,
        energyCost: 200,
        unlocked: false,
      },
      {
        name: "Legacy Protocol",
        description: "Channel the power of all previous LIONSMANE generations.",
        cooldown: 600,
        energyCost: 250,
        unlocked: false,
      },
    ],
    cost: 1000000,
    unlocked: false,
    requirements: "Achieve perfect gene-fusion, Complete the Legacy Trial",
    hunterId: "CPAC-001",
    class: "EVOLVED MANE",
    rank: "LEGACY",
    geneFusion: "PURE LIONSMANE",
    rarity: "Mythic",
  },
  {
    level: 100,
    name: "Legendary Class Hunter",
    description:
      "The ultimate evolution - a fully evolved LIONSMANE NFT with 99% fusion rate and legendary status. Represents the peak of digital consciousness.",
    image: "/hunters/hunter-legendary-class.png",
    stats: {
      health: 500,
      armor: 200,
      speed: 150,
      stealth: 140,
      accuracy: 120,
      lionsmaneResonance: 100,
      power: 100,
      fusion: 99,
    },
    abilities: [
      {
        name: "Legendary Roar",
        description: "Unleash a reality-shaking roar that disables all enemies in a massive radius.",
        cooldown: 300,
        energyCost: 150,
        unlocked: false,
      },
      {
        name: "Diamond Chain Mastery",
        description: "Control the very fabric of the blockchain to manipulate reality.",
        cooldown: 900,
        energyCost: 300,
        unlocked: false,
      },
      {
        name: "Eternal Guardian",
        description: "Become an immortal protector of both digital and physical realms.",
        cooldown: 0,
        energyCost: 0,
        unlocked: false,
      },
    ],
    cost: 2500000,
    unlocked: false,
    requirements: "Transcend all previous limitations, Achieve 100% LIONSMANE resonance",
    hunterId: "CLASS-01",
    class: "LEGENDARY",
    rank: "DIAMOND CHAIN",
    geneFusion: "PERFECT FUSION",
    rarity: "Legendary",
  },
  {
    level: 150,
    name: "LIONSMANE President",
    description:
      "The ultimate authority - a presidential-class hunter who leads the resistance against SCAM forces in urban battlefields. Commands reality itself.",
    image: "/hunters/lionsmane-president.jpg",
    stats: {
      health: 750,
      armor: 300,
      speed: 200,
      stealth: 180,
      accuracy: 150,
      lionsmaneResonance: 100,
      power: 100,
      fusion: 100,
    },
    abilities: [
      {
        name: "Presidential Decree",
        description: "Issue commands that alter the fundamental laws of reality.",
        cooldown: 1200,
        energyCost: 500,
        unlocked: false,
      },
      {
        name: "Urban Warfare Mastery",
        description: "Control entire city blocks and coordinate massive resistance operations.",
        cooldown: 600,
        energyCost: 300,
        unlocked: false,
      },
      {
        name: "SCAM Eradication Protocol",
        description: "Deploy city-wide cleansing protocols that eliminate all SCAM presence.",
        cooldown: 1800,
        energyCost: 750,
        unlocked: false,
      },
    ],
    cost: 5000000,
    unlocked: false,
    requirements: "Lead 100 successful resistance operations, Save 10 cities from SCAM control",
    hunterId: "PRESIDENT-01",
    class: "PRESIDENTIAL",
    rank: "SUPREME COMMANDER",
    geneFusion: "TRANSCENDENT",
    rarity: "Mythic",
  },
]

const StatBar = ({
  label,
  value,
  max = 200,
  icon,
}: { label: string; value: number; max?: number; icon: React.ReactNode }) => {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          {icon}
          <span className="break-words">{label}</span>
        </div>
        <span className="text-sm font-medium">
          {value}
          {typeof value === "number" && value <= 100 && label.includes("%") ? "%" : ""}
        </span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  )
}

export default function HuntersPage() {
  const [selectedHunter, setSelectedHunter] = useState<HunterLevel>(hunterProgression[0])
  const [activeTab, setActiveTab] = useState("overview")

  const upgradeHunter = (targetLevel: number) => {
    console.log(`Upgrading to Hunter Level ${targetLevel}`)
    // In a real app, this would make an API call
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "common":
        return "bg-gray-600"
      case "epic":
        return "bg-purple-600"
      case "legendary":
        return "bg-orange-600"
      case "mythic":
        return "bg-gradient-to-r from-purple-600 to-pink-600"
      default:
        return "bg-blue-600"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent break-words">
          DIAMONDZCHAIN Hunter Evolution
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Evolve from a basic operative to a legendary LIONSMANE President through advanced gene-fusion technology. Each
          evolution unlocks new abilities and enhances your digital consciousness integration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Hunter Level Selection */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center break-words">
              <Users className="w-5 h-5 mr-2 flex-shrink-0" />
              Hunter Classes
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {hunterProgression.map((hunter) => (
                <Card
                  key={hunter.level}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedHunter.level === hunter.level
                      ? "border-blue-500 bg-blue-500/10"
                      : hunter.unlocked
                        ? "border-green-500/50 bg-green-500/5"
                        : "border-gray-500/50 bg-gray-500/5"
                  }`}
                  onClick={() => setSelectedHunter(hunter)}
                >
                  <CardContent className="p-3 sm:p-4">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <div className="relative flex-shrink-0">
                        <Badge className={getRarityColor(hunter.rarity)}>Lv {hunter.level}</Badge>
                        {hunter.level >= 100 && (
                          <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 absolute -top-1 -right-1" />
                        )}
                        {hunter.level >= 150 && (
                          <Diamond className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 absolute -top-2 -right-2" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        {hunter.unlocked ? (
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                        ) : (
                          <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                        )}
                      </div>
                    </div>

                    <h3 className="font-semibold text-xs sm:text-sm mb-1 break-words leading-tight">{hunter.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{hunter.description}</p>

                    <div className="mt-2 flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                      <span className="text-xs break-words">
                        Fusion: {hunter.stats.fusion || hunter.stats.lionsmaneResonance}%
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Hunter Details */}
        <div className="lg:col-span-3">
          <Card className="overflow-hidden">
            <div className="relative h-60 sm:h-80">
              <Image
                src={selectedHunter.image || "/placeholder.svg"}
                alt={selectedHunter.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <Badge className={getRarityColor(selectedHunter.rarity)}>Level {selectedHunter.level}</Badge>
                  {selectedHunter.level >= 100 && <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />}
                  {selectedHunter.level >= 150 && <Diamond className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />}
                  {selectedHunter.unlocked ? (
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                  ) : (
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  )}
                </div>
                <h2 className="text-xl sm:text-3xl font-bold text-white mb-2 break-words leading-tight">
                  {selectedHunter.name}
                </h2>
                <p className="text-gray-200 max-w-2xl text-sm sm:text-base leading-relaxed">
                  {selectedHunter.description}
                </p>
              </div>
            </div>

            <CardContent className="p-4 sm:p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4 mb-4 sm:mb-6">
                  <TabsTrigger value="overview" className="text-xs sm:text-sm">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="stats" className="text-xs sm:text-sm">
                    Statistics
                  </TabsTrigger>
                  <TabsTrigger value="abilities" className="text-xs sm:text-sm">
                    Abilities
                  </TabsTrigger>
                  <TabsTrigger value="progression" className="text-xs sm:text-sm">
                    Evolution
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="pt-4 sm:pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-4 break-words">Hunter Profile</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-muted-foreground text-sm">Classification:</span>
                          <span className="font-medium text-sm text-right break-words">{selectedHunter.name}</span>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <span className="text-muted-foreground text-sm">Level:</span>
                          <span className="font-medium text-sm">{selectedHunter.level}</span>
                        </div>
                        {selectedHunter.hunterId && (
                          <div className="flex justify-between items-center gap-2">
                            <span className="text-muted-foreground text-sm">Hunter ID:</span>
                            <span className="font-medium text-sm text-cyan-400">{selectedHunter.hunterId}</span>
                          </div>
                        )}
                        {selectedHunter.class && (
                          <div className="flex justify-between items-start gap-2">
                            <span className="text-muted-foreground text-sm">Class:</span>
                            <span className="font-medium text-sm text-right break-words">{selectedHunter.class}</span>
                          </div>
                        )}
                        {selectedHunter.rank && (
                          <div className="flex justify-between items-start gap-2">
                            <span className="text-muted-foreground text-sm">Rank:</span>
                            <span className="font-medium text-sm text-right break-words">{selectedHunter.rank}</span>
                          </div>
                        )}
                        <div className="flex justify-between items-center gap-2">
                          <span className="text-muted-foreground text-sm">Status:</span>
                          <Badge className={selectedHunter.unlocked ? "bg-green-600" : "bg-gray-600"}>
                            {selectedHunter.unlocked ? "Active" : "Locked"}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <span className="text-muted-foreground text-sm">Rarity:</span>
                          <Badge className={getRarityColor(selectedHunter.rarity)}>{selectedHunter.rarity}</Badge>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <span className="text-muted-foreground text-sm">Fusion Rate:</span>
                          <span className="font-medium text-purple-400 text-sm">
                            {selectedHunter.stats.fusion || selectedHunter.stats.lionsmaneResonance}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold mb-4 break-words">Unlock Requirements</h3>
                      {selectedHunter.unlocked ? (
                        <div className="text-green-400 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 flex-shrink-0" />
                          <span className="text-sm">Hunter Class Unlocked</span>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {selectedHunter.requirements ? (
                            <div className="text-sm text-muted-foreground space-y-2">
                              {selectedHunter.requirements.split(", ").map((req, index) => (
                                <div key={index} className="flex items-start gap-2">
                                  <Lock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                  <span className="break-words leading-relaxed">{req}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-muted-foreground text-sm">No special requirements</div>
                          )}
                          <div className="flex items-center gap-2 mt-4 flex-wrap">
                            <span className="text-sm">Upgrade Cost:</span>
                            <Badge className="bg-amber-600">
                              {selectedHunter.cost.toLocaleString()} {selectedHunter.level >= 100 ? "DIAMONDZ" : "G4C"}
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="stats" className="pt-4 sm:pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-4">
                      <h3 className="text-base sm:text-lg font-semibold mb-4 break-words">Combat Statistics</h3>
                      <StatBar
                        label="Health"
                        value={selectedHunter.stats.health}
                        max={750}
                        icon={<Heart className="w-4 h-4 text-red-400 flex-shrink-0" />}
                      />
                      <StatBar
                        label="Armor"
                        value={selectedHunter.stats.armor}
                        max={300}
                        icon={<Shield className="w-4 h-4 text-blue-400 flex-shrink-0" />}
                      />
                      <StatBar
                        label="Speed"
                        value={selectedHunter.stats.speed}
                        max={200}
                        icon={<Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />}
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-base sm:text-lg font-semibold mb-4 break-words">Advanced Capabilities</h3>
                      <StatBar
                        label="Stealth"
                        value={selectedHunter.stats.stealth}
                        max={180}
                        icon={<Eye className="w-4 h-4 text-purple-400 flex-shrink-0" />}
                      />
                      <StatBar
                        label="Accuracy"
                        value={selectedHunter.stats.accuracy}
                        max={150}
                        icon={<Target className="w-4 h-4 text-green-400 flex-shrink-0" />}
                      />
                      {selectedHunter.stats.power && (
                        <StatBar
                          label="Power %"
                          value={selectedHunter.stats.power}
                          max={100}
                          icon={<Cpu className="w-4 h-4 text-red-400 flex-shrink-0" />}
                        />
                      )}
                      <StatBar
                        label="Fusion Rate"
                        value={selectedHunter.stats.fusion || selectedHunter.stats.lionsmaneResonance}
                        max={100}
                        icon={<Brain className="w-4 h-4 text-pink-400 flex-shrink-0" />}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="abilities" className="pt-4 sm:pt-6">
                  <div className="space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold mb-4 break-words">Hunter Abilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedHunter.abilities.map((ability, index) => (
                        <Card
                          key={index}
                          className={`${ability.unlocked ? "border-green-500/50" : "border-gray-500/50"}`}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2 gap-2">
                              <h4 className="font-semibold text-sm break-words flex-1">{ability.name}</h4>
                              {ability.unlocked ? (
                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              ) : (
                                <Lock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{ability.description}</p>
                            <div className="flex justify-between text-xs gap-4">
                              <span>Energy: {ability.energyCost}</span>
                              <span>Cooldown: {ability.cooldown}s</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="progression" className="pt-4 sm:pt-6">
                  <div className="space-y-6">
                    <h3 className="text-base sm:text-lg font-semibold break-words">Hunter Evolution Path</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {hunterProgression.map((hunter) => (
                        <Card
                          key={hunter.level}
                          className={`${
                            hunter.level === selectedHunter.level
                              ? "border-blue-500 bg-blue-500/10"
                              : hunter.unlocked
                                ? "border-green-500/50"
                                : "border-gray-500/50"
                          }`}
                        >
                          <CardContent className="p-4">
                            <div className="aspect-square relative mb-3 rounded overflow-hidden">
                              <Image
                                src={hunter.image || "/placeholder.svg"}
                                alt={hunter.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                              />
                              {hunter.level >= 100 && (
                                <div className="absolute top-2 right-2">
                                  <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                                </div>
                              )}
                              {hunter.level >= 150 && (
                                <div className="absolute top-2 left-2">
                                  <Diamond className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                                </div>
                              )}
                            </div>

                            <div className="text-center">
                              <Badge className={`mb-2 ${getRarityColor(hunter.rarity)}`}>Level {hunter.level}</Badge>
                              <h4 className="font-semibold text-sm mb-1 break-words leading-tight">{hunter.name}</h4>
                              <p className="text-xs text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                                {hunter.description}
                              </p>

                              {hunter.level === selectedHunter.level ? (
                                <Badge className="bg-blue-600">Current</Badge>
                              ) : hunter.unlocked ? (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => setSelectedHunter(hunter)}
                                  className="text-xs"
                                >
                                  <User className="w-3 h-3 mr-1" />
                                  Select
                                </Button>
                              ) : (
                                <Button
                                  size="sm"
                                  onClick={() => upgradeHunter(hunter.level)}
                                  className={`text-xs ${hunter.level >= 100 ? "bg-purple-600 hover:bg-purple-700" : ""}`}
                                >
                                  <ArrowUp className="w-3 h-3 mr-1" />
                                  {hunter.level >= 150 ? "Transcend" : hunter.level >= 100 ? "Evolve" : "Upgrade"}
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
