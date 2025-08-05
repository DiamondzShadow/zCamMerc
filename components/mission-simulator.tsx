"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Zap, Cpu, Shield, Eye } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

// Create a separate component for the mission art
const MissionArt = ({ missionText }: { missionText: string }) => {
  const [imageSrc, setImageSrc] = useState<string>("/neon-grid.png")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const generateArt = async () => {
      if (!missionText) return

      setIsLoading(true)
      try {
        // Use a random static image instead of API call to avoid errors
        const images = [
          "/neon-grid.png",
          "/neon-cityscape.png",
          "/neon-grid-breach.png",
          "/neon-city-dreams.png",
          "/neural-connection.png",
        ]
        const randomImage = images[Math.floor(Math.random() * images.length)]
        setImageSrc(randomImage)
      } catch (error) {
        console.error("Error generating art:", error)
        // Fallback to a default image
        setImageSrc("/neon-grid.png")
      } finally {
        setIsLoading(false)
      }
    }

    generateArt()
  }, [missionText])

  return (
    <div className="relative w-full h-64 bg-zinc-900 rounded-lg overflow-hidden mb-6">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
          <Loader2 className="h-8 w-8 animate-spin text-red-500" />
        </div>
      ) : (
        <img src={imageSrc || "/placeholder.svg"} alt="Mission visualization" className="w-full h-full object-cover" />
      )}
      <div className="absolute bottom-2 right-2">
        <span className="text-xs bg-black/50 text-white px-2 py-1 rounded">Static Image</span>
      </div>
    </div>
  )
}

// Main component
export default function MissionSimulator() {
  const [text, setText] = useState("")
  const [choices, setChoices] = useState<string[]>([])
  const [history, setHistory] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [chapter, setChapter] = useState(1)
  const [chapterTitle, setChapterTitle] = useState("Approach")
  const router = useRouter()
  const searchParams = useSearchParams()
  const missionId = searchParams?.get("mission")

  useEffect(() => {
    startMission()
  }, [])

  const startMission = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/mission-simulator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "start" }),
      })

      const data = await response.json()

      if (data.step) {
        setText(data.step.text)
        setChoices(data.step.choices)
        setHistory([])
        setChapter(1)
        setChapterTitle("Approach")
      }
    } catch (error) {
      console.error("Error starting mission:", error)
      // Fallback content if API fails
      setText(
        "You approach the facility under cover of darkness. Security seems tight, but you've identified several potential entry points.",
      )
      setChoices(["Use the service entrance", "Climb to the roof", "Hack the security system", "Create a distraction"])
    } finally {
      setLoading(false)
    }
  }

  const handleChoice = async (choice: string) => {
    setLoading(true)
    setHistory([...history, `You chose: ${choice}`, text])
    try {
      const response = await fetch("/api/mission-simulator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "choice",
          choice: choice,
          history: history,
          chapter: chapter,
        }),
      })

      const data = await response.json()

      if (data.step) {
        setText(data.step.text)
        setChoices(data.step.choices)

        // Advance chapter based on progress (simplified logic)
        if (history.length > 5 && chapter === 1) {
          setChapter(2)
          setChapterTitle("Discovery")
        } else if (history.length > 10 && chapter === 2) {
          setChapter(3)
          setChapterTitle("Temporal Insights")
        } else if (history.length > 15 && chapter === 3) {
          setChapter(4)
          setChapterTitle("SCAM Revelations")
        } else if (history.length > 20 && chapter === 4) {
          setChapter(5)
          setChapterTitle("LIONSMANE Awakening")
        }
      }
    } catch (error) {
      console.error("Error making choice:", error)
      // Fallback content if API fails
      setText(
        "As you proceed with your chosen action, you encounter unexpected resistance. You'll need to adapt quickly.",
      )
      setChoices([
        "Fall back and reassess",
        "Push forward aggressively",
        "Find an alternative route",
        "Use your special equipment",
      ])
    } finally {
      setLoading(false)
    }
  }

  const getChapterIcon = () => {
    switch (chapter) {
      case 1:
        return <Eye className="h-5 w-5 text-blue-400" />
      case 2:
        return <Shield className="h-5 w-5 text-purple-400" />
      case 3:
        return <Cpu className="h-5 w-5 text-amber-400" />
      case 4:
        return <Zap className="h-5 w-5 text-red-400" />
      case 5:
        return <Zap className="h-5 w-5 text-emerald-400" />
      default:
        return <Eye className="h-5 w-5 text-blue-400" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {getChapterIcon()}
          <h2 className="text-xl font-bold">
            Chapter {chapter}: {chapterTitle}
          </h2>
        </div>

        <Button variant="outline" onClick={startMission} disabled={loading}>
          Reset Mission
        </Button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={text.substring(0, 20)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <MissionArt missionText={text} />
        </motion.div>
      </AnimatePresence>

      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-6">
          {missionId && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-zinc-500">Mission ID</h4>
              <p className="text-zinc-300">{missionId}</p>
            </div>
          )}
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="mr-2 h-6 w-6 animate-spin text-red-500" />
              <span>Processing your decision...</span>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <Textarea
                  readOnly
                  value={text}
                  className="bg-zinc-800 border-zinc-700 min-h-[200px] resize-none text-lg"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {choices.map((choice, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button
                      className="w-full bg-red-600 hover:bg-red-700 h-auto py-3 px-4 text-left justify-start"
                      onClick={() => handleChoice(choice)}
                    >
                      {choice}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {history.length > 0 && (
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4">Mission Narrative</h3>
            <div className="max-h-[200px] overflow-y-auto space-y-4 pr-2">
              {history.map((entry, index) => (
                <div key={index} className={`text-sm ${index % 2 === 0 ? "text-amber-400" : "text-zinc-400"}`}>
                  {entry}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
