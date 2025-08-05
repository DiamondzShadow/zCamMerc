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
import { PlusCircle, Map, Shield, Coins, Swords } from "lucide-react"

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
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Territory Management</h1>
          <p className="text-zinc-400">Claim, defend, and expand your digital domains</p>
        </div>
        <Button onClick={() => setClaimModalOpen(true)} className="bg-red-600 hover:bg-red-700">
          <PlusCircle className="mr-2 h-4 w-4" /> Claim New Territory
        </Button>
      </div>

      <Tabs defaultValue="map" className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="map" className="data-[state=active]:bg-red-600">
            <Map className="mr-2 h-4 w-4" /> Map
          </TabsTrigger>
          <TabsTrigger value="details" className="data-[state=active]:bg-red-600">
            <PlusCircle className="mr-2 h-4 w-4" /> Details
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
      </Tabs>

      <TerritoryClaimModal open={claimModalOpen} onClose={() => setClaimModalOpen(false)} />
    </div>
  )
}
