import { missions } from "@/data/missions"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Unlock } from "lucide-react"
import Link from "next/link"

export default function MissionList() {
  return (
    <div className="space-y-12">
      {missions.map((mission) => (
        <Card key={mission.id} className="bg-zinc-900 border-zinc-800 overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 md:h-auto md:col-span-1">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${mission.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 md:hidden" />
            </div>
            <div className="p-6 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-red-900 hover:bg-red-800">Mission {mission.id}</Badge>
                <Badge variant="outline" className="border-zinc-700">
                  {mission.location}
                </Badge>
              </div>
              <h3 className="text-2xl font-bold mb-3">{mission.title}</h3>
              <p className="text-zinc-300 mb-6">{mission.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-500 mb-2">OBJECTIVES</h4>
                <ul className="space-y-2">
                  {mission.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2 text-zinc-400">
                      <span className="text-red-500 text-xl leading-none">•</span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-zinc-500 mb-2 flex items-center gap-2">
                  <Unlock className="h-4 w-4 text-red-500" /> UNLOCKS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {mission.unlocks.map((unlock, index) => (
                    <Badge key={index} variant="secondary" className="bg-zinc-800">
                      {unlock}
                    </Badge>
                  ))}
                </div>
              </div>

              <Link href={`/simulator?mission=${mission.id}`}>
                <Button className="bg-red-600 hover:bg-red-700">Start Mission</Button>
              </Link>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
