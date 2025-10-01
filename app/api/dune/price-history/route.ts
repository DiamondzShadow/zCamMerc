import { NextResponse } from "next/server"
import { getDuneService } from "@/lib/dune-analytics"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const contractAddress = searchParams.get("contract")
    const days = Number.parseInt(searchParams.get("days") || "30")

    if (!contractAddress) {
      return NextResponse.json({ error: "Contract address is required" }, { status: 400 })
    }

    const duneService = getDuneService()
    const priceHistory = await duneService.getPriceHistory(contractAddress, days)

    return NextResponse.json(priceHistory)
  } catch (error) {
    console.error("Error fetching price history:", error)
    return NextResponse.json({ error: "Failed to fetch price history" }, { status: 500 })
  }
}
