"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLocalStorage } from "@/hooks/use-local-storage"
import { territories } from "@/data/territories"
import { Shield, MapPin, Cpu, Building, MapIcon } from "lucide-react"

interface TerritoryClaimModalProps {
  open: boolean
  onClose: () => void
}

export default function TerritoryClaimModal({ open, onClose }: TerritoryClaimModalProps) {
  const [userTerritories, setUserTerritories] = useLocalStorage<string[]>("user-territories", [])
  const [selectedTerritory, setSelectedTerritory] = useState<string | null>(null)
  const [territoryName, setTerritoryName] = useState("")
  const [territoryType, setTerritoryType] = useState("Urban")
  const [step, setStep] = useState(1)

  const availableTerritories = territories.filter((t) => !t.ownerId && t.status === "available")
  const selectedTerritoryData = selectedTerritory ? territories.find((t) => t.id === selectedTerritory) : null

  const handleClaim = () => {
    if (selectedTerritory) {
      setUserTerritories([...userTerritories, selectedTerritory])
      setStep(1)
      setSelectedTerritory(null)
      setTerritoryName("")
      onClose()
    }
  }

  const handleClose = () => {
    setStep(1)
    setSelectedTerritory(null)
    setTerritoryName("")
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-zinc-900 border-zinc-800 max-w-2xl">
        <DialogHeader>
          <DialogTitle>Claim New Territory</DialogTitle>
          <DialogDescription>Expand your digital domain by claiming a new territory</DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <div className="py-4">
            <div className="mb-6">
              <h3 className="font-bold mb-2">Available Territories</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Select a territory to claim. Each territory offers different resources and strategic advantages.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2">
                {availableTerritories.map((territory) => (
                  <div
                    key={territory.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedTerritory === territory.id
                        ? "bg-red-900/30 border border-red-500"
                        : "bg-zinc-800 border border-zinc-700 hover:border-zinc-600"
                    }`}
                    onClick={() => setSelectedTerritory(territory.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">{territory.name}</h4>
                      <Badge variant="outline">Level {territory.level}</Badge>
                    </div>
                    <p className="text-xs text-zinc-400 mb-2">{territory.description}</p>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <MapPin className="h-3 w-3" /> {territory.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button className="bg-red-600 hover:bg-red-700" disabled={!selectedTerritory} onClick={() => setStep(2)}>
                Next
              </Button>
            </div>
          </div>
        )}

        {step === 2 && selectedTerritoryData && (
          <div className="py-4">
            <div className="mb-6">
              <h3 className="font-bold mb-2">Configure Your Territory</h3>
              <p className="text-sm text-zinc-400 mb-4">Customize your new territory before claiming it.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="mb-4">
                    <label htmlFor="territory-name" className="block text-sm font-medium text-zinc-400 mb-2">
                      Territory Name
                    </label>
                    <Input
                      id="territory-name"
                      value={territoryName}
                      onChange={(e) => setTerritoryName(e.target.value)}
                      placeholder={selectedTerritoryData.name}
                      className="bg-zinc-800 border-zinc-700"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="territory-type" className="block text-sm font-medium text-zinc-400 mb-2">
                      Territory Type
                    </label>
                    <Select value={territoryType} onValueChange={setTerritoryType}>
                      <SelectTrigger className="bg-zinc-800 border-zinc-700">
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-800 border-zinc-700">
                        <SelectItem value="Urban">
                          <div className="flex items-center gap-2">
                            <Building className="h-4 w-4" /> Urban
                          </div>
                        </SelectItem>
                        <SelectItem value="Digital">
                          <div className="flex items-center gap-2">
                            <Cpu className="h-4 w-4" /> Digital
                          </div>
                        </SelectItem>
                        <SelectItem value="Hybrid">
                          <div className="flex items-center gap-2">
                            <MapIcon className="h-4 w-4" /> Hybrid
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-zinc-400 mb-2">Resources</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedTerritoryData.resources.map((resource, index) => (
                        <Badge key={index} variant="secondary" className="bg-zinc-800">
                          {resource}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-3">Claiming Requirements</h4>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="text-sm">LIONSMANE NFTs Required</div>
                      <div className="text-sm font-bold">{selectedTerritoryData.level + 2}</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">Staking Period</div>
                      <div className="text-sm font-bold">{selectedTerritoryData.level * 3} days</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">Initial Defense Rating</div>
                      <div className="text-sm font-bold">{selectedTerritoryData.defenseRating}%</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">Maintenance Cost</div>
                      <div className="text-sm font-bold">
                        {(selectedTerritoryData.level * 100).toLocaleString()} Digital Currency/day
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-3">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button className="bg-red-600 hover:bg-red-700" onClick={handleClaim}>
                <Shield className="mr-2 h-4 w-4" /> Claim Territory
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
