interface DuneCollectionStats {
  floorPrice: number
  volume24h: number
  volumeTotal: number
  holders: number
  totalSupply: number
  marketCap: number
  averagePrice: number
  salesCount24h: number
}

interface DuneTokenData {
  tokenId: string
  owner: string
  lastSalePrice: number
  lastSaleDate: string
  attributes: Record<string, string>
}

export class DuneAnalyticsService {
  private apiKey: string
  private baseUrl = "https://api.dune.com/api/v1"

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async getCollectionStats(contractAddress: string): Promise<DuneCollectionStats> {
    try {
      const response = await fetch(`${this.baseUrl}/query/execute`, {
        method: "POST",
        headers: {
          "X-Dune-API-Key": this.apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query_parameters: {
            contract_address: contractAddress,
          },
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch collection stats")
      }

      const data = await response.json()
      return this.parseCollectionStats(data)
    } catch (error) {
      console.error("Error fetching Dune collection stats:", error)
      throw error
    }
  }

  async getTokenOwnership(contractAddress: string, tokenId: string): Promise<DuneTokenData> {
    try {
      const response = await fetch(`${this.baseUrl}/query/execute`, {
        method: "POST",
        headers: {
          "X-Dune-API-Key": this.apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query_parameters: {
            contract_address: contractAddress,
            token_id: tokenId,
          },
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch token data")
      }

      const data = await response.json()
      return this.parseTokenData(data)
    } catch (error) {
      console.error("Error fetching token data:", error)
      throw error
    }
  }

  async getPriceHistory(contractAddress: string, days = 30): Promise<Array<{ date: string; price: number }>> {
    try {
      const response = await fetch(`${this.baseUrl}/query/execute`, {
        method: "POST",
        headers: {
          "X-Dune-API-Key": this.apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query_parameters: {
            contract_address: contractAddress,
            days: days,
          },
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch price history")
      }

      const data = await response.json()
      return this.parsePriceHistory(data)
    } catch (error) {
      console.error("Error fetching price history:", error)
      throw error
    }
  }

  private parseCollectionStats(data: any): DuneCollectionStats {
    // Parse the Dune API response into our format
    const result = data.result?.rows?.[0] || {}
    return {
      floorPrice: result.floor_price || 0,
      volume24h: result.volume_24h || 0,
      volumeTotal: result.volume_total || 0,
      holders: result.unique_holders || 0,
      totalSupply: result.total_supply || 0,
      marketCap: result.market_cap || 0,
      averagePrice: result.avg_price || 0,
      salesCount24h: result.sales_24h || 0,
    }
  }

  private parseTokenData(data: any): DuneTokenData {
    const result = data.result?.rows?.[0] || {}
    return {
      tokenId: result.token_id || "",
      owner: result.owner || "",
      lastSalePrice: result.last_sale_price || 0,
      lastSaleDate: result.last_sale_date || "",
      attributes: result.attributes || {},
    }
  }

  private parsePriceHistory(data: any): Array<{ date: string; price: number }> {
    const rows = data.result?.rows || []
    return rows.map((row: any) => ({
      date: row.date,
      price: row.avg_price || 0,
    }))
  }
}

// Singleton instance
let duneService: DuneAnalyticsService | null = null

export function getDuneService(): DuneAnalyticsService {
  if (!duneService) {
    const apiKey = process.env.DUNE_API_KEY
    if (!apiKey) {
      throw new Error("DUNE_API_KEY environment variable is not set")
    }
    duneService = new DuneAnalyticsService(apiKey)
  }
  return duneService
}
