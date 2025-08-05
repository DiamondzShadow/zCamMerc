import type { Metadata } from "next"
import ExpandedMissions from "@/components/expanded-missions"

export const metadata: Metadata = {
  title: "Extended Missions | Scam Mercenaires",
  description: "Explore the complete mission database in the fight against the Limptin Foundation.",
}

export default function ExpandedMissionsPage() {
  return (
    <div>
      <ExpandedMissions />
    </div>
  )
}
