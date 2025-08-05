"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, Cpu, Database, Network, Shield, Zap } from "lucide-react"

export default function NFTTransformationProcess() {
  const [stage, setStage] = useState(1)
  const [progress, setProgress] = useState(0)
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    if (isProcessing) {
      const timer = setTimeout(() => {
        if (progress < 100) {
          setProgress((prev) => prev + 1)
        } else {
          setIsProcessing(false)
          if (stage < 4) {
            setStage((prev) => prev + 1)
            setProgress(0)
          }
        }
      }, 50)

      return () => clearTimeout(timer)
    }
  }, [progress, isProcessing, stage])

  const startProcess = () => {
    setIsProcessing(true)
  }

  const resetProcess = () => {
    setStage(1)
    setProgress(0)
    setIsProcessing(false)
  }

  const stages = [
    {
      name: "Neural Mapping",
      description: "Scanning and digitizing neural pathways",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Digital Framework",
      description: "Building NFT structure and parameters",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Consciousness Transfer",
      description: "Integrating identity with digital structure",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500",
    },
    {
      name: "Network Integration",
      description: "Connecting to LIONSMANE network",
      icon: <Network className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">NFT Transformation Process</h3>

        <div className="space-y-6 mb-6">
          {stages.map((s, index) => (
            <div key={index} className={`${index + 1 !== stage && "opacity-50"}`}>
              <div className="flex items-center mb-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 bg-gradient-to-r ${s.color}`}
                >
                  {s.icon}
                </div>
                <div>
                  <h4 className="font-medium">{s.name}</h4>
                  <p className="text-sm text-zinc-400">{s.description}</p>
                </div>
              </div>

              {index + 1 === stage && (
                <div className="pl-12">
                  <Progress value={progress} className="h-2 mb-1" />
                  <div className="flex justify-between text-xs text-zinc-500">
                    <span>0%</span>
                    <span>{progress}%</span>
                    <span>100%</span>
                  </div>

                  {isProcessing && (
                    <div className="mt-2 text-xs text-zinc-400 font-mono">
                      {progress < 30 && "Initializing process..."}
                      {progress >= 30 && progress < 60 && "Processing neural data..."}
                      {progress >= 60 && progress < 90 && "Optimizing digital structure..."}
                      {progress >= 90 && "Finalizing transformation..."}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={resetProcess} disabled={isProcessing}>
            Reset
          </Button>

          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={startProcess}
            disabled={isProcessing || stage > 3}
          >
            {isProcessing ? (
              <>
                <motion.div
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                Processing...
              </>
            ) : stage > 3 ? (
              <>
                <Shield className="w-4 h-4 mr-2" />
                Transformation Complete
              </>
            ) : (
              <>
                <Zap className="w-4 h-4 mr-2" />
                Start {stages[stage - 1].name}
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
