"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Zap, Cpu, Shield, Eye, RotateCcw } from "lucide-react"
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
        setImageSrc("/neon-grid.png")
      } finally {
        setIsLoading(false)
      }
    }

    generateArt()
  }, [missionText])

  return (
    <div className="relative w-full h-48 md:h-64 bg-zinc-900 rounded-lg overflow-hidden mb-4">
      {isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
          <Loader2 className="h-8 w-8 animate-spin text-red-500" />
        </div>
      ) : (
        <img src={imageSrc || "/placeholder.svg"} alt="Mission visualization" className="w-full h-full object-cover" />
      )}
      <div className="absolute bottom-2 right-2">
        <span className="text-xs bg-black/70 text-white px-2 py-1 rounded">Mission Visual</span>
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

        // Advance chapter based on progress
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
        return <Eye className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0" />
      case 2:
        return <Shield className="h-4 w-4 md:h-5 md:w-5 text-purple-400 flex-shrink-0" />
      case 3:
        return <Cpu className="h-4 w-4 md:h-5 md:w-5 text-amber-400 flex-shrink-0" />
      case 4:
        return <Zap className="h-4 w-4 md:h-5 md:w-5 text-red-400 flex-shrink-0" />
      case 5:
        return <Zap className="h-4 w-4 md:h-5 md:w-5 text-emerald-400 flex-shrink-0" />
      default:
        return <Eye className="h-4 w-4 md:h-5 md:w-5 text-blue-400 flex-shrink-0" />
    }
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {/* Chapter Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div className="flex items-center gap-2 min-w-0">
          {getChapterIcon()}
          <h2 className="text-lg md:text-xl font-bold truncate">
            Chapter {chapter}: {chapterTitle}
          </h2>
        </div>
        <Button
          variant="outline"
          onClick={startMission}
          disabled={loading}
          className="w-full sm:w-auto bg-transparent flex-shrink-0"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset Mission
        </Button>
      </div>

      {/* Mission Art */}
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

      {/* Main Mission Card */}
      <Card className="bg-zinc-900 border-zinc-800">
        <CardContent className="p-4 md:p-6">
          {missionId && (
            <div className="mb-4 p-3 bg-zinc-800 rounded-lg">
              <h4 className="text-sm font-semibold text-zinc-400 mb-1">Mission ID</h4>
              <p className="text-zinc-300 font-mono text-sm break-all">{missionId}</p>
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <Loader2 className="h-8 w-8 animate-spin text-red-500" />
              <span className="text-zinc-400">Processing your decision...</span>
            </div>
          ) : (
            <>
              {/* Mission Text */}
              <div className="mb-6">
                <Textarea
                  readOnly
                  value={text}
                  className="bg-zinc-800 border-zinc-700 min-h-[150px] md:min-h-[200px] resize-none text-base md:text-lg leading-relaxed"
                />
              </div>

              {/* Choice Buttons */}
              <div className="grid grid-cols-1 gap-3">
                {choices.map((choice, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Button
                      className="w-full bg-red-600 hover:bg-red-700 min-h-[60px] p-4 text-left justify-start text-sm md:text-base whitespace-normal leading-relaxed"
                      onClick={() => handleChoice(choice)}
                    >
                      <span className="block w-full text-left break-words">{choice}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Mission History */}
      {history.length > 0 && (
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-4 md:p-6">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Cpu className="h-5 w-5 text-amber-400 flex-shrink-0" />
              Mission Log
            </h3>
            <div className="max-h-[200px] md:max-h-[300px] overflow-y-auto space-y-3 pr-2">
              {history.map((entry, index) => (
                <div
                  key={index}
                  className={`text-sm p-3 rounded-lg break-words ${
                    index % 2 === 0
                      ? "bg-amber-900/20 text-amber-300 border-l-2 border-amber-400"
                      : "bg-zinc-800 text-zinc-300"
                  }`}
                >
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
