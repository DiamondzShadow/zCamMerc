import type { Mission } from "@/types/mission"

export const missions: Mission[] = [
  {
    id: 1,
    title: "Escape and Identity",
    description:
      "Achieve a plane ticket to NY from your location. Each starting location gives you different abilities to use throughout your journey.",
    location: "Global",
    image: "/missions/mission-1.png",
    objectives: [
      "Find clues that fill in your character's backstory",
      "Find pieces to change your appearance (scissors, shampoo, clothes, etc.)",
      "Find VILEE by paying attention to updates on your cellphone",
      "Set up an in-game wallet",
      "Complete mission to retrieve SIM card",
    ],
    unlocks: ["EMP", "ElectroPistol", "3D VR Hunting", "Open world of the selected city"],
  },
  {
    id: 2,
    title: "Bio-Weapon Heist",
    description: "Hijack a truck containing a dangerous bio-weapon before it falls into the wrong hands.",
    location: "Urban Centers",
    image: "/missions/mission-2.png",
    objectives: [
      "Get armed from a store to complete the job",
      "Attack bio-truck with EMP",
      "Use VR Hunting Specs to track targets",
      "Remote control the smart truck and drive it to the select location",
    ],
    unlocks: ["Nanotracer", "VR/Infrared specs", "NFT HARD wallet", "Laptop", "C4C NFTs"],
  },
  {
    id: 3,
    title: "The Printing Connect",
    description:
      "Find VILEE's visa printing connection to establish a new identity and continue your mission against the Limptin Foundation.",
    location: "Underground Network",
    image: "/missions/mission-3.png",
    objectives: [
      "Identify location by increased postal activity",
      "Verify location with nano tracer transmitter",
      "Get battery for laptop and pieces to build nano receiver",
      "Meet Level 7 NPC hunter to get final piece",
      "Answer crypto-related questions to gain trust",
    ],
    unlocks: ["Nano Crossbow", "NanoTipped Stars (level 1)", "Armor on Car", "Wallet Jammer", "Cross game comm"],
  },
  {
    id: 4,
    title: "NFT Access",
    description:
      "Mint an NFT for entry into the printing connect building, navigating the complex world of digital ownership.",
    location: "Digital Realm",
    image: "/missions/mission-4.png",
    objectives: [
      "Use correct software for NFT minting",
      "Embed proper ownership data in the NFT",
      "Navigate NFT marketplaces to buy an item before the opposition",
      "Meet with Level 7 Hunter at checkpoints",
    ],
    unlocks: [
      "Visa/passport printing business",
      "NFT marketplace access",
      "Missions with Level 7 Hunter",
      "NFT creator (Rarities, traits, and assets)",
    ],
  },
  {
    id: 5,
    title: "The Investment Firm",
    description:
      "Infiltrate an investment firm to stop a scammer from completing a transaction that would fund the Limptin Foundation.",
    location: "Financial District",
    image: "/missions/mission-5.png",
    objectives: [
      "Identify the culprit through clues and mannerisms",
      "Deploy a wifi jammer at the specific desk",
      "Stop the scammer's phone from working",
      "Help the CAUSE team send tracking crypto to the scammer's wallet",
    ],
    unlocks: [
      "Investment broker's job",
      "Investment firm owner (strategic partnership)",
      "Upgrade points for NFT minting",
    ],
  },
]
