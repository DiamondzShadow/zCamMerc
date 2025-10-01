import { NextResponse } from "next/server"
import { getDuneService } from "@/lib/dune-analytics"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const contractAddress = searchParams.get("contract")

    if (!contractAddress) {
      return NextResponse.json({ error: "Contract address is required" }, { status: 400 })
    }

    const duneService = getDuneService()
    const stats = await duneService.getCollectionStats(contractAddress)

    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error fetching collection stats:", error)
    return NextResponse.json({ error: "Failed to fetch collection stats" }, { status: 500 })
  }
}
