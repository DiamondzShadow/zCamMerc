"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Activity, BarChart3 } from "lucide-react"

interface CollectionStats {
  floorPrice: number
  volume24h: number
  volumeTotal: number
  holders: number
  totalSupply: number
  marketCap: number
  averagePrice: number
  salesCount24h: number
}

interface PriceDataPoint {
  date: string
  price: number
}

interface NFTAnalyticsDashboardProps {
  contractAddress: string
  collectionName: string
}

export default function NFTAnalyticsDashboard({ contractAddress, collectionName }: NFTAnalyticsDashboardProps) {
  const [stats, setStats] = useState<CollectionStats | null>(null)
  const [priceHistory, setPriceHistory] = useState<PriceDataPoint[]>([])
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState<7 | 30 | 90>(30)

  useEffect(() => {
    fetchAnalytics()
  }, [contractAddress, timeRange])

  const fetchAnalytics = async () => {
    setLoading(true)
    try {
      // Fetch collection stats
      const statsResponse = await fetch(`/api/dune/collection-stats?contract=${contractAddress}`)
      if (statsResponse.ok) {
        const statsData = await statsResponse.json()
        setStats(statsData)
      }

      // Fetch price history
      const priceResponse = await fetch(`/api/dune/price-history?contract=${contractAddress}&days=${timeRange}`)
      if (priceResponse.ok) {
        const priceData = await priceResponse.json()
        setPriceHistory(priceData)
      }
    } catch (error) {
      console.error("Error fetching analytics:", error)
    } finally {
      setLoading(false)
    }
  }

  const formatETH = (value: number) => {
    return `${value.toFixed(4)} ETH`
  }

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US").format(value)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-cyan-400 text-lg">Loading analytics from Dune...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">{collectionName} Analytics</h2>
          <p className="text-zinc-400 mt-1">Powered by Dune Analytics</p>
        </div>
        <img src="/images/design-mode/DuneLogoCircle.svg" alt="Dune Analytics" className="h-12 w-12" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-zinc-900 border-cyan-500/30">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-400">Floor Price</CardTitle>
            <DollarSign className="h-4 w-4 text-cyan-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats ? formatETH(stats.floorPrice) : "—"}</div>
            <p className="text-xs text-zinc-500 mt-1">Current floor price</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-purple-500/30">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-400">24h Volume</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats ? formatETH(stats.volume24h) : "—"}</div>
            <p className="text-xs text-zinc-500 mt-1">{stats?.salesCount24h || 0} sales</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-orange-500/30">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-400">Total Holders</CardTitle>
            <Users className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats ? formatNumber(stats.holders) : "—"}</div>
            <p className="text-xs text-zinc-500 mt-1">Unique owners</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-green-500/30">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-zinc-400">Market Cap</CardTitle>
            <Activity className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{stats ? formatETH(stats.marketCap) : "—"}</div>
            <p className="text-xs text-zinc-500 mt-1">Total value</p>
          </CardContent>
        </Card>
      </div>

      {/* Price History Chart */}
      <Card className="bg-zinc-900 border-zinc-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white">Price History</CardTitle>
              <CardDescription>Average sale price over time</CardDescription>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setTimeRange(7)}
                className={`px-3 py-1 rounded text-sm ${
                  timeRange === 7 ? "bg-cyan-600 text-white" : "bg-zinc-800 text-zinc-400"
                }`}
              >
                7D
              </button>
              <button
                onClick={() => setTimeRange(30)}
                className={`px-3 py-1 rounded text-sm ${
                  timeRange === 30 ? "bg-cyan-600 text-white" : "bg-zinc-800 text-zinc-400"
                }`}
              >
                30D
              </button>
              <button
                onClick={() => setTimeRange(90)}
                className={`px-3 py-1 rounded text-sm ${
                  timeRange === 90 ? "bg-cyan-600 text-white" : "bg-zinc-800 text-zinc-400"
                }`}
              >
                90D
              </button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {priceHistory.length > 0 ? (
            <div className="h-[300px] flex items-end justify-between gap-1">
              {priceHistory.map((point, index) => {
                const maxPrice = Math.max(...priceHistory.map((p) => p.price))
                const height = (point.price / maxPrice) * 100
                return (
                  <div key={index} className="flex-1 flex flex-col items-center group">
                    <div
                      className="w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t transition-all group-hover:from-cyan-500 group-hover:to-cyan-300"
                      style={{ height: `${height}%`, minHeight: "4px" }}
                    />
                    <div className="opacity-0 group-hover:opacity-100 text-xs text-cyan-400 mt-2 absolute -translate-y-8">
                      {formatETH(point.price)}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="h-[300px] flex items-center justify-center text-zinc-500">
              <BarChart3 className="h-12 w-12 mb-4" />
              <p>No price history data available</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Additional Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-zinc-900 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white">Total Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-cyan-400">{stats ? formatETH(stats.volumeTotal) : "—"}</div>
            <p className="text-sm text-zinc-500 mt-2">All-time trading volume</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white">Average Price</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-400">{stats ? formatETH(stats.averagePrice) : "—"}</div>
            <p className="text-sm text-zinc-500 mt-2">Mean sale price</p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-white">Total Supply</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-400">{stats ? formatNumber(stats.totalSupply) : "—"}</div>
            <p className="text-sm text-zinc-500 mt-2">Total NFTs minted</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
