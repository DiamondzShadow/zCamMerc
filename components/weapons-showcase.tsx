"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { Sword, Zap, Target, Shield, Code, Eye, Wifi, Bomb, Plus, MoveUpIcon as Upgrade, Star, Crown, Lock } from 'lucide-react'
import Image from "next/image"

interface Weapon {
  id: string
  name: string
  category: "Assault" | "Stealth" | "Support" | "Hacking"
  level: number
  rarity: "Common" | "Rare" | "Epic" | "Legendary" | "Sovereign"
  image: string
  damage: number
  accuracy: number
  range: number
  upgradeCost: number
  currency: "G4C" | "LIONSMANE"
  abilities: string[]
  description: string
  unlockRequirement?: string
}

const weaponsData: Weapon[] = [
  // Existing weapons
  {
    id: "protocol-rifle-lv1",
    name: "Protocol Rifle Level 1",
    category: "Assault",
    level: 1,
    rarity: "Common",
    image: "/weapons/protocol-rifle-lv1.jpg",
    damage: 75,
    accuracy: 80,
    range: 85,
    upgradeCost: 1000,
    currency: "G4C",
    abilities: ["Burst Fire", "Scope Enhancement"],
    description: "Standard issue assault rifle with reliable performance and moderate damage output."
  },
  {
    id: "protocol-rifle-lv2",
    name: "Protocol Rifle Level 2",
    category: "Assault",
    level: 2,
    rarity: "Rare",
    image: "/weapons/protocol-rifle-lv2.jpg",
    damage: 85,
    accuracy: 85,
    range: 90,
    upgradeCost: 2500,
    currency: "G4C",
    abilities: ["Enhanced Burst", "Smart Targeting", "Armor Piercing"],
    description: "Upgraded protocol rifle with improved targeting systems and enhanced damage capabilities."
  },
  {
    id: "pulse-dart-lv1",
    name: "Pulse Dart Level 1",
    category: "Stealth",
    level: 1,
    rarity: "Common",
    image: "/weapons/pulse-dart-lv1.jpg",
    damage: 60,
    accuracy: 95,
    range: 70,
    upgradeCost: 800,
    currency: "G4C",
    abilities: ["Silent Shot", "Paralysis"],
    description: "Precision stealth weapon designed for silent takedowns and crowd control."
  },
  {
    id: "pulse-dart-lv2",
    name: "Pulse Dart Level 2",
    category: "Stealth",
    level: 2,
    rarity: "Rare",
    image: "/weapons/pulse-dart-lv2.jpg",
    damage: 70,
    accuracy: 98,
    range: 80,
    upgradeCost: 2000,
    currency: "G4C",
    abilities: ["Silent Shot", "Neural Disruption", "Multi-Target"],
    description: "Advanced pulse dart with neural disruption capabilities and multi-target engagement."
  },
  {
    id: "shadow-call-lv1",
    name: "Shadow Call Level 1",
    category: "Support",
    level: 1,
    rarity: "Rare",
    image: "/weapons/shadow-call-lv1.jpg",
    damage: 50,
    accuracy: 75,
    range: 95,
    upgradeCost: 1500,
    currency: "G4C",
    abilities: ["Team Coordination", "Stealth Boost"],
    description: "Support weapon that enhances team coordination and provides tactical advantages."
  },
  {
    id: "shadow-call-lv5",
    name: "Shadow Call Level 5",
    category: "Support",
    level: 5,
    rarity: "Legendary",
    image: "/weapons/shadow-call-lv5.jpg",
    damage: 80,
    accuracy: 90,
    range: 100,
    upgradeCost: 5,
    currency: "LIONSMANE",
    abilities: ["Advanced Coordination", "Shadow Cloak", "Tactical Override", "Team Invisibility"],
    description: "Elite support weapon with advanced team coordination and battlefield control capabilities."
  },
  {
    id: "silent-protocol-lv1",
    name: "Silent Protocol Level 1",
    category: "Stealth",
    level: 1,
    rarity: "Common",
    image: "/weapons/silent-protocol-lv1.jpg",
    damage: 65,
    accuracy: 90,
    range: 75,
    upgradeCost: 1200,
    currency: "G4C",
    abilities: ["Silenced", "Stealth Mode"],
    description: "Covert operations weapon designed for silent infiltration and elimination."
  },
  {
    id: "silent-protocol-lv5",
    name: "Silent Protocol Level 5",
    category: "Stealth",
    level: 5,
    rarity: "Legendary",
    image: "/weapons/silent-protocol-lv5.jpg",
    damage: 95,
    accuracy: 98,
    range: 90,
    upgradeCost: 8,
    currency: "LIONSMANE",
    abilities: ["Perfect Silence", "Phase Cloak", "Reality Distortion", "Quantum Stealth"],
    description: "Master-tier stealth weapon with reality manipulation and quantum cloaking technology."
  },
  {
    id: "snare-launcher-lv1",
    name: "Snare Launcher Level 1",
    category: "Support",
    level: 1,
    rarity: "Common",
    image: "/weapons/snare-launcher-lv1.jpg",
    damage: 40,
    accuracy: 85,
    range: 80,
    upgradeCost: 900,
    currency: "G4C",
    abilities: ["Net Trap", "Slow Effect"],
    description: "Tactical support weapon for crowd control and area denial operations."
  },
  {
    id: "snare-launcher-lv2",
    name: "Snare Launcher Level 2",
    category: "Support",
    level: 2,
    rarity: "Rare",
    image: "/weapons/snare-launcher-lv2.jpg",
    damage: 55,
    accuracy: 88,
    range: 85,
    upgradeCost: 2200,
    currency: "G4C",
    abilities: ["Enhanced Net", "Stun Effect", "Area Denial"],
    description: "Improved snare launcher with enhanced trapping capabilities and area control."
  },
  {
    id: "nano-blade-lv1",
    name: "Nano Blade Level 1",
    category: "Assault",
    level: 1,
    rarity: "Rare",
    image: "/weapons/nano-blade-lv1.jpg",
    damage: 85,
    accuracy: 75,
    range: 60,
    upgradeCost: 1800,
    currency: "G4C",
    abilities: ["Molecular Cut", "Self-Repair"],
    description: "Advanced melee weapon with molecular-level cutting technology."
  },
  {
    id: "nano-blade-lv2",
    name: "Nano Blade Level 2",
    category: "Assault",
    level: 2,
    rarity: "Epic",
    image: "/weapons/nano-blade-lv2.jpg",
    damage: 95,
    accuracy: 80,
    range: 65,
    upgradeCost: 3500,
    currency: "G4C",
    abilities: ["Enhanced Cut", "Adaptive Edge", "Energy Discharge"],
    description: "Upgraded nano blade with adaptive technology and energy discharge capabilities."
  },
  {
    id: "nano-blade-lv5",
    name: "Nano Blade Level 5",
    category: "Assault",
    level: 5,
    rarity: "Legendary",
    image: "/weapons/nano-blade-lv5.jpg",
    damage: 120,
    accuracy: 90,
    range: 75,
    upgradeCost: 6,
    currency: "LIONSMANE",
    abilities: ["Reality Cut", "Quantum Edge", "Dimensional Slice", "Matter Disruption"],
    description: "Master-crafted nano blade capable of cutting through reality itself."
  },
  {
    id: "nano-blade-lv6",
    name: "Nano Blade Level 6",
    category: "Assault",
    level: 6,
    rarity: "Sovereign",
    image: "/weapons/nano-blade-lv6.jpg",
    damage: 135,
    accuracy: 95,
    range: 80,
    upgradeCost: 12,
    currency: "LIONSMANE",
    abilities: ["Sovereign Cut", "Reality Manipulation", "Time Slice", "Existence Erasure"],
    description: "Ultimate nano blade with sovereign-level reality manipulation capabilities."
  },
  {
    id: "packet-snare-lv1",
    name: "Packet Snare Level 1",
    category: "Hacking",
    level: 1,
    rarity: "Common",
    image: "/weapons/packet-snare-lv1.jpg",
    damage: 45,
    accuracy: 80,
    range: 90,
    upgradeCost: 1100,
    currency: "G4C",
    abilities: ["Data Intercept", "Network Trap"],
    description: "Digital warfare tool for intercepting and trapping network communications."
  },
  {
    id: "packet-snare-lv2",
    name: "Packet Snare Level 2",
    category: "Hacking",
    level: 2,
    rarity: "Rare",
    image: "/weapons/packet-snare-lv2.jpg",
    damage: 60,
    accuracy: 85,
    range: 95,
    upgradeCost: 2800,
    currency: "G4C",
    abilities: ["Advanced Intercept", "Data Corruption", "Network Hijack"],
    description: "Enhanced packet snare with data corruption and network hijacking capabilities."
  },
  {
    id: "phantom-pulse-lv1",
    name: "Phantom Pulse Level 1",
    category: "Stealth",
    level: 1,
    rarity: "Epic",
    image: "/weapons/phantom-pulse-lv1.jpg",
    damage: 70,
    accuracy: 88,
    range: 85,
    upgradeCost: 3000,
    currency: "G4C",
    abilities: ["Phase Shift", "Phantom Mode", "Spectral Damage"],
    description: "Experimental weapon that operates in the spectral realm for phantom attacks."
  },
  {
    id: "emp-carbine-base",
    name: "EMP Carbine Base",
    category: "Support",
    level: 1,
    rarity: "Common",
    image: "/weapons/emp-carbine-base.jpg",
    damage: 35,
    accuracy: 75,
    range: 80,
    upgradeCost: 800,
    currency: "G4C",
    abilities: ["EMP Burst", "Electronics Disable"],
    description: "Electromagnetic pulse weapon designed to disable electronic systems."
  },
  {
    id: "emp-carbine-lv2",
    name: "EMP Carbine Level 2",
    category: "Support",
    level: 2,
    rarity: "Rare",
    image: "/weapons/emp-carbine-lv2.jpg",
    damage: 50,
    accuracy: 80,
    range: 85,
    upgradeCost: 2100,
    currency: "G4C",
    abilities: ["Enhanced EMP", "System Overload", "Chain Disable"],
    description: "Improved EMP carbine with chain reaction capabilities and system overload."
  },
  {
    id: "emp-carbine-lv3",
    name: "EMP Carbine Level 3",
    category: "Support",
    level: 3,
    rarity: "Epic",
    image: "/weapons/emp-carbine-lv3.jpg",
    damage: 65,
    accuracy: 85,
    range: 90,
    upgradeCost: 4000,
    currency: "G4C",
    abilities: ["Quantum EMP", "Reality Disruption", "Temporal Disable", "Neural Shutdown"],
    description: "Advanced EMP carbine with quantum disruption and neural shutdown capabilities."
  },
  {
    id: "fork-chain-lv1",
    name: "Fork Chain Level 1",
    category: "Hacking",
    level: 1,
    rarity: "Rare",
    image: "/weapons/fork-chain-lv1.jpg",
    damage: 55,
    accuracy: 85,
    range: 88,
    upgradeCost: 1600,
    currency: "G4C",
    abilities: ["Chain Hack", "Process Fork"],
    description: "Advanced hacking tool that creates multiple attack vectors simultaneously."
  },
  {
    id: "fork-chain-lv7",
    name: "Fork Chain Level 7",
    category: "Hacking",
    level: 7,
    rarity: "Sovereign",
    image: "/weapons/fork-chain-lv7.jpg",
    damage: 110,
    accuracy: 95,
    range: 100,
    upgradeCost: 15,
    currency: "LIONSMANE",
    abilities: ["Reality Fork", "Quantum Chain", "Dimensional Hack", "Existence Split"],
    description: "Ultimate hacking weapon capable of forking reality and splitting existence."
  },
  {
    id: "ghost-ping-lv1",
    name: "Ghost Ping Level 1",
    category: "Hacking",
    level: 1,
    rarity: "Common",
    image: "/weapons/ghost-ping-lv1.jpg",
    damage: 40,
    accuracy: 90,
    range: 95,
    upgradeCost: 700,
    currency: "G4C",
    abilities: ["Stealth Ping", "Network Scan"],
    description: "Covert network reconnaissance tool for stealth information gathering."
  },
  {
    id: "hunter-fork-chain-lv100",
    name: "Hunter Fork Chain Level 100",
    category: "Hacking",
    level: 100,
    rarity: "Sovereign",
    image: "/weapons/hunter-fork-chain-lv100.jpg",
    damage: 200,
    accuracy: 100,
    range: 100,
    upgradeCost: 100,
    currency: "LIONSMANE",
    abilities: ["Hunter Protocol", "Reality Domination", "Existence Control", "Universal Hack"],
    description: "Legendary hunter weapon with universal hacking capabilities and reality domination.",
    unlockRequirement: "Complete Hunter Ascension Protocol"
  },
  // New hacking weapons from user images
  {
    id: "codejack-base",
    name: "Codejack",
    category: "Hacking",
    level: 1,
    rarity: "Common",
    image: "/weapons/codejack-base.jpg",
    damage: 50,
    accuracy: 85,
    range: 80,
    upgradeCost: 1000,
    currency: "G4C",
    abilities: ["Code Injection", "System Breach"],
    description: "Basic neural interface hacking tool for code injection and system infiltration."
  },
  {
    id: "codejack-lv2",
    name: "Codejack Level 2",
    category: "Hacking",
    level: 2,
    rarity: "Rare",
    image: "/weapons/codejack-lv2.jpg",
    damage: 65,
    accuracy: 88,
    range: 85,
    upgradeCost: 2500,
    currency: "G4C",
    abilities: ["Advanced Injection", "Memory Manipulation", "Neural Bridge"],
    description: "Enhanced codejack with memory manipulation and neural bridging capabilities."
  },
  {
    id: "codejack-lv9",
    name: "Codejack Level 9",
    category: "Hacking",
    level: 9,
    rarity: "Sovereign",
    image: "/weapons/codejack-lv9.jpg",
    damage: 150,
    accuracy: 98,
    range: 100,
    upgradeCost: 25,
    currency: "LIONSMANE",
    abilities: ["Reality Hacking", "Consciousness Override", "Digital Transcendence", "Code Godmode"],
    description: "Ultimate codejack capable of hacking reality itself and achieving digital transcendence."
  },
  {
    id: "decoy-mirage-lv1",
    name: "Decoy Mirage Level 1",
    category: "Hacking",
    level: 1,
    rarity: "Common",
    image: "/weapons/decoy-mirage-lv1.jpg",
    damage: 45,
    accuracy: 80,
    range: 75,
    upgradeCost: 900,
    currency: "G4C",
    abilities: ["Holographic Decoy", "Visual Distortion"],
    description: "Holographic deception system that creates false targets and visual distortions."
  },
  {
    id: "decoy-mirage-lv2",
    name: "Decoy Mirage Level 2",
    category: "Hacking",
    level: 2,
    rarity: "Rare",
    image: "/weapons/decoy-mirage-lv2.jpg",
    damage: 60,
    accuracy: 85,
    range: 80,
    upgradeCost: 2200,
    currency: "G4C",
    abilities: ["Multi-Decoy", "Sensory Confusion", "Phantom Presence"],
    description: "Advanced mirage system with multiple decoys and sensory manipulation capabilities."
  },
  {
    id: "decoy-mirage-lv3",
    name: "Decoy Mirage Level 3",
    category: "Hacking",
    level: 3,
    rarity: "Epic",
    image: "/weapons/decoy-mirage-lv3.jpg",
    damage: 75,
    accuracy: 90,
    range: 85,
    upgradeCost: 3800,
    currency: "G4C",
    abilities: ["Reality Mirage", "Perception Hack", "Mind Decoy", "Cognitive Disruption"],
    description: "Elite mirage system that manipulates perception and creates cognitive disruptions."
  },
  {
    id: "decoy-mirage-lv4",
    name: "Decoy Mirage Level 4",
    category: "Hacking",
    level: 4,
    rarity: "Legendary",
    image: "/weapons/decoy-mirage-lv4.jpg",
    damage: 90,
    accuracy: 95,
    range: 90,
    upgradeCost: 7,
    currency: "LIONSMANE",
    abilities: ["Reality Bending", "Existence Mirage", "Dimensional Decoy", "Truth Distortion"],
    description: "Master-tier mirage system capable of bending reality and distorting truth itself."
  },
  {
    id: "dns-cloak-lv1",
    name: "DNS Cloak Level 1",
    category: "Hacking",
    level: 1,
    rarity: "Common",
    image: "/weapons/dns-cloak-lv1.jpg",
    damage: 35,
    accuracy: 90,
    range: 95,
    upgradeCost: 800,
    currency: "G4C",
    abilities: ["Traffic Obfuscation", "DNS Spoofing"],
    description: "Network cloaking device that obfuscates traffic and spoofs DNS requests."
  },
  {
    id: "dns-cloak-lv2",
    name: "DNS Cloak Level 2",
    category: "Hacking",
    level: 2,
    rarity: "Rare",
    image: "/weapons/dns-cloak-lv2.jpg",
    damage: 50,
    accuracy: 93,
    range: 98,
    upgradeCost: 2000,
    currency: "G4C",
    abilities: ["Advanced Obfuscation", "Network Invisibility", "Protocol Masking"],
    description: "Enhanced DNS cloak with network invisibility and protocol masking capabilities."
  },
  {
    id: "echo-trap-lv1",
    name: "Echo Trap Level 1",
    category: "Hacking",
    level: 1,
    rarity: "Common",
    image: "/weapons/echo-trap-lv1.jpg",
    damage: 55,
    accuracy: 75,
    range: 85,
    upgradeCost: 1100,
    currency: "G4C",
    abilities: ["Sound Trap", "Acoustic Disruption"],
    description: "Acoustic warfare system that creates sound traps and disrupts enemy communications."
  },
  {
    id: "echo-trap-lv2",
    name: "Echo Trap Level 2",
    category: "Hacking",
    level: 2,
    rarity: "Rare",
    image: "/weapons/echo-trap-lv2.jpg",
    damage: 70,
    accuracy: 80,
    range: 88,
    upgradeCost: 2400,
    currency: "G4C",
    abilities: ["Sonic Boom", "Frequency Manipulation", "Echo Location"],
    description: "Advanced echo trap with sonic boom capabilities and frequency manipulation."
  },
  {
    id: "echo-trap-lv3",
    name: "Echo Trap Level 3",
    category: "Hacking",
    level: 3,
    rarity: "Epic",
    image: "/weapons/echo-trap-lv3.jpg",
    damage: 85,
    accuracy: 85,
    range: 90,
    upgradeCost: 4200,
    currency: "G4C",
    abilities: ["Harmonic Resonance", "Sound Weaponization", "Acoustic Control"],
    description: "Elite echo trap with harmonic resonance and weaponized sound capabilities."
  },
  {
    id: "echo-trap-lv6",
    name: "Echo Trap Level 6",
    category: "Hacking",
    level: 6,
    rarity: "Legendary",
    image: "/weapons/echo-trap-lv6.jpg",
    damage: 115,
    accuracy: 92,
    range: 95,
    upgradeCost: 10,
    currency: "LIONSMANE",
    abilities: ["Reality Echo", "Dimensional Sound", "Time Resonance", "Existence Vibration"],
    description: "Master-tier echo trap that manipulates reality through dimensional sound waves."
  },
  {
    id: "echo-trap-lv7",
    name: "Echo Trap Level 7",
    category: "Hacking",
    level: 7,
    rarity: "Sovereign",
    image: "/weapons/echo-trap-lv7.jpg",
    damage: 130,
    accuracy: 95,
    range: 98,
    upgradeCost: 18,
    currency: "LIONSMANE",
    abilities: ["Sovereign Echo", "Universal Resonance", "Spacetime Manipulation", "Cosmic Harmony"],
    description: "Ultimate echo trap with sovereign-level spacetime manipulation through cosmic harmony."
  }
]

export default function WeaponsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [selectedWeapon, setSelectedWeapon] = useState<string | null>(null)
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false)
  const [userWeapons, setUserWeapons] = useLocalStorage<string[]>("user-weapons", [
    "protocol-rifle-lv1", "pulse-dart-lv1", "codejack-base", "decoy-mirage-lv1", "dns-cloak-lv1", "echo-trap-lv1"
  ])

  const categories = ["All", "Assault", "Stealth", "Support", "Hacking"]
  
  const filteredWeapons = selectedCategory === "All" 
    ? weaponsData 
    : weaponsData.filter(weapon => weapon.category === selectedCategory)

  const weapon = selectedWeapon ? weaponsData.find(w => w.id === selectedWeapon) : null

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "bg-zinc-600"
      case "Rare": return "bg-blue-600"
      case "Epic": return "bg-purple-600"
      case "Legendary": return "bg-amber-600"
      case "Sovereign": return "bg-red-600"
      default: return "bg-zinc-600"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Assault": return Sword
      case "Stealth": return Eye
      case "Support": return Shield
      case "Hacking": return Code
      default: return Target
    }
  }

  const handleUpgradeWeapon = () => {
    setUpgradeModalOpen(false)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">LIONSMANE Arsenal</h1>
          <p className="text-zinc-400">Advanced weaponry for the digital resistance</p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-red-600 hover:bg-red-700">
            <Plus className="mr-2 h-4 w-4" /> Acquire Weapon
          </Button>
          <Button variant="outline">
            <Upgrade className="mr-2 h-4 w-4" /> Upgrade Lab
          </Button>
        </div>
      </div>

      <Tabs defaultValue="arsenal" className="w-full">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="arsenal" className="data-[state=active]:bg-red-600">
            <Target className="mr-2 h-4 w-4" /> Arsenal
          </TabsTrigger>
          <TabsTrigger value="categories" className="data-[state=active]:bg-red-600">
            <Zap className="mr-2 h-4 w-4" /> Categories
          </TabsTrigger>
        </TabsList>

        <TabsContent value="arsenal">
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((category) => {
              const Icon = category === "All" ? Target : getCategoryIcon(category)
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {category}
                </Button>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredWeapons.map((weapon) => {
              const CategoryIcon = getCategoryIcon(weapon.category)
              const isOwned = userWeapons.includes(weapon.id)
              
              return (
                <Card 
                  key={weapon.id} 
                  className={`bg-zinc-900 border-zinc-800 cursor-pointer transition-all hover:border-red-500 ${
                    selectedWeapon === weapon.id ? 'border-red-500' : ''
                  } ${!isOwned ? 'opacity-75' : ''}`}
                  onClick={() => setSelectedWeapon(weapon.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <CategoryIcon className="h-4 w-4 text-red-500" />
                        <Badge className={getRarityColor(weapon.rarity)}>
                          {weapon.rarity}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        {weapon.level >= 5 && <Crown className="h-4 w-4 text-amber-500" />}
                        {weapon.unlockRequirement && <Lock className="h-4 w-4 text-zinc-500" />}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{weapon.name}</CardTitle>
                    <p className="text-sm text-zinc-400">Level {weapon.level} • {weapon.category}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={weapon.image || "/placeholder.svg"}
                        alt={weapon.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      {!isOwned && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Lock className="h-8 w-8 text-zinc-400" />
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-zinc-400">Damage</span>
                        <div className="flex items-center gap-2">
                          <Progress value={weapon.damage} className="h-2 w-16" />
                          <span className="text-sm">{weapon.damage}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-zinc-400">Accuracy</span>
                        <div className="flex items-center gap-2">
                          <Progress value={weapon.accuracy} className="h-2 w-16" />
                          <span className="text-sm">{weapon.accuracy}%</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-zinc-400">Range</span>
                        <div className="flex items-center gap-2">
                          <Progress value={weapon.range} className="h-2 w-16" />
                          <span className="text-sm">{weapon.range}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {weapon.abilities.slice(0, 2).map((ability, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {ability}
                        </Badge>
                      ))}
                      {weapon.abilities.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{weapon.abilities.length - 2} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="text-zinc-400">Upgrade: </span>
                        <span className="font-medium">
                          {weapon.upgradeCost?.toLocaleString() || 'N/A'} {weapon.currency}
                        </span>
                      </div>
                      {isOwned ? (
                        <Badge className="bg-emerald-900">Owned</Badge>
                      ) : (
                        <Badge variant="outline">Locked</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {selectedWeapon && weapon && (
            <Card className="mt-8 bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-red-500" />
                  {weapon.name} - Detailed Analysis
                </CardTitle>
                <p className="text-zinc-400 mt-2">{weapon.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-purple-500" /> Abilities
                    </h3>
                    <div className="space-y-2">
                      {weapon.abilities.map((ability, index) => (
                        <div key={index} className="flex items-center gap-2 text-zinc-300">
                          <Star className="h-4 w-4 text-amber-500" />
                          {ability}
                        </div>
                      ))}
                    </div>

                    {weapon.unlockRequirement && (
                      <>
                        <h3 className="font-bold mb-3 mt-6 flex items-center gap-2">
                          <Lock className="h-4 w-4 text-red-500" /> Unlock Requirement
                        </h3>
                        <p className="text-zinc-300">{weapon.unlockRequirement}</p>
                      </>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <Target className="h-4 w-4 text-blue-500" /> Combat Stats
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-zinc-400">Damage Output</span>
                          <span className="text-sm font-medium">{weapon.damage}/100</span>
                        </div>
                        <Progress value={weapon.damage} className="h-2" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-zinc-400">Accuracy Rating</span>
                          <span className="text-sm font-medium">{weapon.accuracy}%</span>
                        </div>
                        <Progress value={weapon.accuracy} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-zinc-400">Effective Range</span>
                          <span className="text-sm font-medium">{weapon.range}/100</span>
                        </div>
                        <Progress value={weapon.range} className="h-2" />
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-zinc-800 rounded-lg">
                      <h4 className="font-medium mb-2">Upgrade Cost</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">
                          {weapon.upgradeCost?.toLocaleString() || 'N/A'}
                        </span>
                        <Badge className={weapon.currency === "LIONSMANE" ? "bg-amber-900" : "bg-blue-900"}>
                          {weapon.currency}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <Button 
                        onClick={() => setUpgradeModalOpen(true)}
                        className="bg-red-600 hover:bg-red-700"
                        disabled={!userWeapons.includes(weapon.id)}
                      >
                        <Upgrade className="mr-2 h-4 w-4" /> 
                        Upgrade Weapon
                      </Button>
                      <Button variant="outline">
                        <Target className="mr-2 h-4 w-4" /> 
                        Test Fire
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="categories">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category) => {
              const Icon = getCategoryIcon(category)
              const categoryWeapons = weaponsData.filter(w => w.category === category)
              const ownedCount = categoryWeapons.filter(w => userWeapons.includes(w.id)).length
              
              return (
                <Card key={category} className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="h-8 w-8 text-red-500" />
                      <div>
                        <h3 className="font-bold text-lg">{category}</h3>
                        <p className="text-sm text-zinc-400">
                          {ownedCount}/{categoryWeapons.length} owned
                        </p>
                      </div>
                    </div>
                    
                    <Progress 
                      value={(ownedCount / categoryWeapons.length) * 100} 
                      className="h-2 mb-4" 
                    />

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-400">Total Weapons</span>
                        <span>{categoryWeapons.length}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-400">Highest Level</span>
                        <span>{Math.max(...categoryWeapons.map(w => w.level))}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-400">Legendary+</span>
                        <span>{categoryWeapons.filter(w => w.rarity === "Legendary" || w.rarity === "Sovereign").length}</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700"
                      onClick={() => setSelectedCategory(category)}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      View {category}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>

      {/* Upgrade Modal */}
      <Dialog open={upgradeModalOpen} onOpenChange={setUpgradeModalOpen}>
        <DialogContent className="bg-zinc-900 border-zinc-800">
          <DialogHeader>
            <DialogTitle>Upgrade Weapon</DialogTitle>
            <DialogDescription>
              Enhance your weapon's capabilities with advanced modifications.
            </DialogDescription>
          </DialogHeader>

          {weapon && (
            <div className="space-y-4 py-4">
              <div className="flex justify-between items-center">
                <div className="font-medium">Current Level</div>
                <div>{weapon.level}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-medium">Next Level</div>
                <div>{weapon.level + 1}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-medium">Upgrade Cost</div>
                <div>{weapon.upgradeCost?.toLocaleString() || 'N/A'} {weapon.currency}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-medium">New Abilities</div>
                <div className="text-sm text-zinc-400">+2 Enhanced Abilities</div>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setUpgradeModalOpen(false)}>
              Cancel
            </Button>
            <Button 
              className="bg-red-600 hover:bg-red-700"
              onClick={handleUpgradeWeapon}
            >
              Confirm Upgrade
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
