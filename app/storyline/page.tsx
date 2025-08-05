import type { Metadata } from "next"
import ExpandedStoryline from "@/components/expanded-storyline"

export const metadata: Metadata = {
  title: "Complete Storyline | Scam Mercenaires",
  description: "Discover the full saga of the Scam Mercenaires universe.",
}

export default function StorylinePage() {
  return (
    <div>
      <ExpandedStoryline />
    </div>
  )
}
