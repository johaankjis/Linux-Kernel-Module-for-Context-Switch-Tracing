import { Activity, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold">Kernel Tracer</h1>
          </div>
          <div className="h-6 w-px bg-border" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span>Live Tracing</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Select defaultValue="1m">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30s">Last 30s</SelectItem>
              <SelectItem value="1m">Last 1m</SelectItem>
              <SelectItem value="5m">Last 5m</SelectItem>
              <SelectItem value="15m">Last 15m</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm">
            <Database className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
    </header>
  )
}
