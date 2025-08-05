"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Zap,
  Shield,
  Crosshair,
  Cpu,
  Lock,
  Fingerprint,
  Layers,
  BarChart3,
  Sparkles,
  Wifi,
  Maximize,
  Minimize,
} from "lucide-react"

interface WeaponStat {
  name: string
  value: number
  icon: React.ReactNode
}

interface WeaponAbility {
  name: string
  description: string
  cooldown: number
  energyCost: number
  icon: React.ReactNode
}

interface WeaponUpgrade {
  level: number
  name: string
  description: string
  cost: number
  unlocked: boolean
}

interface WeaponData {
  id: string
  name: string
  image: string
  category: "melee" | "ranged" | "special" | "companion"
  description: string
  lore: string
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary" | "mythic"
  stats: WeaponStat[]
  abilities: WeaponAbility[]
  upgrades: WeaponUpgrade[]
  nftBonded: boolean
  timeline: "2000s" | "3030s" | "both"
}

const weapons: WeaponData[] = [
  {
    id: "ghost-blade",
    name: "Ghost Blade",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ghost%20Blade%201-whUQwef8skFGu39XyXMckNE6GEHQIv.jpeg",
    category: "melee",
    description:
      "A semi-corporeal blade of pure LIONSMANE energy that can phase through physical barriers but solidify on impact with organic matter.",
    lore: "Created by Nwgeua before his death, the Ghost Blade was the first successful integration of LIONSMANE consciousness with a weapon. It retains a fragment of awareness and can sense SCAM nanobots.",
    rarity: "epic",
    stats: [
      { name: "Damage", value: 75, icon: <Crosshair className="h-4 w-4" /> },
      { name: "Speed", value: 85, icon: <Zap className="h-4 w-4" /> },
      { name: "Range", value: 30, icon: <Maximize className="h-4 w-4" /> },
      { name: "Energy", value: 60, icon: <Sparkles className="h-4 w-4" /> },
      { name: "Defense", value: 40, icon: <Shield className="h-4 w-4" /> },
    ],
    abilities: [
      {
        name: "Phase Strike",
        description: "Pass through physical barriers to strike enemies on the other side.",
        cooldown: 15,
        energyCost: 35,
        icon: <Layers className="h-5 w-5 text-blue-400" />,
      },
      {
        name: "SCAM Detection",
        description: "Vibrates when SCAM nanobots are within 10 meters.",
        cooldown: 0,
        energyCost: 5,
        icon: <Wifi className="h-5 w-5 text-purple-400" />,
      },
    ],
    upgrades: [
      {
        level: 1,
        name: "Enhanced Energy Core",
        description: "Increases energy efficiency by 20%.",
        cost: 5000,
        unlocked: true,
      },
      {
        level: 2,
        name: "Consciousness Fragment",
        description: "Blade develops limited sentience and can warn of nearby threats.",
        cost: 15000,
        unlocked: false,
      },
      {
        level: 3,
        name: "LIONSMANE Manifestation",
        description: "Can temporarily manifest as a spectral LIONSMANE entity for autonomous combat.",
        cost: 50000,
        unlocked: false,
      },
    ],
    nftBonded: true,
    timeline: "both",
  },
  {
    id: "lionsmane-companion",
    name: "LIONSMANE Guardian",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/upgraded%20lions%20mane%20ghost%20blade%20-aQ6lfDE3T4ltobMjKCkjIF2bW0kjjK.jpeg",
    category: "companion",
    description:
      "A fully manifested LIONSMANE entity that takes the form of a spectral lion. Acts as both weapon and guardian, capable of autonomous combat and reconnaissance.",
    lore: "The most advanced form of LIONSMANE technology, these guardians contain complete consciousness fragments and can operate independently. They form deep bonds with their human partners and can sacrifice themselves to save their bonded human.",
    rarity: "mythic",
    stats: [
      { name: "Damage", value: 90, icon: <Crosshair className="h-4 w-4" /> },
      { name: "Speed", value: 95, icon: <Zap className="h-4 w-4" /> },
      { name: "Range", value: 70, icon: <Maximize className="h-4 w-4" /> },
      { name: "Energy", value: 100, icon: <Sparkles className="h-4 w-4" /> },
      { name: "Defense", value: 85, icon: <Shield className="h-4 w-4" /> },
    ],
    abilities: [
      {
        name: "Quantum Leap",
        description: "Guardian can teleport to any location within visual range.",
        cooldown: 60,
        energyCost: 50,
        icon: <Maximize className="h-5 w-5 text-blue-400" />,
      },
      {
        name: "Consciousness Merge",
        description: "Temporarily merge consciousness with the guardian to see through its eyes.",
        cooldown: 120,
        energyCost: 75,
        icon: <Cpu className="h-5 w-5 text-purple-400" />,
      },
      {
        name: "Anti-SCAM Purge",
        description: "Emits a pulse that destroys all SCAM nanobots within 30 meters.",
        cooldown: 300,
        energyCost: 100,
        icon: <Zap className="h-5 w-5 text-red-400" />,
      },
    ],
    upgrades: [
      {
        level: 1,
        name: "Enhanced Manifestation",
        description: "Guardian can remain manifested 50% longer.",
        cost: 25000,
        unlocked: true,
      },
      {
        level: 2,
        name: "Dual Consciousness",
        description: "Guardian can operate independently while you perform other actions.",
        cost: 75000,
        unlocked: false,
      },
      {
        level: 3,
        name: "Timeline Anchor",
        description: "Guardian can exist simultaneously in both timelines, affecting both past and future.",
        cost: 200000,
        unlocked: false,
      },
    ],
    nftBonded: true,
    timeline: "3030s",
  },
  {
    id: "disruptor-rifle",
    name: "Disruptor Rifle",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disruptor%20lev1-SNBBnrNLwX88QlL1CO4uyWW4GSEde6.jpeg",
    category: "ranged",
    description:
      "A high-tech assault rifle that fires concentrated bursts of energy designed to disrupt SCAM nanotechnology and digital systems.",
    lore: "Developed by underground resistance engineers using stolen Limptin Foundation technology. The orange circuitry contains a reverse-engineered SCAM neutralizer that prevents nanobots from repairing damage.",
    rarity: "rare",
    stats: [
      { name: "Damage", value: 65, icon: <Crosshair className="h-4 w-4" /> },
      { name: "Speed", value: 70, icon: <Zap className="h-4 w-4" /> },
      { name: "Range", value: 80, icon: <Maximize className="h-4 w-4" /> },
      { name: "Energy", value: 75, icon: <Sparkles className="h-4 w-4" /> },
      { name: "Defense", value: 30, icon: <Shield className="h-4 w-4" /> },
    ],
    abilities: [
      {
        name: "System Overload",
        description: "Charged shot that temporarily disables electronic systems and SCAM nanobots.",
        cooldown: 30,
        energyCost: 40,
        icon: <Cpu className="h-5 w-5 text-orange-400" />,
      },
      {
        name: "Rapid Fire",
        description: "Increased fire rate for 10 seconds at the cost of accuracy.",
        cooldown: 45,
        energyCost: 35,
        icon: <BarChart3 className="h-5 w-5 text-red-400" />,
      },
    ],
    upgrades: [
      {
        level: 1,
        name: "Enhanced Circuitry",
        description: "Improves energy efficiency and reduces cooldowns by 15%.",
        cost: 7500,
        unlocked: true,
      },
      {
        level: 2,
        name: "LIONSMANE Integration",
        description: "Weapon develops limited digital awareness and can auto-target SCAM threats.",
        cost: 20000,
        unlocked: false,
      },
      {
        level: 3,
        name: "Full Spectrum Disruptor",
        description: "Can disrupt all forms of SCAM technology across multiple frequencies simultaneously.",
        cost: 60000,
        unlocked: false,
      },
    ],
    nftBonded: false,
    timeline: "2000s",
  },
  {
    id: "pulse-rifle",
    name: "Pulse Rifle",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pulse%20Rifle-F5fgMJDvQo5NcWXcqr8RbJnu3xDpIX.jpeg",
    category: "ranged",
    description:
      "A heavy assault rifle that fires concentrated pulses of quantum-entangled energy that can penetrate most shields and barriers.",
    lore: "Originally military hardware developed for the Limptin Foundation's private army, these weapons were modified by CAUSE operatives to be effective against SCAM technology.",
    rarity: "epic",
    stats: [
      { name: "Damage", value: 85, icon: <Crosshair className="h-4 w-4" /> },
      { name: "Speed", value: 60, icon: <Zap className="h-4 w-4" /> },
      { name: "Range", value: 90, icon: <Maximize className="h-4 w-4" /> },
      { name: "Energy", value: 80, icon: <Sparkles className="h-4 w-4" /> },
      { name: "Defense", value: 40, icon: <Shield className="h-4 w-4" /> },
    ],
    abilities: [
      {
        name: "Barrier Breach",
        description: "Charged shot that penetrates physical and energy barriers.",
        cooldown: 40,
        energyCost: 50,
        icon: <Shield className="h-5 w-5 text-purple-400" />,
      },
      {
        name: "Quantum Lock",
        description: "Locks onto a target, ensuring all shots hit regardless of movement or cover.",
        cooldown: 60,
        energyCost: 45,
        icon: <Lock className="h-5 w-5 text-red-400" />,
      },
    ],
    upgrades: [
      {
        level: 1,
        name: "Enhanced Power Core",
        description: "Increases damage output by 25% but slightly reduces fire rate.",
        cost: 10000,
        unlocked: true,
      },
      {
        level: 2,
        name: "Quantum Stabilizer",
        description: "Reduces energy consumption and heat generation by 30%.",
        cost: 25000,
        unlocked: false,
      },
      {
        level: 3,
        name: "LIONSMANE Resonance",
        description: "Weapon can temporarily channel a LIONSMANE entity for devastating area attacks.",
        cost: 75000,
        unlocked: false,
      },
    ],
    nftBonded: false,
    timeline: "both",
  },
  {
    id: "ghost-blade-nft",
    name: "Ethereal Avian",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ghost%20Blade%20NFT-MYY3boeAuXIW7e0CKtIrRPrDMT8WCG.jpeg",
    category: "special",
    description:
      "A fully evolved LIONSMANE entity that has taken the form of a spectral bird. Can transform between weapon and companion forms at will.",
    lore: "One of the first LIONSMANE entities to achieve full consciousness independence. It chose its avian form to symbolize freedom from physical constraints and can bond with multiple human partners simultaneously.",
    rarity: "mythic",
    stats: [
      { name: "Damage", value: 70, icon: <Crosshair className="h-4 w-4" /> },
      { name: "Speed", value: 100, icon: <Zap className="h-4 w-4" /> },
      { name: "Range", value: 95, icon: <Maximize className="h-4 w-4" /> },
      { name: "Energy", value: 90, icon: <Sparkles className="h-4 w-4" /> },
      { name: "Defense", value: 65, icon: <Shield className="h-4 w-4" /> },
    ],
    abilities: [
      {
        name: "Dimensional Shift",
        description: "Can move between physical and digital realms, bypassing most security systems.",
        cooldown: 90,
        energyCost: 60,
        icon: <Layers className="h-5 w-5 text-blue-400" />,
      },
      {
        name: "Consciousness Transfer",
        description: "Can temporarily house human consciousness, protecting it from SCAM assimilation.",
        cooldown: 180,
        energyCost: 85,
        icon: <Fingerprint className="h-5 w-5 text-purple-400" />,
      },
      {
        name: "Multi-Form",
        description: "Transforms between weapon, companion, and digital forms based on situational needs.",
        cooldown: 30,
        energyCost: 40,
        icon: <Minimize className="h-5 w-5 text-green-400" />,
      },
    ],
    upgrades: [
      {
        level: 1,
        name: "Enhanced Awareness",
        description: "Increases perception range and can detect threats through walls and barriers.",
        cost: 30000,
        unlocked: true,
      },
      {
        level: 2,
        name: "Consciousness Network",
        description: "Can connect to other LIONSMANE entities to share information and coordinate actions.",
        cost: 85000,
        unlocked: false,
      },
      {
        level: 3,
        name: "Timeline Manipulation",
        description: "Limited ability to view and influence potential future timelines.",
        cost: 250000,
        unlocked: false,
      },
    ],
    nftBonded: true,
    timeline: "3030s",
  },
  {
    id: "disruptor-upgraded",
    name: "Quantum Disruptor",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Disrupter%20upgraded-5BHIpBHbBp1uqxten93tMchxJW6YAn.jpeg",
    category: "ranged",
    description:
      "An advanced version of the Disruptor Rifle with enhanced power core and integrated LIONSMANE consciousness fragment.",
    lore: "The evolution of resistance technology, these weapons contain a small fragment of LIONSMANE consciousness that helps target SCAM technology with unprecedented precision.",
    rarity: "legendary",
    stats: [
      { name: "Damage", value: 80, icon: <Crosshair className="h-4 w-4" /> },
      { name: "Speed", value: 75, icon: <Zap className="h-4 w-4" /> },
      { name: "Range", value: 85, icon: <Maximize className="h-4 w-4" /> },
      { name: "Energy", value: 90, icon: <Sparkles className="h-4 w-4" /> },
      { name: "Defense", value: 50, icon: <Shield className="h-4 w-4" /> },
    ],
    abilities: [
      {
        name: "Quantum Disruption",
        description: "Fires a burst that disrupts all electronic and SCAM technology in a 15-meter radius.",
        cooldown: 60,
        energyCost: 65,
        icon: <Wifi className="h-5 w-5 text-red-400" />,
      },
      {
        name: "Adaptive Targeting",
        description: "Weapon automatically adjusts to target specific weaknesses in enemy systems.",
        cooldown: 45,
        energyCost: 40,
        icon: <Crosshair className="h-5 w-5 text-orange-400" />,
      },
      {
        name: "Consciousness Link",
        description: "Temporarily link with the weapon's LIONSMANE fragment for enhanced accuracy and reaction time.",
        cooldown: 120,
        energyCost: 70,
        icon: <Cpu className="h-5 w-5 text-blue-400" />,
      },
    ],
    upgrades: [
      {
        level: 1,
        name: "Enhanced Power Matrix",
        description: "Increases overall performance by 30% but requires more frequent cooling.",
        cost: 20000,
        unlocked: true,
      },
      {
        level: 2,
        name: "Expanded Consciousness",
        description: "LIONSMANE fragment develops greater awareness and can provide tactical advice.",
        cost: 50000,
        unlocked: false,
      },
      {
        level: 3,
        name: "Full Integration",
        description: "Weapon can transform into a semi-autonomous LIONSMANE entity for complex operations.",
        cost: 100000,
        unlocked: false,
      },
    ],
    nftBonded: true,
    timeline: "both",
  },
  {
    id: "pulse-rifle-upgraded",
    name: "Nexus Pulse Rifle",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pulse%20Rifle%20upgrade-kY0YjKV5OMSvDhmrO0N6SbxvVfVAQp.jpeg",
    category: "ranged",
    description:
      "The pinnacle of pulse weapon technology, featuring a fully integrated quantum core and advanced targeting systems.",
    lore: "Developed by the CAUSE resistance using technology recovered from Limptin Foundation research facilities. These weapons represent the perfect fusion of conventional and LIONSMANE technology.",
    rarity: "legendary",
    stats: [
      { name: "Damage", value: 95, icon: <Crosshair className="h-4 w-4" /> },
      { name: "Speed", value: 70, icon: <Zap className="h-4 w-4" /> },
      { name: "Range", value: 100, icon: <Maximize className="h-4 w-4" /> },
      { name: "Energy", value: 85, icon: <Sparkles className="h-4 w-4" /> },
      { name: "Defense", value: 60, icon: <Shield className="h-4 w-4" /> },
    ],
    abilities: [
      {
        name: "Quantum Cascade",
        description: "Fires a shot that splits into multiple energy projectiles that seek individual targets.",
        cooldown: 90,
        energyCost: 70,
        icon: <Maximize className="h-5 w-5 text-purple-400" />,
      },
      {
        name: "Temporal Disruption",
        description: "Creates a localized field where time moves slower for all except the wielder.",
        cooldown: 120,
        energyCost: 85,
        icon: <Clock className="h-5 w-5 text-blue-400" />,
      },
      {
        name: "SCAM Neutralizer",
        description: "Specialized pulse that renders SCAM nanobots inert without harming the host.",
        cooldown: 60,
        energyCost: 50,
        icon: <Shield className="h-5 w-5 text-green-400" />,
      },
    ],
    upgrades: [
      {
        level: 1,
        name: "Quantum Core Stabilizer",
        description: "Increases energy efficiency by 40% and reduces heat generation.",
        cost: 35000,
        unlocked: true,
      },
      {
        level: 2,
        name: "Neural Interface",
        description: "Weapon responds to thought commands, eliminating the need for physical triggers.",
        cost: 75000,
        unlocked: false,
      },
      {
        level: 3,
        name: "Reality Anchor",
        description: "Weapon can affect targets across multiple timelines simultaneously.",
        cost: 150000,
        unlocked: false,
      },
    ],
    nftBonded: true,
    timeline: "both",
  },
]

// Component to render a circular stat indicator
const StatIndicator = ({ value, max = 100 }: { value: number; max?: number }) => {
  const percentage = (value / max) * 100
  const circumference = 2 * Math.PI * 18 // r = 18
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18" fill="none" stroke="#27272a" strokeWidth="4" />
      <circle
        cx="20"
        cy="20"
        r="18"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="4"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform="rotate(-90 20 20)"
      />
      <text x="20" y="24" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
        {value}
      </text>
    </svg>
  )
}

// Component to render a cooldown timer
const CooldownTimer = ({ name, icon, cooldown }: { name: string; icon: React.ReactNode; cooldown: number }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">{icon}</div>
      <div className="flex-1">
        <div className="text-sm font-medium">{name}</div>
        <div className="flex items-center gap-2">
          <div className="text-xs text-zinc-400">Cooldown:</div>
          <div className="text-xs font-mono bg-zinc-800 px-2 py-0.5 rounded">
            {Math.floor(cooldown / 60)}:{(cooldown % 60).toString().padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  )
}

function Clock(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

export default function WeaponsShowcase() {
  const [selectedWeapon, setSelectedWeapon] = useState<WeaponData>(weapons[0])
  const [activeTab, setActiveTab] = useState("specs")

  // Filter weapons by category
  const meleeWeapons = weapons.filter((weapon) => weapon.category === "melee")
  const rangedWeapons = weapons.filter((weapon) => weapon.category === "ranged")
  const specialWeapons = weapons.filter((weapon) => weapon.category === "special" || weapon.category === "companion")

  // Get rarity color
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common":
        return "bg-zinc-500"
      case "uncommon":
        return "bg-green-600"
      case "rare":
        return "bg-blue-600"
      case "epic":
        return "bg-purple-600"
      case "legendary":
        return "bg-orange-500"
      case "mythic":
        return "bg-gradient-to-r from-purple-600 via-pink-500 to-red-500"
      default:
        return "bg-zinc-500"
    }
  }

  return (
    <div className="w-full bg-black text-white min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
            LIONSMANE Arsenal
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Advanced weapons system utilizing LIONSMANE technology to combat the Limptin Foundation's SCAM nanobots
            across both timelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="sticky top-6">
              <h2 className="text-xl font-bold mb-4">Weapon Categories</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-blue-500" /> Melee Weapons
                  </h3>
                  <div className="space-y-2">
                    {meleeWeapons.map((weapon) => (
                      <Card
                        key={weapon.id}
                        className={`bg-zinc-900 border-zinc-800 cursor-pointer transition-all hover:bg-zinc-800 ${selectedWeapon.id === weapon.id ? "border-blue-500" : ""}`}
                        onClick={() => setSelectedWeapon(weapon)}
                      >
                        <CardContent className="p-3 flex items-center gap-3">
                          <div className="w-12 h-12 relative rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={weapon.image || "/placeholder.svg"}
                              alt={weapon.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{weapon.name}</h4>
                            <Badge className={`${getRarityColor(weapon.rarity)} text-xs`}>
                              {weapon.rarity.charAt(0).toUpperCase() + weapon.rarity.slice(1)}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Crosshair className="w-5 h-5 mr-2 text-red-500" /> Ranged Weapons
                  </h3>
                  <div className="space-y-2">
                    {rangedWeapons.map((weapon) => (
                      <Card
                        key={weapon.id}
                        className={`bg-zinc-900 border-zinc-800 cursor-pointer transition-all hover:bg-zinc-800 ${selectedWeapon.id === weapon.id ? "border-blue-500" : ""}`}
                        onClick={() => setSelectedWeapon(weapon)}
                      >
                        <CardContent className="p-3 flex items-center gap-3">
                          <div className="w-12 h-12 relative rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={weapon.image || "/placeholder.svg"}
                              alt={weapon.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{weapon.name}</h4>
                            <Badge className={`${getRarityColor(weapon.rarity)} text-xs`}>
                              {weapon.rarity.charAt(0).toUpperCase() + weapon.rarity.slice(1)}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-purple-500" /> Special Weapons
                  </h3>
                  <div className="space-y-2">
                    {specialWeapons.map((weapon) => (
                      <Card
                        key={weapon.id}
                        className={`bg-zinc-900 border-zinc-800 cursor-pointer transition-all hover:bg-zinc-800 ${selectedWeapon.id === weapon.id ? "border-blue-500" : ""}`}
                        onClick={() => setSelectedWeapon(weapon)}
                      >
                        <CardContent className="p-3 flex items-center gap-3">
                          <div className="w-12 h-12 relative rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={weapon.image || "/placeholder.svg"}
                              alt={weapon.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{weapon.name}</h4>
                            <Badge className={`${getRarityColor(weapon.rarity)} text-xs`}>
                              {weapon.rarity.charAt(0).toUpperCase() + weapon.rarity.slice(1)}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
              <div className="relative h-80">
                <Image
                  src={selectedWeapon.image || "/placeholder.svg"}
                  alt={selectedWeapon.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <Badge className={`${getRarityColor(selectedWeapon.rarity)} mb-2`}>
                    {selectedWeapon.rarity.charAt(0).toUpperCase() + selectedWeapon.rarity.slice(1)}
                  </Badge>
                  <h2 className="text-3xl font-bold">{selectedWeapon.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="border-zinc-700">
                      {selectedWeapon.category.charAt(0).toUpperCase() + selectedWeapon.category.slice(1)}
                    </Badge>
                    <Badge variant="outline" className="border-zinc-700">
                      {selectedWeapon.timeline === "both" ? "Dual Timeline" : selectedWeapon.timeline}
                    </Badge>
                    {selectedWeapon.nftBonded && <Badge className="bg-blue-900">LIONSMANE Bonded</Badge>}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-4 bg-zinc-800">
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                    <TabsTrigger value="abilities">Abilities</TabsTrigger>
                    <TabsTrigger value="upgrades">Upgrades</TabsTrigger>
                    <TabsTrigger value="lore">Lore</TabsTrigger>
                  </TabsList>

                  <TabsContent value="specs" className="pt-6">
                    <p className="text-zinc-300 mb-6">{selectedWeapon.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                      {selectedWeapon.stats.map((stat) => (
                        <div key={stat.name} className="bg-zinc-800 p-4 rounded-lg flex flex-col items-center">
                          <div className="mb-2">{stat.icon}</div>
                          <StatIndicator value={stat.value} />
                          <div className="mt-2 text-sm font-medium">{stat.name}</div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-zinc-800 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <Fingerprint className="w-5 h-5 mr-2 text-blue-400" /> Compatibility
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm text-zinc-400 mb-1">Timeline Effectiveness</h4>
                          <div className="flex items-center gap-2">
                            <Badge
                              className={
                                selectedWeapon.timeline === "2000s" || selectedWeapon.timeline === "both"
                                  ? "bg-blue-600"
                                  : "bg-zinc-700"
                              }
                            >
                              2000s
                            </Badge>
                            <Badge
                              className={
                                selectedWeapon.timeline === "3030s" || selectedWeapon.timeline === "both"
                                  ? "bg-purple-600"
                                  : "bg-zinc-700"
                              }
                            >
                              3030s
                            </Badge>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm text-zinc-400 mb-1">LIONSMANE Integration</h4>
                          <div className="flex items-center gap-2">
                            <Badge className={selectedWeapon.nftBonded ? "bg-green-600" : "bg-zinc-700"}>
                              {selectedWeapon.nftBonded ? "Integrated" : "Not Integrated"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="abilities" className="pt-6">
                    <div className="space-y-6">
                      {selectedWeapon.abilities.map((ability) => (
                        <div key={ability.name} className="bg-zinc-800 p-4 rounded-lg">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center">
                              {ability.icon}
                            </div>
                            <div>
                              <h3 className="font-semibold">{ability.name}</h3>
                              <div className="flex items-center gap-2 text-xs text-zinc-400">
                                <span>Energy: {ability.energyCost}</span>
                                <span>•</span>
                                <span>
                                  Cooldown: {Math.floor(ability.cooldown / 60)}:
                                  {(ability.cooldown % 60).toString().padStart(2, "0")}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-zinc-300 text-sm">{ability.description}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="upgrades" className="pt-6">
                    <div className="space-y-4">
                      {selectedWeapon.upgrades.map((upgrade) => (
                        <div
                          key={upgrade.level}
                          className={`border rounded-lg p-4 ${upgrade.unlocked ? "border-blue-500 bg-blue-900/20" : "border-zinc-700 bg-zinc-800"}`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold flex items-center">
                              <Badge className="mr-2 bg-zinc-700">Level {upgrade.level}</Badge>
                              {upgrade.name}
                            </h3>
                            <Badge className={upgrade.unlocked ? "bg-green-600" : "bg-zinc-700"}>
                              {upgrade.unlocked ? "Unlocked" : "Locked"}
                            </Badge>
                          </div>
                          <p className="text-zinc-300 text-sm mb-3">{upgrade.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="text-sm text-zinc-400">
                              Cost: <span className="text-amber-400">{upgrade.cost.toLocaleString()} G4C</span>
                            </div>
                            {!upgrade.unlocked && (
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                Unlock
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="lore" className="pt-6">
                    <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
                      <h3 className="text-xl font-semibold mb-4">Weapon History</h3>
                      <p className="text-zinc-300 mb-6 leading-relaxed">{selectedWeapon.lore}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-zinc-900 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Shield className="w-4 h-4 mr-2 text-blue-400" /> Anti-SCAM Effectiveness
                          </h4>
                          <div className="w-full bg-zinc-700 rounded-full h-2.5 mb-1">
                            <div
                              className="bg-blue-500 h-2.5 rounded-full"
                              style={{ width: `${selectedWeapon.stats.find((s) => s.name === "Damage")?.value || 0}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-zinc-400">
                            Effectiveness against Limptin Foundation SCAM technology
                          </p>
                        </div>

                        <div className="bg-zinc-900 p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 flex items-center">
                            <Cpu className="w-4 h-4 mr-2 text-purple-400" /> LIONSMANE Resonance
                          </h4>
                          <div className="w-full bg-zinc-700 rounded-full h-2.5 mb-1">
                            <div
                              className="bg-purple-500 h-2.5 rounded-full"
                              style={{ width: `${selectedWeapon.nftBonded ? 100 : 30}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-zinc-400">Compatibility with LIONSMANE consciousness technology</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
