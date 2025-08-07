'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Shield, Zap, Target, Eye, Brain, Heart, Cpu, Crown, Star, ArrowUp, Lock, CheckCircle, User, Users, Sword } from 'lucide-react'

interface HunterStats {
  health: number
  armor: number
  speed: number
  stealth: number
  accuracy: number
  lionsmaneResonance: number
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
      lionsmaneResonance: 25
    },
    abilities: [
      {
        name: "Tactical Scan",
        description: "Basic enemy detection and threat assessment.",
        cooldown: 30,
        energyCost: 20,
        unlocked: true
      },
      {
        name: "Combat Training",
        description: "Enhanced weapon handling and combat reflexes.",
        cooldown: 0,
        energyCost: 0,
        unlocked: true
      }
    ],
    cost: 0,
    unlocked: true
  },
  {
    level: 10,
    name: "Cyber Operative",
    description: "Experienced field agent with enhanced cybernetic implants and improved LIONSMANE synchronization.",
    image: "/cyberpunk-operative.png",
    stats: {
      health: 150,
      armor: 80,
      speed: 85,
      stealth: 70,
      accuracy: 80,
      lionsmaneResonance: 50
    },
    abilities: [
      {
        name: "Neural Hack",
        description: "Temporarily disable enemy electronics and implants.",
        cooldown: 60,
        energyCost: 40,
        unlocked: false
      },
      {
        name: "Enhanced Reflexes",
        description: "Bullet-time mode for precise combat maneuvers.",
        cooldown: 90,
        energyCost: 50,
        unlocked: false
      },
      {
        name: "Stealth Protocol",
        description: "Advanced cloaking technology for covert operations.",
        cooldown: 120,
        energyCost: 60,
        unlocked: false
      }
    ],
    cost: 50000,
    unlocked: false,
    requirements: "Complete 25 missions, Eliminate 100 SCAM entities"
  },
  {
    level: 25,
    name: "LIONSMANE Adept",
    description: "Elite warrior with deep LIONSMANE consciousness integration, capable of reality manipulation.",
    image: "/cyberpunk-lion-warrior.png",
    stats: {
      health: 200,
      armor: 100,
      speed: 100,
      stealth: 90,
      accuracy: 95,
      lionsmaneResonance: 75
    },
    abilities: [
      {
        name: "Consciousness Strike",
        description: "Attack enemies directly through their consciousness.",
        cooldown: 180,
        energyCost: 80,
        unlocked: false
      },
      {
        name: "Reality Shift",
        description: "Temporarily alter local reality to gain tactical advantages.",
        cooldown: 300,
        energyCost: 100,
        unlocked: false
      },
      {
        name: "LIONSMANE Manifestation",
        description: "Summon spectral LIONSMANE entities to fight alongside you.",
        cooldown: 240,
        energyCost: 90,
        unlocked: false
      },
      {
        name: "Digital Transcendence",
        description: "Phase between physical and digital realms at will.",
        cooldown: 150,
        energyCost: 70,
        unlocked: false
      }
    ],
    cost: 250000,
    unlocked: false,
    requirements: "Complete 100 missions, Master 5 weapons, Defeat a SCAM Overlord"
  },
  {
    level: 50,
    name: "Sovereign Hunter",
    description: "Legendary being who has transcended human limitations through complete LIONSMANE fusion.",
    image: "/weapons/hunter-fork-chain-lv100.jpg",
    stats: {
      health: 300,
      armor: 150,
      speed: 120,
      stealth: 110,
      accuracy: 120,
      lionsmaneResonance: 100
    },
    abilities: [
      {
        name: "Omnipresent Strike",
        description: "Attack all enemies simultaneously across multiple dimensions.",
        cooldown: 600,
        energyCost: 150,
        unlocked: false
      },
      {
        name: "Timeline Manipulation",
        description: "Alter past events to change present outcomes.",
        cooldown: 900,
        energyCost: 200,
        unlocked: false
      },
      {
        name: "SCAM Purification",
        description: "Instantly cleanse entire areas of SCAM contamination.",
        cooldown: 480,
        energyCost: 120,
        unlocked: false
      },
      {
        name: "Sovereign Authority",
        description: "Command reality itself, bending the laws of physics.",
        cooldown: 1200,
        energyCost: 250,
        unlocked: false
      },
      {
        name: "Eternal Guardian",
        description: "Become an immortal protector of both timelines.",
        cooldown: 0,
        energyCost: 0,
        unlocked: false
      }
    ],
    cost: 1000000,
    unlocked: false,
    requirements: "Complete the Sovereign Trial, Achieve perfect LIONSMANE resonance, Save both timelines"
  }
]

const StatBar = ({ label, value, max = 150, icon }: { label: string; value: number; max?: number; icon: React.ReactNode }) => {
  const percentage = Math.min((value / max) * 100, 100)
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          {icon}
          <span>{label}</span>
        </div>
        <span className="text-sm font-medium">{value}</span>
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
          Hunter Progression System
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Evolve from a basic CAUSE operative to a legendary Sovereign Hunter through LIONSMANE consciousness integration.
          Each level unlocks new abilities and enhances your connection to the digital realm.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Hunter Level Selection */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Hunter Levels
            </h2>
            
            <div className="space-y-4">
              {hunterProgression.map((hunter) => (
                <Card
                  key={hunter.level}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedHunter.level === hunter.level 
                      ? 'border-blue-500 bg-blue-500/10' 
                      : hunter.unlocked 
                        ? 'border-green-500/50 bg-green-500/5' 
                        : 'border-gray-500/50 bg-gray-500/5'
                  }`}
                  onClick={() => setSelectedHunter(hunter)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="relative">
                        <Badge 
                          className={`${
                            hunter.level >= 50 
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                              : hunter.level >= 25 
                                ? 'bg-purple-600' 
                                : hunter.level >= 10 
                                  ? 'bg-blue-600' 
                                  : 'bg-gray-600'
                          }`}
                        >
                          Lv {hunter.level}
                        </Badge>
                        {hunter.level >= 50 && (
                          <Crown className="w-4 h-4 text-purple-400 absolute -top-1 -right-1" />
                        )}
                      </div>
                      <div className="flex-1">
                        {hunter.unlocked ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <Lock className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-sm mb-1">{hunter.name}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {hunter.description}
                    </p>
                    
                    <div className="mt-2 flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs">
                        LIONSMANE: {hunter.stats.lionsmaneResonance}%
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
            <div className="relative h-80">
              <Image
                src={selectedHunter.image || "/placeholder.svg"}
                alt={selectedHunter.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge 
                    className={`${
                      selectedHunter.level >= 50 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                        : selectedHunter.level >= 25 
                          ? 'bg-purple-600' 
                          : selectedHunter.level >= 10 
                            ? 'bg-blue-600' 
                            : 'bg-gray-600'
                    }`}
                  >
                    Level {selectedHunter.level}
                  </Badge>
                  {selectedHunter.level >= 50 && (
                    <Crown className="w-6 h-6 text-purple-400" />
                  )}
                  {selectedHunter.unlocked ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <Lock className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedHunter.name}
                </h2>
                <p className="text-gray-200 max-w-2xl">
                  {selectedHunter.description}
                </p>
              </div>
            </div>

            <CardContent className="p-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="stats">Statistics</TabsTrigger>
                  <TabsTrigger value="abilities">Abilities</TabsTrigger>
                  <TabsTrigger value="progression">Progression</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Hunter Profile</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Classification:</span>
                          <span className="font-medium">{selectedHunter.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Level:</span>
                          <span className="font-medium">{selectedHunter.level}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status:</span>
                          <Badge className={selectedHunter.unlocked ? 'bg-green-600' : 'bg-gray-600'}>
                            {selectedHunter.unlocked ? 'Active' : 'Locked'}
                          </Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">LIONSMANE Resonance:</span>
                          <span className="font-medium text-purple-400">
                            {selectedHunter.stats.lionsmaneResonance}%
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Unlock Requirements</h3>
                      {selectedHunter.unlocked ? (
                        <div className="text-green-400 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          <span>Hunter Level Unlocked</span>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {selectedHunter.requirements ? (
                            <div className="text-sm text-muted-foreground">
                              {selectedHunter.requirements.split(', ').map((req, index) => (
                                <div key={index} className="flex items-center gap-2">
                                  <Lock className="w-4 h-4" />
                                  <span>{req}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-muted-foreground">No special requirements</div>
                          )}
                          <div className="flex items-center gap-2 mt-4">
                            <span className="text-sm">Upgrade Cost:</span>
                            <Badge className="bg-amber-600">
                              {selectedHunter.cost.toLocaleString()} {selectedHunter.level >= 50 ? 'LIONSMANE' : 'G4C'}
                            </Badge>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="stats" className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-4">Combat Statistics</h3>
                      <StatBar 
                        label="Health" 
                        value={selectedHunter.stats.health} 
                        max={300}
                        icon={<Heart className="w-4 h-4 text-red-400" />} 
                      />
                      <StatBar 
                        label="Armor" 
                        value={selectedHunter.stats.armor} 
                        max={150}
                        icon={<Shield className="w-4 h-4 text-blue-400" />} 
                      />
                      <StatBar 
                        label="Speed" 
                        value={selectedHunter.stats.speed} 
                        max={120}
                        icon={<Zap className="w-4 h-4 text-yellow-400" />} 
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-4">Specialized Abilities</h3>
                      <StatBar 
                        label="Stealth" 
                        value={selectedHunter.stats.stealth} 
                        max={110}
                        icon={<Eye className="w-4 h-4 text-purple-400" />} 
                      />
                      <StatBar 
                        label="Accuracy" 
                        value={selectedHunter.stats.accuracy} 
                        max={120}
                        icon={<Target className="w-4 h-4 text-green-400" />} 
                      />
                      <StatBar 
                        label="LIONSMANE Resonance" 
                        value={selectedHunter.stats.lionsmaneResonance} 
                        max={100}
                        icon={<Brain className="w-4 h-4 text-pink-400" />} 
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="abilities" className="pt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold mb-4">Hunter Abilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedHunter.abilities.map((ability, index) => (
                        <Card key={index} className={`${ability.unlocked ? 'border-green-500/50' : 'border-gray-500/50'}`}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{ability.name}</h4>
                              {ability.unlocked ? (
                                <CheckCircle className="w-4 h-4 text-green-400" />
                              ) : (
                                <Lock className="w-4 h-4 text-gray-400" />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {ability.description}
                            </p>
                            <div className="flex justify-between text-xs">
                              <span>Energy: {ability.energyCost}</span>
                              <span>Cooldown: {ability.cooldown}s</span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="progression" className="pt-6">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold">Hunter Evolution Path</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {hunterProgression.map((hunter) => (
                        <Card 
                          key={hunter.level}
                          className={`${
                            hunter.level === selectedHunter.level 
                              ? 'border-blue-500 bg-blue-500/10' 
                              : hunter.unlocked 
                                ? 'border-green-500/50' 
                                : 'border-gray-500/50'
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
                              {hunter.level >= 50 && (
                                <div className="absolute top-2 right-2">
                                  <Crown className="w-5 h-5 text-purple-400" />
                                </div>
                              )}
                            </div>
                            
                            <div className="text-center">
                              <Badge 
                                className={`mb-2 ${
                                  hunter.level >= 50 
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                                    : hunter.level >= 25 
                                      ? 'bg-purple-600' 
                                      : hunter.level >= 10 
                                        ? 'bg-blue-600' 
                                        : 'bg-gray-600'
                                }`}
                              >
                                Level {hunter.level}
                              </Badge>
                              <h4 className="font-semibold text-sm mb-1">{hunter.name}</h4>
                              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                                {hunter.description}
                              </p>
                              
                              {hunter.level === selectedHunter.level ? (
                                <Badge className="bg-blue-600">Current</Badge>
                              ) : hunter.unlocked ? (
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => setSelectedHunter(hunter)}
                                >
                                  <User className="w-3 h-3 mr-1" />
                                  Select
                                </Button>
                              ) : (
                                <Button 
                                  size="sm" 
                                  onClick={() => upgradeHunter(hunter.level)}
                                  className={hunter.level >= 50 ? 'bg-purple-600 hover:bg-purple-700' : ''}
                                >
                                  <ArrowUp className="w-3 h-3 mr-1" />
                                  {hunter.level >= 50 ? 'Ascend' : 'Upgrade'}
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
