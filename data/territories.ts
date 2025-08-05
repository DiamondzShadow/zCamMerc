export type TerritoryStatus = "available" | "claimed" | "contested" | "allied"

export type TerritoryType = "Urban" | "Digital" | "Hybrid"

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
]
