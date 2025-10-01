import NFTAnalyticsDashboard from "@/components/nft-analytics-dashboard"

export default function AnalyticsPage() {
  // Replace with your actual contract address for the LIONSMANE collection
  const CONTRACT_ADDRESS = "0x526808a5496f6F261886aA3c1a60665D3d7f109b" // Your NFT contract address

  return (
    <div className="container mx-auto px-4 py-8">
      <NFTAnalyticsDashboard
        contractAddress={CONTRACT_ADDRESS}
        collectionName="LIONSMANE x DIAMONDZ - Presidential Collection"
      />
    </div>
  )
}
