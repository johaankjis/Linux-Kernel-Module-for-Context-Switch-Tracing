import type React from "react"
import { Card } from "@/components/ui/card"
import { Activity, Cpu, Clock, Zap } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  change: string
  icon: React.ReactNode
  trend: "up" | "down"
}

function MetricCard({ title, value, change, icon, trend }: MetricCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-semibold mt-2">{value}</p>
          <p className={`text-xs mt-2 ${trend === "up" ? "text-accent" : "text-chart-3"}`}>{change}</p>
        </div>
        <div className="text-muted-foreground">{icon}</div>
      </div>
    </Card>
  )
}

export function MetricsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Context Switches"
        value="24.5K"
        change="+12.3% from baseline"
        icon={<Activity className="h-5 w-5" />}
        trend="up"
      />
      <MetricCard
        title="Avg Latency"
        value="142μs"
        change="-8.2% improvement"
        icon={<Clock className="h-5 w-5" />}
        trend="down"
      />
      <MetricCard
        title="CPU Utilization"
        value="73.2%"
        change="+5.1% from baseline"
        icon={<Cpu className="h-5 w-5" />}
        trend="up"
      />
      <MetricCard
        title="Active Processes"
        value="342"
        change="+18 new processes"
        icon={<Zap className="h-5 w-5" />}
        trend="up"
      />
    </div>
  )
}
