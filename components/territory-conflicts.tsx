"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { territories } from "@/data/territories"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { Swords, Shield, AlertTriangle, Clock, Users } from "lucide-react"

interface TerritoryConflictsProps {
  territoryId: string | null
}

export default function TerritoryConflicts({ territoryId }: TerritoryConflictsProps) {
  const [userTerritories] = useLocalStorage<string[]>("user-territories", [])

  const territory = territoryId
    ? territories.find((t) => t.id === territoryId)
    : userTerritories.length > 0
      ? territories.find((t) => t.id === userTerritories[0])
      : null

  if (!territory) {
    return (
      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-6 flex flex-col items-center justify-center min-h-[400px]">
          <Swords className="h-16 w-16 text-zinc-700 mb-4" />
          <h3 className="text-xl font-bold mb-2">No Territory Selected</h3>
          <p className="text-zinc-400 text-center max-w-md">
            Select a territory from the map to view and manage its conflicts.
          </p>
        </CardContent>
      </Card>
    )
  }

  const isOwned = userTerritories.includes(territory.id)

  // Mock active conflicts data
  const activeConflicts = [
    {
      id: "conflict1",
      type: "Raid",
      attacker: "Rogue Hunter Alliance",
      status: "Ongoing",
      timeRemaining: "2h 15m",
      threatLevel: "Medium",
      description: "A group of Rogue Hunters is attempting to raid your territory for resources.",
    },
  ]

  // Mock conflict history data
  const conflictHistory = [
    {
      id: "history1",
      type: "Raid",
      attacker: "Rogue Trapper Cell",
      result: "Defended",
      date: "2 days ago",
      description: "Successfully defended against a raid attempt by a Rogue Trapper Cell.",
    },
    {
      id: "history2",
      type: "Territory Challenge",
      attacker: "King Nexus",
      result: "Lost",
      date: "5 days ago",
      description: "Lost a portion of territory to King Nexus after a failed defense.",
    },
  ]

  // Mock potential threats data
  const potentialThreats = [
    {
      id: "threat1",
      type: "Territory Challenge",
      source: "King Cipher",
      threatLevel: "High",
      estimatedTimeframe: "12-24 hours",
      description: "Intelligence suggests King Cipher is preparing to challenge your territory.",
    },
    {
      id: "threat2",
      type: "Raid",
      source: "Unknown Rogue Group",
      threatLevel: "Low",
      estimatedTimeframe: "3-5 days",
      description: "Unusual activity detected near your territory borders.",
    },
  ]

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold">{territory.name} Conflicts</h2>
            <p className="text-zinc-400">Manage active conflicts and monitor potential threats</p>
          </div>
          {isOwned && (
            <div className="flex gap-3">
              <Button variant="outline">
                <Shield className="mr-2 h-4 w-4" /> Request Allies
              </Button>
              <Button className="bg-red-600 hover:bg-red-700">
                <Swords className="mr-2 h-4 w-4" /> Initiate Challenge
              </Button>
            </div>
          )}
        </div>

        <div className="mb-8">
          <h3 className="font-bold mb-4 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" /> Active Conflicts
          </h3>

          {activeConflicts.length > 0 ? (
            <div className="space-y-4">
              {activeConflicts.map((conflict) => (
                <Card key={conflict.id} className="bg-zinc-800 border-zinc-700">
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row justify-between mb-3 gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold">{conflict.type}</h4>
                          <Badge
                            className={`${
                              conflict.threatLevel === "High"
                                ? "bg-red-900"
                                : conflict.threatLevel === "Medium"
                                  ? "bg-amber-900"
                                  : "bg-blue-900"
                            }`}
                          >
                            {conflict.threatLevel} Threat
                          </Badge>
                        </div>
                        <p className="text-sm text-zinc-400">{conflict.description}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <Badge variant="outline" className="mb-1">
                          <Clock className="mr-1 h-3 w-3" /> {conflict.timeRemaining}
                        </Badge>
                        <div className="text-sm text-zinc-400">Attacker: {conflict.attacker}</div>
                      </div>
                    </div>

                    {isOwned && (
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          <Shield className="mr-2 h-4 w-4" /> Deploy Defenses
                        </Button>
                        <Button size="sm" variant="outline">
                          <Users className="mr-2 h-4 w-4" /> Call Allies
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-4 text-center">
                <p className="text-zinc-400">No active conflicts at this time.</p>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mb-8">
          <h3 className="font-bold mb-4 flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-zinc-500" /> Potential Threats
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {potentialThreats.map((threat) => (
              <Card key={threat.id} className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">{threat.type}</h4>
                    <Badge
                      className={`${
                        threat.threatLevel === "High"
                          ? "bg-red-900"
                          : threat.threatLevel === "Medium"
                            ? "bg-amber-900"
                            : "bg-blue-900"
                      }`}
                    >
                      {threat.threatLevel} Threat
                    </Badge>
                  </div>
                  <p className="text-sm text-zinc-400 mb-3">{threat.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-zinc-400">Source: {threat.source}</div>
                    <div className="text-sm text-zinc-400">
                      <Clock className="inline mr-1 h-3 w-3" /> {threat.estimatedTimeframe}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Conflict History</h3>

          <div className="space-y-3">
            {conflictHistory.map((history) => (
              <Card key={history.id} className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-3">
                  <div className="flex flex-col md:flex-row justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{history.type}</h4>
                        <Badge className={`${history.result === "Defended" ? "bg-emerald-900" : "bg-red-900"}`}>
                          {history.result}
                        </Badge>
                      </div>
                      <p className="text-xs text-zinc-400">{history.description}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="text-xs text-zinc-400">Attacker: {history.attacker}</div>
                      <div className="text-xs text-zinc-400">{history.date}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
