export type TerritoryStatus = "available" | "claimed" | "contested" | "allied"

export type TerritoryType = "Urban" | "Digital" | "Hybrid" | "Tactical" | "Command"

export interface Business {
  id: string
  name: string
  type: string
  level: number
}

export interface Territory {
  id: string
  name: string
  description: string
  location: string
  type: TerritoryType
  level: number
  defenseRating: number
  population: number
  resources: string[]
  position: {
    x: number
    y: number
  }
  ownerId?: string
  status: TerritoryStatus
  businesses?: Business[]
  image?: string
  specialAbilities?: string[]
}

export const territories: Territory[] = [
  {
    id: "t1",
    name: "Neo-Tokyo District",
    description: "A bustling digital hub with high connectivity and resource generation potential.",
    location: "Asia",
    type: "Urban",
    level: 3,
    defenseRating: 75,
    population: 12500,
    resources: ["Digital Currency", "Processing Power", "Network Bandwidth"],
    position: {
      x: 78,
      y: 35,
    },
    status: "available",
    businesses: [
      {
        id: "b1",
        name: "Quantum Exchange",
        type: "Financial",
        level: 2,
      },
      {
        id: "b2",
        name: "Data Haven",
        type: "Storage",
        level: 1,
      },
    ],
  },
  {
    id: "t2",
    name: "Silicon Nexus",
    description: "A technological powerhouse with advanced infrastructure and research facilities.",
    location: "North America",
    type: "Digital",
    level: 4,
    defenseRating: 85,
    population: 8000,
    resources: ["Processing Power", "Research Data", "Digital Currency"],
    position: {
      x: 25,
      y: 30,
    },
    status: "claimed",
    ownerId: "player123",
  },
  {
    id: "t3",
    name: "Emerald Haven",
    description: "A lush digital-physical hybrid territory with unique resource generation capabilities.",
    location: "South America",
    type: "Hybrid",
    level: 2,
    defenseRating: 60,
    population: 5000,
    resources: ["Organic Data", "Digital Currency", "Quantum Particles"],
    position: {
      x: 30,
      y: 60,
    },
    status: "available",
  },
  {
    id: "t4",
    name: "Cyber Citadel",
    description: "A heavily fortified digital stronghold with exceptional defensive capabilities.",
    location: "Europe",
    type: "Digital",
    level: 5,
    defenseRating: 95,
    population: 15000,
    resources: ["Security Protocols", "Digital Currency", "Processing Power"],
    position: {
      x: 48,
      y: 25,
    },
    status: "contested",
  },
  {
    id: "t5",
    name: "Quantum Valley",
    description: "A cutting-edge research territory specializing in quantum computing and data processing.",
    location: "Australia",
    type: "Digital",
    level: 3,
    defenseRating: 70,
    population: 6000,
    resources: ["Quantum Data", "Processing Power", "Research Points"],
    position: {
      x: 85,
      y: 70,
    },
    status: "available",
  },
  {
    id: "t6",
    name: "Neon District",
    description: "A vibrant urban territory with a thriving digital economy and entertainment sector.",
    location: "Asia",
    type: "Urban",
    level: 2,
    defenseRating: 55,
    population: 20000,
    resources: ["Digital Currency", "Entertainment Data", "Network Bandwidth"],
    position: {
      x: 70,
      y: 40,
    },
    status: "allied",
  },
  {
    id: "t7",
    name: "Arctic Node",
    description: "A remote digital outpost with natural cooling for high-performance computing.",
    location: "Arctic",
    type: "Hybrid",
    level: 4,
    defenseRating: 80,
    population: 2000,
    resources: ["Processing Power", "Cooling Resources", "Digital Currency"],
    position: {
      x: 50,
      y: 10,
    },
    status: "available",
  },
  {
    id: "t8",
    name: "Desert Oasis",
    description: "A hidden digital sanctuary powered by solar energy with unique resource generation.",
    location: "Africa",
    type: "Hybrid",
    level: 3,
    defenseRating: 65,
    population: 4000,
    resources: ["Solar Energy", "Digital Currency", "Rare Data"],
    position: {
      x: 50,
      y: 45,
    },
    status: "available",
  },
  // New Tactical Hideout Territories
  {
    id: "t9",
    name: "Dust Skirmish Zone Alpha",
    description: "A post-apocalyptic wasteland street perfect for guerrilla warfare training and resource scavenging.",
    location: "Wasteland Sector",
    type: "Tactical",
    level: 2,
    defenseRating: 45,
    population: 150,
    resources: ["Scrap Metal", "Combat Experience", "Survival Gear"],
    position: {
      x: 35,
      y: 55,
    },
    status: "available",
    image: "/territories/dust-skirm-zone-lv2.jpg",
    specialAbilities: ["Guerrilla Training", "Resource Scavenging", "Combat Simulation"],
  },
  {
    id: "t10",
    name: "Dust Skirmish Zone Beta",
    description: "Advanced wasteland combat zone with enhanced training facilities and tactical advantages.",
    location: "Wasteland Sector",
    type: "Tactical",
    level: 4,
    defenseRating: 65,
    population: 300,
    resources: ["Advanced Weaponry", "Tactical Data", "Combat Experience"],
    position: {
      x: 38,
      y: 58,
    },
    status: "available",
    image: "/territories/dust-skirm-zone-lv4.png",
    specialAbilities: ["Advanced Combat Training", "Weapon Testing", "Tactical Coordination"],
  },
  {
    id: "t11",
    name: "Ghost Alley",
    description: "A shadowy urban alleyway perfect for stealth operations and covert intelligence gathering.",
    location: "Neo-Tokyo Underground",
    type: "Tactical",
    level: 3,
    defenseRating: 70,
    population: 50,
    resources: ["Intelligence Data", "Stealth Tech", "Black Market Access"],
    position: {
      x: 76,
      y: 38,
    },
    status: "available",
    image: "/territories/ghost-alley.png",
    specialAbilities: ["Stealth Operations", "Intelligence Network", "Covert Missions"],
  },
  {
    id: "t12",
    name: "Noir Overpass Command",
    description: "A strategic overpass facility providing tactical oversight and traffic control capabilities.",
    location: "Urban Infrastructure",
    type: "Command",
    level: 3,
    defenseRating: 80,
    population: 200,
    resources: ["Traffic Control", "Surveillance Data", "Strategic Position"],
    position: {
      x: 45,
      y: 35,
    },
    status: "available",
    image: "/territories/noir-overpass-dualit.png",
    specialAbilities: ["Traffic Manipulation", "Surveillance Network", "Strategic Coordination"],
  },
  {
    id: "t13",
    name: "Noir Overpass Alpha",
    description: "Advanced overpass command center with enhanced surveillance and control systems.",
    location: "Urban Infrastructure",
    type: "Command",
    level: 4,
    defenseRating: 90,
    population: 400,
    resources: ["Advanced Surveillance", "Network Control", "Strategic Intelligence"],
    position: {
      x: 47,
      y: 32,
    },
    status: "available",
    image: "/territories/noir-overpass-lv4.png",
    specialAbilities: ["City-Wide Surveillance", "Network Domination", "Strategic Command"],
  },
  {
    id: "t14",
    name: "Redlink Command Center",
    description: "Ultimate command facility with reality manipulation capabilities and advanced AI systems.",
    location: "Digital Nexus",
    type: "Command",
    level: 8,
    defenseRating: 98,
    population: 1000,
    resources: ["Reality Manipulation", "AI Processing", "Quantum Control"],
    position: {
      x: 55,
      y: 25,
    },
    status: "contested",
    image: "/territories/redlink-hideout-lmec-lv8.png",
    specialAbilities: ["Reality Hacking", "AI Command", "Quantum Manipulation", "Digital Omnipresence"],
  },
  {
    id: "t15",
    name: "Signal Bunker Alpha",
    description: "Communications intelligence facility for intercepting and analyzing digital transmissions.",
    location: "Remote Sector",
    type: "Tactical",
    level: 1,
    defenseRating: 40,
    population: 75,
    resources: ["Signal Intelligence", "Communication Tech", "Data Intercepts"],
    position: {
      x: 20,
      y: 50,
    },
    status: "available",
    image: "/territories/signal-bunker-lv1.png",
    specialAbilities: ["Signal Interception", "Communication Jamming", "Data Analysis"],
  },
  {
    id: "t16",
    name: "Signal Bunker Beta",
    description: "Advanced signal intelligence facility with enhanced interception and analysis capabilities.",
    location: "Remote Sector",
    type: "Tactical",
    level: 2,
    defenseRating: 55,
    population: 150,
    resources: ["Advanced Signals", "Encryption Keys", "Network Access"],
    position: {
      x: 22,
      y: 52,
    },
    status: "available",
    image: "/territories/signal-bunker-lv2.png",
    specialAbilities: ["Advanced Signal Analysis", "Encryption Breaking", "Network Infiltration"],
  },
]
