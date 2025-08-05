"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { territories } from "@/data/territories"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { Shield, Users, Building, Zap, ArrowUp } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface TerritoryDetailsProps {
  territoryId: string | null
}

export default function TerritoryDetails({ territoryId }: TerritoryDetailsProps) {
  const [userTerritories] = useLocalStorage<string[]>("user-territories", [])
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false)
  const [renameModalOpen, setRenameModalOpen] = useState(false)
  const [newName, setNewName] = useState("")

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
            Select a territory from the map to view its details, or claim a new territory to begin building your digital
            domain.
          </p>
        </CardContent>
      </Card>
    )
  }

  const isOwned = userTerritories.includes(territory.id)

  return (
    <>
      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center mb-4">
                {territory.type === "Urban" ? (
                  <Building className="h-24 w-24 text-zinc-700" />
                ) : territory.type === "Digital" ? (
                  <Zap className="h-24 w-24 text-zinc-700" />
                ) : (
                  <Shield className="h-24 w-24 text-zinc-700" />
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-zinc-500 mb-1">Status</div>
                  <Badge
                    className={`${
                      isOwned
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
                    {isOwned
                      ? "Owned"
                      : territory.status === "contested"
                        ? "Contested"
                        : territory.status === "allied"
                          ? "Allied"
                          : territory.ownerId
                            ? "Claimed"
                            : "Available"}
                  </Badge>
                </div>

                <div>
                  <div className="text-sm text-zinc-500 mb-1">Type</div>
                  <Badge variant="outline">{territory.type}</Badge>
                </div>

                <div>
                  <div className="text-sm text-zinc-500 mb-1">Level</div>
                  <div className="text-2xl font-bold">{territory.level}</div>
                </div>

                {isOwned && (
                  <div>
                    <div className="text-sm text-zinc-500 mb-1">Upgrade Progress</div>
                    <div className="flex items-center gap-2 mb-2">
                      <Progress value={65} className="h-2 flex-1" />
                      <span className="text-xs text-zinc-400">65%</span>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-red-600 hover:bg-red-700"
                      onClick={() => setUpgradeModalOpen(true)}
                    >
                      <ArrowUp className="mr-2 h-4 w-4" /> Upgrade Territory
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{territory.name}</h2>
                  <p className="text-zinc-400">{territory.location}</p>
                </div>
                {isOwned && (
                  <Button variant="outline" size="sm" onClick={() => setRenameModalOpen(true)}>
                    Rename
                  </Button>
                )}
              </div>

              <p className="text-zinc-300 mb-6">{territory.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h3 className="font-bold mb-2 flex items-center">
                    <Shield className="mr-2 h-4 w-4 text-red-500" /> Defense Rating
                  </h3>
                  <div className="flex items-center gap-2">
                    <Progress value={territory.defenseRating} className="h-2 flex-1" />
                    <span className="text-sm">{territory.defenseRating}%</span>
                  </div>
                </div>

                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h3 className="font-bold mb-2 flex items-center">
                    <Users className="mr-2 h-4 w-4 text-blue-500" /> Population
                  </h3>
                  <div className="text-2xl font-bold">{territory.population.toLocaleString()}</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-3">Resources</h3>
                <div className="flex flex-wrap gap-2">
                  {territory.resources.map((resource, index) => (
                    <Badge key={index} variant="secondary" className="bg-zinc-800">
                      {resource}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold mb-3">Businesses</h3>
                {territory.businesses && territory.businesses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {territory.businesses.map((business, index) => (
                      <div key={index} className="bg-zinc-800 p-3 rounded-lg flex items-center gap-3">
                        <Building className="h-8 w-8 text-zinc-600" />
                        <div>
                          <div className="font-medium">{business.name}</div>
                          <div className="text-xs text-zinc-400">{business.type}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-zinc-400">No businesses established in this territory.</p>
                )}
              </div>

              {isOwned && (
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Building className="mr-2 h-4 w-4" /> Establish Business
                  </Button>
                  <Button variant="outline">
                    <Shield className="mr-2 h-4 w-4" /> Manage Defenses
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upgrade Modal */}
      <Dialog open={upgradeModalOpen} onOpenChange={setUpgradeModalOpen}>
        <DialogContent className="bg-zinc-900 border-zinc-800">
          <DialogHeader>
            <DialogTitle>Upgrade Territory</DialogTitle>
            <DialogDescription>
              Upgrade your territory to increase its level, defense rating, and resource production.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="flex justify-between items-center">
              <div className="font-medium">Current Level</div>
              <div>{territory.level}</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-medium">Next Level</div>
              <div>{territory.level + 1}</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-medium">Required LIONSMANE NFTs</div>
              <div>{territory.level + 2}</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="font-medium">Staking Period</div>
              <div>{territory.level * 3} days</div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setUpgradeModalOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-red-600 hover:bg-red-700">Confirm Upgrade</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Rename Modal */}
      <Dialog open={renameModalOpen} onOpenChange={setRenameModalOpen}>
        <DialogContent className="bg-zinc-900 border-zinc-800">
          <DialogHeader>
            <DialogTitle>Rename Territory</DialogTitle>
            <DialogDescription>Give your territory a new name to reflect your domain.</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div>
              <label htmlFor="territory-name" className="block text-sm font-medium text-zinc-400 mb-2">
                Territory Name
              </label>
              <input
                id="territory-name"
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder={territory.name}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setRenameModalOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={() => {
                // In a real app, we would update the territory name here
                setRenameModalOpen(false)
                setNewName("")
              }}
            >
              Save Name
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
