import type { Metadata } from "next"
import MissionSimulator from "@/components/mission-simulator"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Mission Simulator | SCAM Mercenaires",
  description: "Experience immersive missions in the SCAM Mercenaires universe",
}

export default function SimulatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Mission Simulator</h1>
        <p className="text-zinc-400 mb-8">
          Immerse yourself in the SCAM Mercenaires universe with interactive missions that adapt to your choices.
        </p>

        <Suspense fallback={<div className="p-12 text-center">Loading mission simulator...</div>}>
          <MissionSimulator />
        </Suspense>
      </div>
    </div>
  )
}
