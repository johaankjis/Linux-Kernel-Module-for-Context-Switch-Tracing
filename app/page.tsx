import { DashboardHeader } from "@/components/dashboard-header"
import { MetricsOverview } from "@/components/metrics-overview"
import { ContextSwitchChart } from "@/components/context-switch-chart"
import { LatencyChart } from "@/components/latency-chart"
import { CPUUtilizationChart } from "@/components/cpu-utilization-chart"
import { ProcessTable } from "@/components/process-table"
import { EventTimeline } from "@/components/event-timeline"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto p-6 space-y-6">
        <MetricsOverview />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ContextSwitchChart />
          <LatencyChart />
        </div>

        <CPUUtilizationChart />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProcessTable />
          </div>
          <div>
            <EventTimeline />
          </div>
        </div>
      </main>
    </div>
  )
}
