"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { characters } from "@/data/characters"
import { useLocalStorage } from "@/hooks/use-local-storage"
import type { Character, Skill } from "@/types/character"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Footprints,
  Swords,
  Users,
  BadgeIcon,
  Mountain,
  Microscope,
  FingerprintIcon as Fist,
  UserCheck,
  Bitcoin,
  Terminal,
  UserCog,
  Eye,
  PenToolIcon as Tool,
  Radio,
  Wrench,
  Brain,
  Cpu,
  GitBranch,
  TrendingUp,
  Target,
  Globe,
  Crosshair,
  Plus,
  AlertCircle,
} from "lucide-react"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

// Map skill icon names to Lucide icons
const getSkillIcon = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    code: <Code className="h-5 w-5" />,
    footprints: <Footprints className="h-5 w-5" />,
    swords: <Swords className="h-5 w-5" />,
    users: <Users className="h-5 w-5" />,
    badge: <BadgeIcon className="h-5 w-5" />,
    mountain: <Mountain className="h-5 w-5" />,
    microscope: <Microscope className="h-5 w-5" />,
    fist: <Fist className="h-5 w-5" />,
    "user-check": <UserCheck className="h-5 w-5" />,
    bitcoin: <Bitcoin className="h-5 w-5" />,
    terminal: <Terminal className="h-5 w-5" />,
    "user-cog": <UserCog className="h-5 w-5" />,
    eye: <Eye className="h-5 w-5" />,
    tool: <Tool className="h-5 w-5" />,
    radio: <Radio className="h-5 w-5" />,
    wrench: <Wrench className="h-5 w-5" />,
    brain: <Brain className="h-5 w-5" />,
    cpu: <Cpu className="h-5 w-5" />,
    "git-branch": <GitBranch className="h-5 w-5" />,
    "trending-up": <TrendingUp className="h-5 w-5" />,
    target: <Target className="h-5 w-5" />,
    globe: <Globe className="h-5 w-5" />,
    crosshair: <Crosshair className="h-5 w-5" />,
  }

  return icons[iconName] || <AlertCircle className="h-5 w-5" />
}

// Calculate XP needed for next level
const getXpForNextLevel = (level: number) => {
  return level * 1000
}

export default function CharacterProgressionView() {
  // Get characters from local storage or use default data
  const [savedCharacters, setSavedCharacters] = useLocalStorage<Character[]>("characters", characters)

  const [selectedCharacterId, setSelectedCharacterId] = useState<string>(savedCharacters[0]?.id || "")
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null)
  const [skillUpgradeOpen, setSkillUpgradeOpen] = useState(false)
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [xpToAdd, setXpToAdd] = useState(0)

  // Set the selected character when the ID changes
  useEffect(() => {
    const character = savedCharacters.find((c) => c.id === selectedCharacterId) || null
    setSelectedCharacter(character)
  }, [selectedCharacterId, savedCharacters])

  // Function to upgrade a skill
  const upgradeSkill = (skillId: string) => {
    if (!selectedCharacter) return

    const skill = selectedCharacter.skills.find((s) => s.id === skillId)
    if (!skill) return

    setSelectedSkill(skill)
    setSkillUpgradeOpen(true)
  }

  // Function to confirm skill upgrade
  const confirmUpgrade = () => {
    if (!selectedCharacter || !selectedSkill) return

    // Create a copy of the characters array
    const updatedCharacters = [...savedCharacters]

    // Find the character to update
    const characterIndex = updatedCharacters.findIndex((c) => c.id === selectedCharacter.id)
    if (characterIndex === -1) return

    // Create a copy of the character
    const updatedCharacter = { ...updatedCharacters[characterIndex] }

    // Find the skill to update
    const skillIndex = updatedCharacter.skills.findIndex((s) => s.id === selectedSkill.id)
    if (skillIndex === -1) return

    // Check if the character has enough skill points
    if (updatedCharacter.skillPoints <= 0) return

    // Create a copy of the skills array
    const updatedSkills = [...updatedCharacter.skills]

    // Create a copy of the skill
    const updatedSkill = { ...updatedSkills[skillIndex] }

    // Check if the skill is already at max level
    if (updatedSkill.level >= updatedSkill.maxLevel) return

    // Upgrade the skill
    updatedSkill.level += 1
    updatedSkills[skillIndex] = updatedSkill

    // Update the character
    updatedCharacter.skills = updatedSkills
    updatedCharacter.skillPoints -= 1

    // Update the characters array
    updatedCharacters[characterIndex] = updatedCharacter

    // Save to local storage
    setSavedCharacters(updatedCharacters)

    // Close the dialog
    setSkillUpgradeOpen(false)
  }

  // Function to add XP to the selected character (for testing)
  const addXp = () => {
    if (!selectedCharacter) return

    // Create a copy of the characters array
    const updatedCharacters = [...savedCharacters]

    // Find the character to update
    const characterIndex = updatedCharacters.findIndex((c) => c.id === selectedCharacter.id)
    if (characterIndex === -1) return

    // Create a copy of the character
    const updatedCharacter = { ...updatedCharacters[characterIndex] }

    // Add XP
    updatedCharacter.xp += xpToAdd

    // Check if the character has leveled up
    const xpForNextLevel = getXpForNextLevel(updatedCharacter.level)
    if (updatedCharacter.xp >= xpForNextLevel) {
      updatedCharacter.level += 1
      updatedCharacter.xp -= xpForNextLevel
      updatedCharacter.skillPoints += 3 // Award 3 skill points per level
    }

    // Update the characters array
    updatedCharacters[characterIndex] = updatedCharacter

    // Save to local storage
    setSavedCharacters(updatedCharacters)
  }

  // Reset characters to default (for testing)
  const resetCharacters = () => {
    setSavedCharacters(characters)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Select Character</h2>
            <div className="space-y-3">
              {savedCharacters
                .filter((char) => char.faction === "hero")
                .map((character) => (
                  <Button
                    key={character.id}
                    variant={selectedCharacterId === character.id ? "default" : "outline"}
                    className={`w-full justify-start ${
                      selectedCharacterId === character.id ? "bg-red-600 hover:bg-red-700" : ""
                    }`}
                    onClick={() => setSelectedCharacterId(character.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="h-10 w-10 rounded-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${character.image})` }}
                      />
                      <div className="text-left">
                        <div>{character.name}</div>
                        <div className="text-xs text-zinc-400">Level {character.level}</div>
                      </div>
                    </div>
                  </Button>
                ))}
            </div>

            {/* XP Testing Controls (would be removed in production) */}
            <div className="mt-8 p-4 bg-zinc-800 rounded-lg">
              <h3 className="text-sm font-semibold mb-3">Testing Controls</h3>
              <div className="flex gap-2 mb-3">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setXpToAdd(100)}
                  className={xpToAdd === 100 ? "bg-zinc-700" : ""}
                >
                  +100 XP
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setXpToAdd(500)}
                  className={xpToAdd === 500 ? "bg-zinc-700" : ""}
                >
                  +500 XP
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setXpToAdd(1000)}
                  className={xpToAdd === 1000 ? "bg-zinc-700" : ""}
                >
                  +1000 XP
                </Button>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-red-600 hover:bg-red-700" onClick={addXp}>
                  Add XP
                </Button>
                <Button size="sm" variant="outline" onClick={resetCharacters}>
                  Reset All
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/simulator">
                <Button className="w-full bg-red-600 hover:bg-red-700">Start Mission to Earn XP</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-2">
        {selectedCharacter ? (
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="md:w-1/3">
                  <div
                    className="aspect-square rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${selectedCharacter.image})` }}
                  />
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-2">{selectedCharacter.name}</h2>
                  <p className="text-zinc-400 mb-4">{selectedCharacter.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-zinc-800 p-3 rounded-md">
                      <div className="text-sm text-zinc-500">Level</div>
                      <div className="text-2xl font-bold">{selectedCharacter.level}</div>
                    </div>
                    <div className="bg-zinc-800 p-3 rounded-md">
                      <div className="text-sm text-zinc-500">Skill Points</div>
                      <div className="text-2xl font-bold text-red-500">{selectedCharacter.skillPoints}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-zinc-500">XP Progress</span>
                      <span className="text-sm text-zinc-500">
                        {selectedCharacter.xp} / {getXpForNextLevel(selectedCharacter.level)}
                      </span>
                    </div>
                    <Progress
                      value={(selectedCharacter.xp / getXpForNextLevel(selectedCharacter.level)) * 100}
                      className="h-2 bg-zinc-800"
                      indicatorClassName="bg-red-600"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedCharacter.abilities.map((ability, index) => (
                      <Badge key={index} variant="outline" className="border-zinc-700">
                        {ability}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Tabs defaultValue="combat">
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="combat" className="data-[state=active]:bg-red-600">
                    Combat
                  </TabsTrigger>
                  <TabsTrigger value="hacking" className="data-[state=active]:bg-red-600">
                    Hacking
                  </TabsTrigger>
                  <TabsTrigger value="stealth" className="data-[state=active]:bg-red-600">
                    Stealth
                  </TabsTrigger>
                  <TabsTrigger value="social" className="data-[state=active]:bg-red-600">
                    Social
                  </TabsTrigger>
                </TabsList>

                {["combat", "hacking", "stealth", "social"].map((category) => (
                  <TabsContent key={category} value={category}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedCharacter.skills
                        .filter((skill) => skill.category === category)
                        .map((skill) => (
                          <Card key={skill.id} className="bg-zinc-800 border-zinc-700">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="h-10 w-10 rounded-full bg-zinc-700 flex items-center justify-center text-red-500">
                                  {getSkillIcon(skill.icon)}
                                </div>
                                <div>
                                  <h3 className="font-bold">{skill.name}</h3>
                                  <div className="text-xs text-zinc-400">
                                    Level {skill.level}/{skill.maxLevel}
                                  </div>
                                </div>
                              </div>

                              <p className="text-sm text-zinc-400 mb-3">{skill.description}</p>

                              <div className="flex items-center gap-2">
                                <Progress
                                  value={(skill.level / skill.maxLevel) * 100}
                                  className="h-2 flex-1 bg-zinc-700"
                                  indicatorClassName="bg-red-600"
                                />

                                <Button
                                  size="sm"
                                  className="bg-red-600 hover:bg-red-700"
                                  disabled={selectedCharacter.skillPoints <= 0 || skill.level >= skill.maxLevel}
                                  onClick={() => upgradeSkill(skill.id)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-6 text-center py-12">
              <p className="text-zinc-400">Select a character to view their progression.</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Skill Upgrade Dialog */}
      {selectedSkill && (
        <Dialog open={skillUpgradeOpen} onOpenChange={setSkillUpgradeOpen}>
          <DialogContent className="bg-zinc-900 border-zinc-800">
            <DialogHeader>
              <DialogTitle>Upgrade Skill</DialogTitle>
              <DialogDescription>
                Are you sure you want to upgrade {selectedSkill.name} to level {selectedSkill.level + 1}?
              </DialogDescription>
            </DialogHeader>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-zinc-800 flex items-center justify-center text-red-500">
                {getSkillIcon(selectedSkill.icon)}
              </div>
              <div>
                <h3 className="font-bold">{selectedSkill.name}</h3>
                <div className="text-sm text-zinc-400">
                  Level {selectedSkill.level} → {selectedSkill.level + 1}
                </div>
              </div>
            </div>

            <p className="text-zinc-300 mb-6">{selectedSkill.description}</p>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setSkillUpgradeOpen(false)}>
                Cancel
              </Button>
              <Button className="bg-red-600 hover:bg-red-700" onClick={confirmUpgrade}>
                Confirm Upgrade
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
