import type { Metadata } from "next"
import TerritoryManagement from "@/components/territory-management"

export const metadata: Metadata = {
  title: "Territory Management | Scam Mercenaires",
  description: "Claim, defend, and expand your digital domains in the fight against the Limptin Foundation.",
}

export default function TerritoryManagementPage() {
  return (
    <div>
      <TerritoryManagement />
    </div>
  )
}
