"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { missions } from "@/data/missions"
import Link from "next/link"

export default function MissionMap() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  const locations = ["Global", "Urban Centers", "Underground Network", "Digital Realm", "Financial District"]

  const filteredMissions = selectedLocation
    ? missions.filter((mission) => mission.location === selectedLocation)
    : missions.slice(0, 1)

  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
      <div className="relative h-[400px] bg-zinc-800">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/world-map.png')" }} />

        {/* Location markers */}
        <div className="absolute top-[30%] left-[25%]" onClick={() => setSelectedLocation("Urban Centers")}>
          <div
            className={`h-4 w-4 rounded-full ${selectedLocation === "Urban Centers" ? "bg-red-500" : "bg-red-500/50"} cursor-pointer hover:bg-red-500 transition-colors`}
          />
        </div>

        <div className="absolute top-[40%] left-[45%]" onClick={() => setSelectedLocation("Underground Network")}>
          <div
            className={`h-4 w-4 rounded-full ${selectedLocation === "Underground Network" ? "bg-red-500" : "bg-red-500/50"} cursor-pointer hover:bg-red-500 transition-colors`}
          />
        </div>

        <div className="absolute top-[35%] left-[65%]" onClick={() => setSelectedLocation("Digital Realm")}>
          <div
            className={`h-4 w-4 rounded-full ${selectedLocation === "Digital Realm" ? "bg-red-500" : "bg-red-500/50"} cursor-pointer hover:bg-red-500 transition-colors`}
          />
        </div>

        <div className="absolute top-[25%] left-[55%]" onClick={() => setSelectedLocation("Financial District")}>
          <div
            className={`h-4 w-4 rounded-full ${selectedLocation === "Financial District" ? "bg-red-500" : "bg-red-500/50"} cursor-pointer hover:bg-red-500 transition-colors`}
          />
        </div>

        <div className="absolute top-[50%] left-[50%]" onClick={() => setSelectedLocation("Global")}>
          <div
            className={`h-4 w-4 rounded-full ${selectedLocation === "Global" ? "bg-red-500" : "bg-red-500/50"} cursor-pointer hover:bg-red-500 transition-colors`}
          />
        </div>

        {/* Info panel */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
          <div className="flex flex-wrap gap-3 mb-4">
            {locations.map((location) => (
              <Button
                key={location}
                variant={selectedLocation === location ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedLocation(location)}
                className={selectedLocation === location ? "bg-red-600 hover:bg-red-700" : ""}
              >
                {location}
              </Button>
            ))}
          </div>

          {filteredMissions.length > 0 ? (
            <div>
              <h3 className="text-lg font-bold mb-2">{filteredMissions[0].title}</h3>
              <p className="text-zinc-400 text-sm mb-4">{filteredMissions[0].description}</p>
              <Link href={`/simulator?mission=${filteredMissions[0].id}`}>
                <Button className="bg-red-600 hover:bg-red-700">Start Mission</Button>
              </Link>
            </div>
          ) : (
            <p className="text-zinc-400">Select a location to view available missions.</p>
          )}
        </div>
      </div>
    </Card>
  )
}
