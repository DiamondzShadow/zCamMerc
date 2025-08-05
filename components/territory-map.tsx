"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { territories } from "@/data/territories"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { Lock, Unlock, Shield, AlertTriangle } from "lucide-react"

interface TerritoryMapProps {
  onTerritorySelect: (territoryId: string) => void
  selectedTerritory: string | null
}

export default function TerritoryMap({ onTerritorySelect, selectedTerritory }: TerritoryMapProps) {
  const [userTerritories, setUserTerritories] = useLocalStorage<string[]>("user-territories", [])
  const [hoveredTerritory, setHoveredTerritory] = useState<string | null>(null)
  const [mapFilter, setMapFilter] = useState<string>("all")

  // Filter territories based on the selected filter
  const filteredTerritories = territories.filter((territory) => {
    if (mapFilter === "all") return true
    if (mapFilter === "owned") return userTerritories.includes(territory.id)
    if (mapFilter === "available") return !territory.ownerId && territory.status === "available"
    if (mapFilter === "contested") return territory.status === "contested"
    if (mapFilter === "allied") return territory.status === "allied"
    return true
  })

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-6">
          <Button
            variant={mapFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setMapFilter("all")}
            className={mapFilter === "all" ? "bg-red-600 hover:bg-red-700" : ""}
          >
            All Territories
          </Button>
          <Button
            variant={mapFilter === "owned" ? "default" : "outline"}
            size="sm"
            onClick={() => setMapFilter("owned")}
            className={mapFilter === "owned" ? "bg-emerald-600 hover:bg-emerald-700" : ""}
          >
            My Territories
          </Button>
          <Button
            variant={mapFilter === "available" ? "default" : "outline"}
            size="sm"
            onClick={() => setMapFilter("available")}
            className={mapFilter === "available" ? "bg-blue-600 hover:bg-blue-700" : ""}
          >
            Available
          </Button>
          <Button
            variant={mapFilter === "contested" ? "default" : "outline"}
            size="sm"
            onClick={() => setMapFilter("contested")}
            className={mapFilter === "contested" ? "bg-amber-600 hover:bg-amber-700" : ""}
          >
            Contested
          </Button>
          <Button
            variant={mapFilter === "allied" ? "default" : "outline"}
            size="sm"
            onClick={() => setMapFilter("allied")}
            className={mapFilter === "allied" ? "bg-purple-600 hover:bg-purple-700" : ""}
          >
            Allied
          </Button>
        </div>

        <div className="relative w-full h-[600px] bg-zinc-800 rounded-lg overflow-hidden">
          {/* World map background */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/world-map.png')" }}
          />

          {/* Territory markers */}
          <div className="absolute inset-0">
            <TooltipProvider>
              {filteredTerritories.map((territory) => (
                <Tooltip key={territory.id}>
                  <TooltipTrigger asChild>
                    <div
                      className={`absolute cursor-pointer transition-all duration-300 ${
                        selectedTerritory === territory.id
                          ? "scale-125 z-20"
                          : hoveredTerritory === territory.id
                            ? "scale-110 z-10"
                            : ""
                      }`}
                      style={{
                        top: `${territory.position.y}%`,
                        left: `${territory.position.x}%`,
                      }}
                      onClick={() => onTerritorySelect(territory.id)}
                      onMouseEnter={() => setHoveredTerritory(territory.id)}
                      onMouseLeave={() => setHoveredTerritory(null)}
                    >
                      <div
                        className={`h-6 w-6 rounded-full flex items-center justify-center ${
                          userTerritories.includes(territory.id)
                            ? "bg-emerald-900 border-2 border-emerald-500"
                            : territory.status === "contested"
                              ? "bg-amber-900 border-2 border-amber-500"
                              : territory.status === "allied"
                                ? "bg-purple-900 border-2 border-purple-500"
                                : territory.ownerId
                                  ? "bg-red-900 border-2 border-red-500"
                                  : "bg-blue-900 border-2 border-blue-500"
                        }`}
                      >
                        {userTerritories.includes(territory.id) ? (
                          <Shield className="h-3 w-3 text-emerald-300" />
                        ) : territory.status === "contested" ? (
                          <AlertTriangle className="h-3 w-3 text-amber-300" />
                        ) : territory.ownerId ? (
                          <Lock className="h-3 w-3 text-red-300" />
                        ) : (
                          <Unlock className="h-3 w-3 text-blue-300" />
                        )}
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <div className="p-2">
                      <div className="font-bold mb-1">{territory.name}</div>
                      <div className="text-xs text-zinc-400 mb-1">Level: {territory.level}</div>
                      <div className="flex gap-2">
                        <Badge
                          className={`${
                            userTerritories.includes(territory.id)
                              ? "bg-emerald-900"
                              : territory.status === "contested"
                                ? "bg-amber-900"
                                : territory.status === "allied"
                                  ? "bg-purple-900"
                                  : territory.ownerId
                                    ? "bg-red-900"
                                    : "bg-blue-900"
                          }`}
                        >
                          {userTerritories.includes(territory.id)
                            ? "Owned"
                            : territory.status === "contested"
                              ? "Contested"
                              : territory.status === "allied"
                                ? "Allied"
                                : territory.ownerId
                                  ? "Claimed"
                                  : "Available"}
                        </Badge>
                        <Badge variant="outline">{territory.type}</Badge>
                      </div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>

          {/* Map legend */}
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm p-3 rounded-lg">
            <div className="text-xs font-semibold mb-2">Legend</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-emerald-900 border border-emerald-500"></div>
                <span className="text-xs text-zinc-300">Your Territory</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-900 border border-blue-500"></div>
                <span className="text-xs text-zinc-300">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-900 border border-red-500"></div>
                <span className="text-xs text-zinc-300">Claimed by Others</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-amber-900 border border-amber-500"></div>
                <span className="text-xs text-zinc-300">Contested</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-purple-900 border border-purple-500"></div>
                <span className="text-xs text-zinc-300">Allied</span>
              </div>
            </div>
          </div>

          {/* Selected territory info panel */}
          {selectedTerritory && (
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm p-4 rounded-lg max-w-xs">
              {territories
                .filter((t) => t.id === selectedTerritory)
                .map((territory) => (
                  <div key={territory.id}>
                    <div className="font-bold text-lg mb-1">{territory.name}</div>
                    <div className="text-zinc-400 text-sm mb-3">{territory.description}</div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div>
                        <div className="text-xs text-zinc-500">Type</div>
                        <div className="text-sm">{territory.type}</div>
                      </div>
                      <div>
                        <div className="text-xs text-zinc-500">Level</div>
                        <div className="text-sm">{territory.level}</div>
                      </div>
                      <div>
                        <div className="text-xs text-zinc-500">Status</div>
                        <div className="text-sm">
                          {userTerritories.includes(territory.id)
                            ? "Owned"
                            : territory.status === "contested"
                              ? "Contested"
                              : territory.status === "allied"
                                ? "Allied"
                                : territory.ownerId
                                  ? "Claimed"
                                  : "Available"}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-zinc-500">Resources</div>
                        <div className="text-sm">{territory.resources.join(", ")}</div>
                      </div>
                    </div>
                    {!userTerritories.includes(territory.id) && !territory.ownerId && (
                      <Button
                        size="sm"
                        className="w-full bg-red-600 hover:bg-red-700"
                        onClick={() => {
                          setUserTerritories([...userTerritories, territory.id])
                        }}
                      >
                        Claim Territory
                      </Button>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
