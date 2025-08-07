"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { Home, Shield, Zap, Users, Building, Key, PlugIcon as Portal, Clock, AlertTriangle, Plus, MoveUpIcon as Upgrade, Database, Target, Crown, Lock, Radio, Eye, MapPin } from 'lucide-react'
import Image from "next/image"

interface Hideout {
  id: string
  name: string
  timeline: "2049" | "3030"
  level: number
  type: "Basic" | "Advanced" | "Fortress" | "Business" | "Tactical" | "Signal"
  location: string
  image: string
  defenseRating: number
  capacity: number
  currentOccupancy: number
  upgrades: string[]
  facilities: string[]
  teamControlDays: number
  businessConversionProgress: number
  portalConnections: string[]
  expansionKeys: number
  upgradeKeys: number
  status: "Active" | "Under Attack" | "Converting" | "Abandoned"
  description: string
  specialAbilities?: string[]
}

const mockHideouts: Hideout[] = [
  {
    id: "h1",
    name: "Redlink Hideout LMEC",
    timeline: "2049",
    level: 4,
    type: "Advanced",
    location: "Neo-Tokyo Underground",
    image: "/hideouts/redlink-hideout-lmec-lv4.png",
    defenseRating: 85,
    capacity: 12,
    currentOccupancy: 8,
    upgrades: ["Reinforced Walls", "Advanced Security", "Portal Generator", "Trap Systems"],
    facilities: ["Storage Vault", "Backup Server", "Medical Bay", "Weapon Cache"],
    teamControlDays: 45,
    businessConversionProgress: 0,
    portalConnections: ["Portal-Alpha", "Portal-Beta"],
    expansionKeys: 3,
    upgradeKeys: 2,
    status: "Active",
    description: "A heavily fortified underground facility with advanced LIONSMANE integration and multi-level security protocols."
  },
  {
    id: "h2",
    name: "Cyber Sanctuary",
    timeline: "3030",
    level: 6,
    type: "Business",
    location: "Digital District",
    image: "/futuristic-business-hideout.png",
    defenseRating: 95,
    capacity: 20,
    currentOccupancy: 15,
    upgrades: ["Quantum Shields", "AI Defense Grid", "Reality Anchor", "Business License"],
    facilities: ["Corporate Office", "Trading Floor", "Data Center", "Portal Hub"],
    teamControlDays: 127,
    businessConversionProgress: 100,
    portalConnections: ["Portal-Gamma", "Portal-Delta", "Portal-Epsilon"],
    expansionKeys: 1,
    upgradeKeys: 5,
    status: "Active",
    description: "A legitimate business front operating in the heart of the digital economy with full LIONSMANE corporate integration."
  },
  {
    id: "h3",
    name: "Stealth Outpost",
    timeline: "2049",
    level: 2,
    type: "Basic",
    location: "Abandoned Warehouse District",
    image: "/stealth-hideout-warehouse.png",
    defenseRating: 60,
    capacity: 6,
    currentOccupancy: 4,
    upgrades: ["Cloaking Field", "Basic Traps"],
    facilities: ["Storage Room", "Communications Array"],
    teamControlDays: 12,
    businessConversionProgress: 0,
    portalConnections: [],
    expansionKeys: 0,
    upgradeKeys: 1,
    status: "Active",
    description: "A basic operational base with minimal security and limited capacity for small team operations."
  },
  {
    id: "h4",
    name: "Dust Skirmish Zone",
    timeline: "2049",
    level: 2,
    type: "Tactical",
    location: "Wasteland Outskirts",
    image: "/hideouts/dust-skirm-zone-lv2.jpg",
    defenseRating: 70,
    capacity: 8,
    currentOccupancy: 6,
    upgrades: ["Dust Camouflage", "Perimeter Sensors"],
    facilities: ["Weapon Cache", "Observation Post", "Supply Depot"],
    teamControlDays: 23,
    businessConversionProgress: 0,
    portalConnections: ["Portal-Dust"],
    expansionKeys: 2,
    upgradeKeys: 1,
    status: "Active",
    description: "A tactical outpost in the dusty wastelands, perfect for ambush operations and resource gathering.",
    specialAbilities: ["Dust Storm Cover", "Long Range Surveillance"]
  },
  {
    id: "h5",
    name: "Dust Skirmish Zone Advanced",
    timeline: "2049",
    level: 4,
    type: "Tactical",
    location: "Deep Wasteland",
    image: "/hideouts/dust-skirm-zone-lv4.png",
    defenseRating: 82,
    capacity: 14,
    currentOccupancy: 10,
    upgrades: ["Advanced Camouflage", "Automated Turrets", "Underground Bunkers", "Dust Shield Generator"],
    facilities: ["Command Center", "Armory", "Medical Station", "Vehicle Bay", "Communications Hub"],
    teamControlDays: 67,
    businessConversionProgress: 0,
    portalConnections: ["Portal-Dust", "Portal-Wasteland"],
    expansionKeys: 4,
    upgradeKeys: 3,
    status: "Active",
    description: "An advanced tactical facility with superior defensive capabilities and expanded operational range.",
    specialAbilities: ["Dust Storm Manipulation", "Satellite Uplink", "Vehicle Deployment"]
  },
  {
    id: "h6",
    name: "Ghost Alley",
    timeline: "2049",
    level: 3,
    type: "Advanced",
    location: "Neo-Tokyo Back Streets",
    image: "/hideouts/ghost-alley.png",
    defenseRating: 75,
    capacity: 10,
    currentOccupancy: 7,
    upgrades: ["Phantom Cloaking", "Neural Scramblers", "Memory Wipe Systems"],
    facilities: ["Safe House", "Data Vault", "Escape Routes", "Identity Workshop"],
    teamControlDays: 34,
    businessConversionProgress: 0,
    portalConnections: ["Portal-Shadow"],
    expansionKeys: 2,
    upgradeKeys: 2,
    status: "Active",
    description: "A hidden facility in the shadowy back alleys, specializing in stealth operations and identity manipulation.",
    specialAbilities: ["Phantom Mode", "Memory Manipulation", "Ghost Protocol"]
  },
  {
    id: "h7",
    name: "Noir Overpass Dualit",
    timeline: "3030",
    level: 5,
    type: "Advanced",
    location: "Cyber City Heights",
    image: "/hideouts/noir-overpass-dualit.png",
    defenseRating: 88,
    capacity: 16,
    currentOccupancy: 12,
    upgrades: ["Dual Reality Anchors", "Quantum Encryption", "Holographic Disguise", "Traffic Control"],
    facilities: ["Dual Command Centers", "Reality Lab", "Traffic Monitoring", "Quantum Vault"],
    teamControlDays: 89,
    businessConversionProgress: 85,
    portalConnections: ["Portal-Overpass-A", "Portal-Overpass-B"],
    expansionKeys: 3,
    upgradeKeys: 4,
    status: "Converting",
    description: "A sophisticated dual-reality facility built into the city's overpass system with traffic control capabilities.",
    specialAbilities: ["Dual Reality Control", "Traffic Manipulation", "Quantum Tunneling"]
  },
  {
    id: "h8",
    name: "Noir Overpass Level 4",
    timeline: "3030",
    level: 4,
    type: "Advanced",
    location: "Metro Overpass Network",
    image: "/hideouts/noir-overpass-lv4.png",
    defenseRating: 83,
    capacity: 14,
    currentOccupancy: 11,
    upgrades: ["Traffic Integration", "Surveillance Network", "Emergency Protocols", "Stealth Mode"],
    facilities: ["Control Room", "Surveillance Hub", "Emergency Bunker", "Vehicle Access"],
    teamControlDays: 56,
    businessConversionProgress: 45,
    portalConnections: ["Portal-Metro"],
    expansionKeys: 2,
    upgradeKeys: 3,
    status: "Active",
    description: "An integrated overpass facility with full traffic network access and metropolitan surveillance capabilities.",
    specialAbilities: ["Traffic Control", "City-Wide Surveillance", "Emergency Response"]
  },
  {
    id: "h9",
    name: "Redlink Command Center",
    timeline: "3030",
    level: 8,
    type: "Fortress",
    location: "Digital Nexus Core",
    image: "/hideouts/redlink-hideout-lmec-lv8-new.png",
    defenseRating: 98,
    capacity: 25,
    currentOccupancy: 20,
    upgrades: ["Reality Shields", "Quantum Encryption", "Temporal Locks", "AI Defense Grid", "Portal Mastery"],
    facilities: ["Command Center", "Reality Lab", "Portal Network Hub", "Advanced Medical", "Armory", "Data Fortress"],
    teamControlDays: 156,
    businessConversionProgress: 100,
    portalConnections: ["Portal-Alpha", "Portal-Beta", "Portal-Gamma", "Portal-Command"],
    expansionKeys: 5,
    upgradeKeys: 8,
    status: "Active",
    description: "The ultimate Redlink facility with reality manipulation capabilities and complete portal network control.",
    specialAbilities: ["Reality Manipulation", "Temporal Control", "Portal Mastery", "AI Command"]
  },
  {
    id: "h10",
    name: "Signal Bunker Alpha",
    timeline: "2049",
    level: 1,
    type: "Signal",
    location: "Communication Ridge",
    image: "/hideouts/signal-bunker-lv1.png",
    defenseRating: 65,
    capacity: 6,
    currentOccupancy: 4,
    upgrades: ["Signal Amplifier", "Encryption Protocols"],
    facilities: ["Radio Array", "Signal Processing", "Backup Power"],
    teamControlDays: 18,
    businessConversionProgress: 0,
    portalConnections: [],
    expansionKeys: 1,
    upgradeKeys: 1,
    status: "Active",
    description: "A basic signal intelligence facility for monitoring and intercepting communications across the region.",
    specialAbilities: ["Signal Interception", "Communication Jamming"]
  },
  {
    id: "h11",
    name: "Signal Bunker Beta",
    timeline: "2049",
    level: 2,
    type: "Signal",
    location: "Mountain Peak Station",
    image: "/hideouts/signal-bunker-lv2.png",
    defenseRating: 72,
    capacity: 8,
    currentOccupancy: 6,
    upgrades: ["Advanced Array", "Quantum Encryption", "Signal Boosters", "Stealth Mode"],
    facilities: ["Satellite Uplink", "Signal Lab", "Encryption Center", "Emergency Broadcast"],
    teamControlDays: 41,
    businessConversionProgress: 0,
    portalConnections: ["Portal-Signal"],
    expansionKeys: 2,
    upgradeKeys: 2,
    status: "Active",
    description: "An advanced signal intelligence facility with satellite connectivity and quantum-encrypted communications.",
    specialAbilities: ["Satellite Control", "Quantum Communication", "Signal Manipulation", "Emergency Broadcast"]
  }
]

const redlinkProgression = [
  {
    level: 2,
    name: "Redlink Security Terminal",
    image: "/hideouts/redlink-hideout-lv2.jpeg",
    description: "Basic security interface with holographic lock system and minimal defensive capabilities.",
    defenseRating: 45,
    capacity: 4,
    facilities: ["Security Terminal", "Basic Storage"],
    upgrades: ["Holographic Lock", "Basic Encryption"]
  },
  {
    level: 3,
    name: "Redlink Security Core",
    image: "/hideouts/redlink-hideout-lv3.jpeg",
    description: "Enhanced security module with advanced encryption protocols and integrated circuit protection.",
    defenseRating: 65,
    capacity: 8,
    facilities: ["Security Core", "Encrypted Storage", "Communication Hub"],
    upgrades: ["Advanced Encryption", "Circuit Protection", "Biometric Scanners"]
  },
  {
    level: 4,
    name: "Redlink Hideout LMEC",
    image: "/hideouts/redlink-hideout-lmec-lv4.png",
    description: "Advanced underground facility with multi-level security and LIONSMANE integration.",
    defenseRating: 85,
    capacity: 12,
    facilities: ["Storage Vault", "Backup Server", "Medical Bay", "Weapon Cache"],
    upgrades: ["Reinforced Walls", "Advanced Security", "Portal Generator", "Trap Systems"]
  },
  {
    level: 8,
    name: "Redlink Command Center",
    image: "/hideouts/redlink-hideout-lmec-lv8-new.png",
    description: "Elite command facility with reality manipulation capabilities and complete portal network control.",
    defenseRating: 98,
    capacity: 25,
    facilities: ["Command Center", "Reality Lab", "Portal Network Hub", "Advanced Medical", "Armory", "Data Fortress"],
    upgrades: ["Reality Shields", "Quantum Encryption", "Temporal Locks", "AI Defense Grid", "Portal Mastery"]
  }
]

export default function HideoutManagement() {
  const [selectedHideout, setSelectedHideout] = useState<string | null>(null)
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false)
  const [buildModalOpen, setBuildModalOpen] = useState(false)
  const [progressionModalOpen, setProgressionModalOpen] = useState(false)
  const [selectedTimeline, setSelectedTimeline] = useState<"2049" | "3030">("2049")
  const [userHideouts, setUserHideouts] = useLocalStorage<string[]>("user-hideouts", ["h1", "h4", "h6", "h10"])

  const hideout = selectedHideout ? mockHideouts.find(h => h.id === selectedHideout) : null

  const handleUpgradeHideout = () => {
    setUpgradeModalOpen(false)
  }

  const handleBuildHideout = () => {
    setBuildModalOpen(false)
  }

  const getBusinessConversionRequirement = (timeline: "2049" | "3030") => {
    return timeline === "3030" ? 90 : 60
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Tactical": return Target
      case "Signal": return Radio
      case "Business": return Building
      case "Fortress": return Crown
      default: return Home
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Hideout Management</h1>
          <p className="text-zinc-400">Build, defend, and expand your operations across timelines</p>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => setBuildModalOpen(true)} className="bg-red-600 hover:bg-red-700">
            <Plus className="mr-2 h-4 w-4" /> Build Hideout
          </Button>
          <Button variant="outline" onClick={() => setProgressionModalOpen(true)}>
            <Crown className="mr-2 h-4 w-4" /> Redlink Progression
          </Button>
          <Button variant="outline">
            <Portal className="mr-2 h-4 w-4" /> Portal Network
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="overview" className="data-[state=active]:bg-red-600">
            <Home className="mr-2 h-4 w-4" /> Overview
          </TabsTrigger>
          <TabsTrigger value="2049" className="data-[state=active]:bg-red-600">
            <Clock className="mr-2 h-4 w-4" /> 2049 Timeline
          </TabsTrigger>
          <TabsTrigger value="3030" className="data-[state=active]:bg-red-600">
            <Zap className="mr-2 h-4 w-4" /> 3030 Timeline
          </TabsTrigger>
          <TabsTrigger value="tactical" className="data-[state=active]:bg-red-600">
            <Target className="mr-2 h-4 w-4" /> Tactical
          </TabsTrigger>
          <TabsTrigger value="portals" className="data-[state=active]:bg-red-600">
            <Portal className="mr-2 h-4 w-4" /> Portal Network
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockHideouts.filter(h => userHideouts.includes(h.id)).map((hideout) => {
              const TypeIcon = getTypeIcon(hideout.type)
              return (
                <Card 
                  key={hideout.id} 
                  className={`bg-zinc-900 border-zinc-800 cursor-pointer transition-all hover:border-red-500 ${
                    selectedHideout === hideout.id ? 'border-red-500' : ''
                  }`}
                  onClick={() => setSelectedHideout(hideout.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <TypeIcon className="h-4 w-4 text-red-500" />
                          {hideout.name}
                        </CardTitle>
                        <p className="text-sm text-zinc-400">{hideout.location}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge className={`${hideout.timeline === '3030' ? 'bg-purple-900' : 'bg-blue-900'}`}>
                          {hideout.timeline}
                        </Badge>
                        <Badge variant="outline">Level {hideout.level}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={hideout.image || "/placeholder.svg"}
                        alt={hideout.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-zinc-400">Defense Rating</span>
                        <div className="flex items-center gap-2">
                          <Progress value={hideout.defenseRating} className="h-2 w-16" />
                          <span className="text-sm">{hideout.defenseRating}%</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-zinc-400">Occupancy</span>
                        <span className="text-sm">{hideout.currentOccupancy}/{hideout.capacity}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-zinc-400">Team Control</span>
                        <span className="text-sm">{hideout.teamControlDays} days</span>
                      </div>

                      {hideout.specialAbilities && hideout.specialAbilities.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {hideout.specialAbilities.slice(0, 2).map((ability, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {ability}
                            </Badge>
                          ))}
                          {hideout.specialAbilities.length > 2 && (
                            <Badge variant="secondary" className="text-xs">
                              +{hideout.specialAbilities.length - 2} more
                            </Badge>
                          )}
                        </div>
                      )}

                      <div className="flex justify-between items-center pt-2">
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">
                            <Key className="mr-1 h-3 w-3" /> {hideout.upgradeKeys}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            <Plus className="mr-1 h-3 w-3" /> {hideout.expansionKeys}
                          </Badge>
                        </div>
                        <Badge className={`${
                          hideout.status === 'Active' ? 'bg-emerald-900' :
                          hideout.status === 'Under Attack' ? 'bg-red-900' :
                          hideout.status === 'Converting' ? 'bg-amber-900' : 'bg-zinc-700'
                        }`}>
                          {hideout.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {selectedHideout && hideout && (
            <Card className="mt-8 bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Home className="h-6 w-6 text-red-500" />
                  {hideout.name} - Detailed View
                </CardTitle>
                <p className="text-zinc-400 mt-2">{hideout.description}</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-blue-500" /> Facilities
                    </h3>
                    <div className="space-y-2">
                      {hideout.facilities.map((facility, index) => (
                        <div key={index} className="flex items-center gap-2 text-zinc-300">
                          <Building className="h-4 w-4 text-zinc-500" />
                          {facility}
                        </div>
                      ))}
                    </div>

                    <h3 className="font-bold mb-3 mt-6 flex items-center gap-2">
                      <Upgrade className="h-4 w-4 text-purple-500" /> Upgrades
                    </h3>
                    <div className="space-y-2">
                      {hideout.upgrades.map((upgrade, index) => (
                        <div key={index} className="flex items-center gap-2 text-zinc-300">
                          <Zap className="h-4 w-4 text-zinc-500" />
                          {upgrade}
                        </div>
                      ))}
                    </div>

                    {hideout.specialAbilities && hideout.specialAbilities.length > 0 && (
                      <>
                        <h3 className="font-bold mb-3 mt-6 flex items-center gap-2">
                          <Eye className="h-4 w-4 text-cyan-500" /> Special Abilities
                        </h3>
                        <div className="space-y-2">
                          {hideout.specialAbilities.map((ability, index) => (
                            <div key={index} className="flex items-center gap-2 text-zinc-300">
                              <Target className="h-4 w-4 text-cyan-500" />
                              {ability}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold mb-3 flex items-center gap-2">
                      <Portal className="h-4 w-4 text-cyan-500" /> Portal Connections
                    </h3>
                    <div className="space-y-2 mb-6">
                      {hideout.portalConnections.length > 0 ? (
                        hideout.portalConnections.map((portal, index) => (
                          <div key={index} className="flex items-center gap-2 text-zinc-300">
                            <Portal className="h-4 w-4 text-cyan-500" />
                            {portal}
                          </div>
                        ))
                      ) : (
                        <p className="text-zinc-500">No portal connections</p>
                      )}
                    </div>

                    {hideout.timeline === "3030" && (
                      <div className="mb-6">
                        <h3 className="font-bold mb-3 flex items-center gap-2">
                          <Building className="h-4 w-4 text-emerald-500" /> Business Conversion
                        </h3>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-zinc-400">Progress</span>
                            <span className="text-sm">
                              {hideout.teamControlDays}/{getBusinessConversionRequirement("3030")} days
                            </span>
                          </div>
                          <Progress 
                            value={(hideout.teamControlDays / getBusinessConversionRequirement("3030")) * 100} 
                            className="h-2" 
                          />
                          {hideout.teamControlDays >= getBusinessConversionRequirement("3030") && hideout.type !== "Business" && (
                            <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
                              Convert to Business
                            </Button>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <Button 
                        onClick={() => setUpgradeModalOpen(true)}
                        className="bg-red-600 hover:bg-red-700"
                        disabled={hideout.upgradeKeys === 0}
                      >
                        <Upgrade className="mr-2 h-4 w-4" /> 
                        Upgrade ({hideout.upgradeKeys} keys)
                      </Button>
                      <Button 
                        variant="outline"
                        disabled={hideout.expansionKeys === 0}
                      >
                        <Plus className="mr-2 h-4 w-4" /> 
                        Expand ({hideout.expansionKeys} keys)
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="2049">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">2049 Timeline - Buildable Hideouts</h2>
            <p className="text-zinc-400">
              In 2049, hideouts serve as defensive positions that can house backup, storage, and become deadly traps when upgraded.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockHideouts.filter(h => h.timeline === "2049").map((hideout) => {
              const TypeIcon = getTypeIcon(hideout.type)
              return (
                <Card key={hideout.id} className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold flex items-center gap-2">
                          <TypeIcon className="h-4 w-4 text-red-500" />
                          {hideout.name}
                        </h3>
                        <p className="text-sm text-zinc-400">{hideout.location}</p>
                      </div>
                      <Badge variant="outline">Level {hideout.level}</Badge>
                    </div>
                    
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={hideout.image || "/placeholder.svg"}
                        alt={hideout.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-zinc-400">Type</span>
                        <span className="text-sm">{hideout.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-zinc-400">Defense</span>
                        <span className="text-sm">{hideout.defenseRating}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-zinc-400">Capacity</span>
                        <span className="text-sm">{hideout.capacity} operatives</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {hideout.facilities.slice(0, 2).map((facility, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                      {hideout.facilities.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{hideout.facilities.length - 2} more
                        </Badge>
                      )}
                    </div>

                    {hideout.specialAbilities && hideout.specialAbilities.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {hideout.specialAbilities.slice(0, 2).map((ability, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {ability}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Database className="mr-2 h-4 w-4" /> Manage Hideout
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="3030">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">3030 Timeline - Business Conversion</h2>
            <p className="text-zinc-400">
              In 3030, hideouts defended by the same team for 90+ days can be converted into legitimate businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockHideouts.filter(h => h.timeline === "3030").map((hideout) => {
              const TypeIcon = getTypeIcon(hideout.type)
              return (
                <Card key={hideout.id} className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold flex items-center gap-2">
                          <TypeIcon className="h-4 w-4 text-red-500" />
                          {hideout.name}
                        </h3>
                        <p className="text-sm text-zinc-400">{hideout.location}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge variant="outline">Level {hideout.level}</Badge>
                        {hideout.type === "Business" && (
                          <Badge className="bg-emerald-900">Business</Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={hideout.image || "/placeholder.svg"}
                        alt={hideout.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-zinc-400">Team Control</span>
                        <span className="text-sm">{hideout.teamControlDays} days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-zinc-400">Business Progress</span>
                        <span className="text-sm">
                          {Math.min(hideout.teamControlDays, 90)}/90 days
                        </span>
                      </div>
                      <Progress 
                        value={(Math.min(hideout.teamControlDays, 90) / 90) * 100} 
                        className="h-2" 
                      />
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {hideout.portalConnections.slice(0, 2).map((portal, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          <Portal className="mr-1 h-3 w-3" />
                          {portal}
                        </Badge>
                      ))}
                      {hideout.portalConnections.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{hideout.portalConnections.length - 2} portals
                        </Badge>
                      )}
                    </div>

                    {hideout.specialAbilities && hideout.specialAbilities.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {hideout.specialAbilities.slice(0, 2).map((ability, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {ability}
                          </Badge>
                        ))}
                      </div>
                    )}

                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <Building className="mr-2 h-4 w-4" /> 
                      {hideout.type === "Business" ? "Manage Business" : "Monitor Progress"}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="tactical">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Tactical Operations Centers</h2>
            <p className="text-zinc-400">
              Specialized facilities for combat operations, signal intelligence, and strategic positioning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockHideouts.filter(h => h.type === "Tactical" || h.type === "Signal").map((hideout) => {
              const TypeIcon = getTypeIcon(hideout.type)
              return (
                <Card key={hideout.id} className="bg-zinc-900 border-zinc-800">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold flex items-center gap-2">
                          <TypeIcon className="h-4 w-4 text-red-500" />
                          {hideout.name}
                        </h3>
                        <p className="text-sm text-zinc-400">{hideout.location}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge variant="outline">Level {hideout.level}</Badge>
                        <Badge className={hideout.type === "Tactical" ? "bg-orange-900" : "bg-cyan-900"}>
                          {hideout.type}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={hideout.image || "/placeholder.svg"}
                        alt={hideout.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-zinc-400">Defense Rating</span>
                        <span className="text-sm">{hideout.defenseRating}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-zinc-400">Operational Range</span>
                        <span className="text-sm">{hideout.type === "Signal" ? "Regional" : "Local"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-zinc-400">Team Size</span>
                        <span className="text-sm">{hideout.capacity} operatives</span>
                      </div>
                    </div>

                    {hideout.specialAbilities && hideout.specialAbilities.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2 text-zinc-300">Special Abilities</h4>
                        <div className="flex flex-wrap gap-1">
                          {hideout.specialAbilities.map((ability, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {ability}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1 mb-4">
                      {hideout.facilities.slice(0, 3).map((facility, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                      {hideout.facilities.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{hideout.facilities.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <Target className="mr-2 h-4 w-4" /> Deploy Operations
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="portals">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Portal Network</h2>
            <p className="text-zinc-400">
              Manage portal connections between hideouts and coordinate team movements across timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Portal className="h-5 w-5 text-cyan-500" />
                  Active Portals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg">
                    <div>
                      <div className="font-medium">Portal-Alpha</div>
                      <div className="text-sm text-zinc-400">Redlink Hideout ↔ Cyber Sanctuary</div>
                    </div>
                    <Badge className="bg-emerald-900">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg">
                    <div>
                      <div className="font-medium">Portal-Beta</div>
                      <div className="text-sm text-zinc-400">Redlink Hideout ↔ Stealth Outpost</div>
                    </div>
                    <Badge className="bg-emerald-900">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg">
                    <div>
                      <div className="font-medium">Portal-Dust</div>
                      <div className="text-sm text-zinc-400">Dust Zones ↔ Signal Network</div>
                    </div>
                    <Badge className="bg-emerald-900">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg">
                    <div>
                      <div className="font-medium">Portal-Shadow</div>
                      <div className="text-sm text-zinc-400">Ghost Alley ↔ Unknown</div>
                    </div>
                    <Badge className="bg-amber-900">Unstable</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-red-500" />
                  Portal Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Total Portals</span>
                    <span className="font-bold">8</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Active Connections</span>
                    <span className="font-bold text-emerald-400">6</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Cross-Timeline Links</span>
                    <span className="font-bold text-purple-400">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Tactical Networks</span>
                    <span className="font-bold text-orange-400">4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Energy Consumption</span>
                    <span className="font-bold text-amber-400">1,250 kW/h</span>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700">
                  <Portal className="mr-2 h-4 w-4" />
                  Create New Portal
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Redlink Progression Modal */}
      <Dialog open={progressionModalOpen} onOpenChange={setProgressionModalOpen}>
        <DialogContent className="bg-zinc-900 border-zinc-800 max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Crown className="h-6 w-6 text-red-500" />
              Redlink Hideout Progression
            </DialogTitle>
            <DialogDescription>
              Witness the evolution of the legendary Redlink facility from basic security terminal to ultimate command center.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {redlinkProgression.map((stage, index) => (
              <Card key={stage.level} className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={stage.image || "/placeholder.svg"}
                        alt={stage.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-red-900">Level {stage.level}</Badge>
                        {stage.level === 8 && <Crown className="h-5 w-5 text-amber-500" />}
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold mb-2">{stage.name}</h3>
                        <p className="text-zinc-400 text-sm">{stage.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-zinc-400">Defense Rating:</span>
                          <div className="flex items-center gap-2 mt-1">
                            <Progress value={stage.defenseRating} className="h-2 flex-1" />
                            <span>{stage.defenseRating}%</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-zinc-400">Capacity:</span>
                          <div className="mt-1 font-medium">{stage.capacity} operatives</div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Building className="h-4 w-4 text-blue-500" />
                          Key Facilities
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {stage.facilities.slice(0, 3).map((facility, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {facility}
                            </Badge>
                          ))}
                          {stage.facilities.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{stage.facilities.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2 flex items-center gap-2">
                          <Zap className="h-4 w-4 text-purple-500" />
                          Core Upgrades
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {stage.upgrades.slice(0, 3).map((upgrade, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {upgrade}
                            </Badge>
                          ))}
                          {stage.upgrades.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{stage.upgrades.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {index < redlinkProgression.length - 1 && (
                    <div className="flex justify-center mt-6">
                      <div className="flex items-center gap-2 text-zinc-500">
                        <div className="w-8 h-px bg-zinc-600"></div>
                        <Upgrade className="h-4 w-4" />
                        <div className="w-8 h-px bg-zinc-600"></div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-end">
            <Button onClick={() => setProgressionModalOpen(false)} className="bg-red-600 hover:bg-red-700">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Upgrade Modal */}
      <Dialog open={upgradeModalOpen} onOpenChange={setUpgradeModalOpen}>
        <DialogContent className="bg-zinc-900 border-zinc-800">
          <DialogHeader>
            <DialogTitle>Upgrade Hideout</DialogTitle>
            <DialogDescription>
              Use upgrade keys to enhance your hideout's capabilities and defenses.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="flex justify-between items-center">
              <div className="font-medium">Current Level</div>
              <div>{hideout?.level}</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-medium">Next Level</div>
              <div>{hideout ? hideout.level + 1 : 0}</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-medium">Upgrade Keys Required</div>
              <div>1</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-medium">Available Keys</div>
              <div>{hideout?.upgradeKeys}</div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setUpgradeModalOpen(false)}>
              Cancel
            </Button>
            <Button 
              className="bg-red-600 hover:bg-red-700"
              onClick={handleUpgradeHideout}
              disabled={!hideout || hideout.upgradeKeys === 0}
            >
              Confirm Upgrade
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Build Modal */}
      <Dialog open={buildModalOpen} onOpenChange={setBuildModalOpen}>
        <DialogContent className="bg-zinc-900 border-zinc-800">
          <DialogHeader>
            <DialogTitle>Build New Hideout</DialogTitle>
            <DialogDescription>
              Establish a new hideout in your chosen timeline and location.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Timeline</label>
              <div className="flex gap-2">
                <Button
                  variant={selectedTimeline === "2049" ? "default" : "outline"}
                  onClick={() => setSelectedTimeline("2049")}
                  className={selectedTimeline === "2049" ? "bg-blue-600" : ""}
                >
                  2049 - Buildable
                </Button>
                <Button
                  variant={selectedTimeline === "3030" ? "default" : "outline"}
                  onClick={() => setSelectedTimeline("3030")}
                  className={selectedTimeline === "3030" ? "bg-purple-600" : ""}
                >
                  3030 - Business Ready
                </Button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-zinc-400 mb-2">Location</label>
              <select className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                <option>Neo-Tokyo Underground</option>
                <option>Digital District</option>
                <option>Abandoned Warehouse District</option>
                <option>Cyber Slums</option>
                <option>Corporate Zone</option>
                <option>Wasteland Outskirts</option>
                <option>Communication Ridge</option>
                <option>Mountain Peak Station</option>
              </select>
            </div>

            <div className="bg-zinc-800 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Construction Requirements</h4>
              <div className="space-y-1 text-sm text-zinc-400">
                <div>• 10,000 G4C Tokens</div>
                <div>• 5 LIONSMANE NFTs</div>
                <div>• Team of 3+ members</div>
                {selectedTimeline === "3030" && (
                  <div>• Portal Generator (for business conversion)</div>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setBuildModalOpen(false)}>
              Cancel
            </Button>
            <Button 
              className="bg-red-600 hover:bg-red-700"
              onClick={handleBuildHideout}
            >
              Begin Construction
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
