import type { Metadata } from "next"
import MissionList from "@/components/mission-list"
import MissionMap from "@/components/mission-map"

export const metadata: Metadata = {
  title: "Missions | Scam Mercenaires",
  description: "Explore the missions in the fight against the Limptin Foundation.",
}

export default function MissionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Missions</h1>
        <p className="text-zinc-400 text-lg">
          Embark on dangerous missions across the globe to stop the Limptin Foundation from controlling humanity through
          the metaverse.
        </p>
      </div>

      <MissionMap />

      <div className="mt-16">
        <MissionList />
      </div>
    </div>
  )
}
