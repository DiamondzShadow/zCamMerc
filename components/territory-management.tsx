"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TerritoryMap from "@/components/territory-map"
import TerritoryDetails from "@/components/territory-details"
import TerritoryDefenses from "@/components/territory-defenses"
import TerritoryResources from "@/components/territory-resources"
import TerritoryConflicts from "@/components/territory-conflicts"
import TerritoryClaimModal from "@/components/territory-claim-modal"
import { Button } from "@/components/ui/button"
import { PlusCircle, Map, Shield, Coins, Swords, Building } from 'lucide-react'

export default function TerritoryManagement() {
  const [claimModalOpen, setClaimModalOpen] = useState(false)
  const [selectedTerritory, setSelectedTerritory] = useState<string | null>(null)

  const handleTerritorySelect = (territoryId: string) => {
    setSelectedTerritory(territoryId)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Territory & Hideout Management</h1>
          <p className="text-zinc-400">Claim territories, establish hideouts, and expand your digital domains</p>
        </div>
        <Button onClick={() => setClaimModalOpen(true)} className="bg-red-600 hover:bg-red-700">
          <PlusCircle className="mr-2 h-4 w-4" /> Claim New Territory
        </Button>
      </div>

      <Tabs defaultValue="map" className="w-full">
        <TabsList className="grid grid-cols-6 mb-8">
          <TabsTrigger value="map" className="data-[state=active]:bg-red-600">
            <Map className="mr-2 h-4 w-4" /> Map
          </TabsTrigger>
          <TabsTrigger value="details" className="data-[state=active]:bg-red-600">
            <Building className="mr-2 h-4 w-4" /> Details
          </TabsTrigger>
          <TabsTrigger value="defenses" className="data-[state=active]:bg-red-600">
            <Shield className="mr-2 h-4 w-4" /> Defenses
          </TabsTrigger>
          <TabsTrigger value="resources" className="data-[state=active]:bg-red-600">
            <Coins className="mr-2 h-4 w-4" /> Resources
          </TabsTrigger>
          <TabsTrigger value="conflicts" className="data-[state=active]:bg-red-600">
            <Swords className="mr-2 h-4 w-4" /> Conflicts
          </TabsTrigger>
          <TabsTrigger value="hideouts" className="data-[state=active]:bg-red-600">
            <PlusCircle className="mr-2 h-4 w-4" /> Hideouts
          </TabsTrigger>
        </TabsList>

        <TabsContent value="map">
          <TerritoryMap onTerritorySelect={handleTerritorySelect} selectedTerritory={selectedTerritory} />
        </TabsContent>

        <TabsContent value="details">
          <TerritoryDetails territoryId={selectedTerritory} />
        </TabsContent>

        <TabsContent value="defenses">
          <TerritoryDefenses territoryId={selectedTerritory} />
        </TabsContent>

        <TabsContent value="resources">
          <TerritoryResources territoryId={selectedTerritory} />
        </TabsContent>

        <TabsContent value="conflicts">
          <TerritoryConflicts territoryId={selectedTerritory} />
        </TabsContent>

        <TabsContent value="hideouts">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tactical Hideouts */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-red-500">Tactical Hideouts</h3>
              <div className="space-y-4">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <img src="/territories/dust-skirm-zone-lv2.jpg" alt="Dust Skirmish Zone" className="w-full h-32 object-cover rounded mb-3" />
                  <h4 className="font-bold">Dust Skirmish Zones</h4>
                  <p className="text-sm text-zinc-400 mb-2">Wasteland combat training facilities</p>
                  <div className="flex justify-between text-xs">
                    <span>Level 2-4</span>
                    <span className="text-red-400">Combat Training</span>
                  </div>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <img src="/territories/ghost-alley.png" alt="Ghost Alley" className="w-full h-32 object-cover rounded mb-3" />
                  <h4 className="font-bold">Ghost Alley</h4>
                  <p className="text-sm text-zinc-400 mb-2">Stealth operations base</p>
                  <div className="flex justify-between text-xs">
                    <span>Level 3</span>
                    <span className="text-purple-400">Stealth Ops</span>
                  </div>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <img src="/territories/signal-bunker-lv1.png" alt="Signal Bunker" className="w-full h-32 object-cover rounded mb-3" />
                  <h4 className="font-bold">Signal Bunkers</h4>
                  <p className="text-sm text-zinc-400 mb-2">Intelligence gathering facilities</p>
                  <div className="flex justify-between text-xs">
                    <span>Level 1-2</span>
                    <span className="text-blue-400">Intelligence</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Command Centers */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-amber-500">Command Centers</h3>
              <div className="space-y-4">
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <img src="/territories/noir-overpass-dualit.png" alt="Noir Overpass" className="w-full h-32 object-cover rounded mb-3" />
                  <h4 className="font-bold">Noir Overpass</h4>
                  <p className="text-sm text-zinc-400 mb-2">Strategic oversight facilities</p>
                  <div className="flex justify-between text-xs">
                    <span>Level 3-4</span>
                    <span className="text-amber-400">Command</span>
                  </div>
                </div>
                <div className="bg-zinc-800 p-4 rounded-lg">
                  <img src="/territories/redlink-hideout-lmec-lv8.png" alt="Redlink Command" className="w-full h-32 object-cover rounded mb-3" />
                  <h4 className="font-bold">Redlink Command</h4>
                  <p className="text-sm text-zinc-400 mb-2">Ultimate reality manipulation center</p>
                  <div className="flex justify-between text-xs">
                    <span>Level 8</span>
                    <span className="text-red-400">Reality Hack</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hideout Abilities */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-green-500">Special Abilities</h3>
              <div className="space-y-3">
                <div className="bg-zinc-800 p-3 rounded">
                  <h4 className="font-bold text-red-400">Combat Training</h4>
                  <p className="text-xs text-zinc-400">Increase mercenary combat effectiveness</p>
                </div>
                <div className="bg-zinc-800 p-3 rounded">
                  <h4 className="font-bold text-purple-400">Stealth Operations</h4>
                  <p className="text-xs text-zinc-400">Enable covert mission capabilities</p>
                </div>
                <div className="bg-zinc-800 p-3 rounded">
                  <h4 className="font-bold text-blue-400">Signal Intelligence</h4>
                  <p className="text-xs text-zinc-400">Intercept enemy communications</p>
                </div>
                <div className="bg-zinc-800 p-3 rounded">
                  <h4 className="font-bold text-amber-400">Strategic Command</h4>
                  <p className="text-xs text-zinc-400">Coordinate multi-territory operations</p>
                </div>
                <div className="bg-zinc-800 p-3 rounded">
                  <h4 className="font-bold text-red-400">Reality Manipulation</h4>
                  <p className="text-xs text-zinc-400">Alter digital reality parameters</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <TerritoryClaimModal open={claimModalOpen} onClose={() => setClaimModalOpen(false)} />
    </div>
  )
}
