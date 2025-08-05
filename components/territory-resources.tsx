"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { territories } from "@/data/territories"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { Coins, ArrowUp, ArrowDown, Clock, BarChart3 } from "lucide-react"

interface TerritoryResourcesProps {
  territoryId: string | null
}

export default function TerritoryResources({ territoryId }: TerritoryResourcesProps) {
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
          <Coins className="h-16 w-16 text-zinc-700 mb-4" />
          <h3 className="text-xl font-bold mb-2">No Territory Selected</h3>
          <p className="text-zinc-400 text-center max-w-md">
            Select a territory from the map to view and manage its resources.
          </p>
        </CardContent>
      </Card>
    )
  }

  const isOwned = userTerritories.includes(territory.id)

  // Mock resource data
  const resources = [
    {
      id: "res1",
      name: "Digital Currency",
      amount: 12500,
      capacity: 20000,
      production: 150,
      trend: "up",
      icon: <Coins className="h-6 w-6 text-amber-500" />,
    },
    {
      id: "res2",
      name: "Processing Power",
      amount: 8750,
      capacity: 10000,
      production: 75,
      trend: "up",
      icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
    },
    {
      id: "res3",
      name: "Network Bandwidth",
      amount: 4200,
      capacity: 15000,
      production: -25,
      trend: "down",
      icon: <Clock className="h-6 w-6 text-purple-500" />,
    },
  ]

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold">{territory.name} Resources</h2>
            <p className="text-zinc-400">Manage and optimize your territory's resources</p>
          </div>
          {isOwned && (
            <Button className="bg-red-600 hover:bg-red-700">
              <Coins className="mr-2 h-4 w-4" /> Collect Resources
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {resources.map((resource) => (
            <Card key={resource.id} className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {resource.icon}
                    <h3 className="font-bold">{resource.name}</h3>
                  </div>
                  <Badge className={`${resource.trend === "up" ? "bg-emerald-900" : "bg-red-900"}`}>
                    {resource.trend === "up" ? (
                      <ArrowUp className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDown className="h-3 w-3 mr-1" />
                    )}
                    {Math.abs(resource.production)}/hr
                  </Badge>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between items-center mb-1">
                    <div className="text-sm text-zinc-400">Amount</div>
                    <div className="text-sm">
                      {resource.amount.toLocaleString()} / {resource.capacity.toLocaleString()}
                    </div>
                  </div>
                  <Progress
                    value={(resource.amount / resource.capacity) * 100}
                    className="h-2"
                    indicatorClassName={`${
                      resource.amount / resource.capacity > 0.9
                        ? "bg-red-600"
                        : resource.amount / resource.capacity > 0.7
                          ? "bg-amber-600"
                          : "bg-emerald-600"
                    }`}
                  />
                </div>
                {isOwned && (
                  <div className="grid grid-cols-2 gap-2">
                    <Button size="sm" variant="outline">
                      Optimize
                    </Button>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      Upgrade
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="font-bold mb-4">Resource Buildings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold">Digital Currency Mine</h4>
                  <Badge variant="outline">Level 3</Badge>
                </div>
                <p className="text-sm text-zinc-400 mb-3">Generates Digital Currency at a rate of 150 per hour.</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-zinc-500 mb-1">Efficiency</div>
                    <div className="flex items-center gap-2">
                      <Progress value={75} className="h-1.5 w-24" />
                      <span className="text-xs">75%</span>
                    </div>
                  </div>
                  {isOwned && (
                    <Button size="sm" variant="outline">
                      Upgrade
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold">Processing Center</h4>
                  <Badge variant="outline">Level 2</Badge>
                </div>
                <p className="text-sm text-zinc-400 mb-3">Generates Processing Power at a rate of 75 per hour.</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-zinc-500 mb-1">Efficiency</div>
                    <div className="flex items-center gap-2">
                      <Progress value={60} className="h-1.5 w-24" />
                      <span className="text-xs">60%</span>
                    </div>
                  </div>
                  {isOwned && (
                    <Button size="sm" variant="outline">
                      Upgrade
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {isOwned && (
          <div>
            <h3 className="font-bold mb-4">Available Buildings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-zinc-800 border-zinc-700 border-dashed">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold">Network Hub</h4>
                    <Badge className="bg-blue-900">New</Badge>
                  </div>
                  <p className="text-sm text-zinc-400 mb-3">Generates Network Bandwidth at a rate of 100 per hour.</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs text-zinc-500 mb-1">Cost</div>
                      <div className="text-xs text-zinc-400">5,000 Digital Currency</div>
                    </div>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      Build
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-800 border-zinc-700 border-dashed">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold">Storage Vault</h4>
                    <Badge className="bg-blue-900">New</Badge>
                  </div>
                  <p className="text-sm text-zinc-400 mb-3">
                    Increases resource storage capacity by 5,000 for all resources.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs text-zinc-500 mb-1">Cost</div>
                      <div className="text-xs text-zinc-400">7,500 Digital Currency</div>
                    </div>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700">
                      Build
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
