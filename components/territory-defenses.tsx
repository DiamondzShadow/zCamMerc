"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { territories } from "@/data/territories"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { Shield, AlertTriangle, Lock, Eye, Radio, Cpu } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TerritoryDefensesProps {
  territoryId: string | null
}

export default function TerritoryDefenses({ territoryId }: TerritoryDefensesProps) {
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
          <Shield className="h-16 w-16 text-zinc-700 mb-4" />
          <h3 className="text-xl font-bold mb-2">No Territory Selected</h3>
          <p className="text-zinc-400 text-center max-w-md">
            Select a territory from the map to view and manage its defenses.
          </p>
        </CardContent>
      </Card>
    )
  }

  const isOwned = userTerritories.includes(territory.id)

  // Mock defense systems data
  const defenseSystems = [
    {
      id: "ds1",
      name: "Perimeter Firewall",
      type: "Digital",
      level: 3,
      status: "Active",
      effectiveness: 85,
      description: "A digital barrier that prevents unauthorized access to the territory's network.",
      icon: <Lock className="h-8 w-8 text-red-500" />,
    },
    {
      id: "ds2",
      name: "Surveillance Grid",
      type: "Hybrid",
      level: 2,
      status: "Active",
      effectiveness: 70,
      description: "A network of sensors and cameras that monitor activity within the territory.",
      icon: <Eye className="h-8 w-8 text-blue-500" />,
    },
    {
      id: "ds3",
      name: "Quantum Encryption",
      type: "Digital",
      level: 4,
      status: "Active",
      effectiveness: 95,
      description: "Advanced encryption that secures all data and communications within the territory.",
      icon: <Cpu className="h-8 w-8 text-purple-500" />,
    },
    {
      id: "ds4",
      name: "Emergency Response System",
      type: "Physical",
      level: 2,
      status: "Standby",
      effectiveness: 60,
      description: "A rapid response system that deploys countermeasures in case of breach.",
      icon: <AlertTriangle className="h-8 w-8 text-amber-500" />,
    },
    {
      id: "ds5",
      name: "Communication Jammers",
      type: "Hybrid",
      level: 1,
      status: "Inactive",
      effectiveness: 40,
      description: "Disrupts unauthorized communications within the territory.",
      icon: <Radio className="h-8 w-8 text-green-500" />,
    },
  ]

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold">{territory.name} Defenses</h2>
            <p className="text-zinc-400">Manage and upgrade your territory's defense systems</p>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <div className="text-sm text-zinc-500 mb-1">Overall Defense Rating</div>
              <div className="flex items-center gap-2">
                <Progress value={territory.defenseRating} className="h-2 w-32" />
                <span className="font-bold">{territory.defenseRating}%</span>
              </div>
            </div>
            {isOwned && (
              <Button className="bg-red-600 hover:bg-red-700">
                <Shield className="mr-2 h-4 w-4" /> Add Defense System
              </Button>
            )}
          </div>
        </div>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="active" className="data-[state=active]:bg-red-600">
              Active Systems
            </TabsTrigger>
            <TabsTrigger value="inactive" className="data-[state=active]:bg-red-600">
              Inactive Systems
            </TabsTrigger>
            <TabsTrigger value="available" className="data-[state=active]:bg-red-600">
              Available Upgrades
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {defenseSystems
                .filter((ds) => ds.status === "Active" || ds.status === "Standby")
                .map((system) => (
                  <Card key={system.id} className="bg-zinc-800 border-zinc-700">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-zinc-900 flex items-center justify-center">
                          {system.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold">{system.name}</h3>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">
                                  Level {system.level}
                                </Badge>
                                <Badge
                                  className={`text-xs ${
                                    system.status === "Active" ? "bg-emerald-900" : "bg-amber-900"
                                  }`}
                                >
                                  {system.status}
                                </Badge>
                              </div>
                            </div>
                            <Badge variant="secondary" className="bg-zinc-900">
                              {system.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-zinc-400 mb-3">{system.description}</p>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-xs text-zinc-500 mb-1">Effectiveness</div>
                              <div className="flex items-center gap-2">
                                <Progress value={system.effectiveness} className="h-1.5 w-24" />
                                <span className="text-xs">{system.effectiveness}%</span>
                              </div>
                            </div>
                            {isOwned && (
                              <Button size="sm" variant="outline">
                                Upgrade
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="inactive">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {defenseSystems
                .filter((ds) => ds.status === "Inactive")
                .map((system) => (
                  <Card key={system.id} className="bg-zinc-800 border-zinc-700">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-zinc-900 flex items-center justify-center">
                          {system.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold">{system.name}</h3>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">
                                  Level {system.level}
                                </Badge>
                                <Badge className="bg-zinc-700 text-xs">Inactive</Badge>
                              </div>
                            </div>
                            <Badge variant="secondary" className="bg-zinc-900">
                              {system.type}
                            </Badge>
                          </div>
                          <p className="text-sm text-zinc-400 mb-3">{system.description}</p>
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-xs text-zinc-500 mb-1">Effectiveness</div>
                              <div className="flex items-center gap-2">
                                <Progress value={system.effectiveness} className="h-1.5 w-24" />
                                <span className="text-xs">{system.effectiveness}%</span>
                              </div>
                            </div>
                            {isOwned && (
                              <Button size="sm" className="bg-red-600 hover:bg-red-700">
                                Activate
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="available">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-zinc-800 border-zinc-700 border-dashed">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-zinc-900 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-zinc-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">Neural Firewall</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              Level 5
                            </Badge>
                            <Badge className="bg-blue-900 text-xs">Available</Badge>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-zinc-900">
                          Digital
                        </Badge>
                      </div>
                      <p className="text-sm text-zinc-400 mb-3">
                        Advanced AI-powered firewall that adapts to new threats in real-time.
                      </p>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-xs text-zinc-500 mb-1">Requirements</div>
                          <div className="text-xs text-zinc-400">Territory Level 4+</div>
                        </div>
                        {isOwned && territory.level >= 4 ? (
                          <Button size="sm" className="bg-red-600 hover:bg-red-700">
                            Install
                          </Button>
                        ) : (
                          <Button size="sm" disabled>
                            Unavailable
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700 border-dashed">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-zinc-900 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-zinc-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold">Quantum Entanglement Shield</h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              Level 6
                            </Badge>
                            <Badge className="bg-blue-900 text-xs">Available</Badge>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-zinc-900">
                          Hybrid
                        </Badge>
                      </div>
                      <p className="text-sm text-zinc-400 mb-3">
                        Creates an impenetrable barrier using quantum entanglement technology.
                      </p>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-xs text-zinc-500 mb-1">Requirements</div>
                          <div className="text-xs text-zinc-400">Territory Level 5+</div>
                        </div>
                        <Button size="sm" disabled>
                          Unavailable
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
