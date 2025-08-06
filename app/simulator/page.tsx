import type { Metadata } from "next"
import MissionSimulator from "@/components/mission-simulator"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Mission Simulator | SCAM Mercenaires",
  description: "Experience immersive missions in the SCAM Mercenaires universe",
}

export default function SimulatorPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Mission Simulator
            </h1>
            <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Immerse yourself in the SCAM Mercenaires universe with interactive missions that adapt to your choices.
              Every decision shapes your path through the cyberpunk underworld.
            </p>
          </div>

          {/* Mission Simulator Component */}
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center p-12 space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
                <p className="text-zinc-400">Loading mission simulator...</p>
              </div>
            }
          >
            <MissionSimulator />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
