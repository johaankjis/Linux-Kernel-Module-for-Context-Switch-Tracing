"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { generateContextSwitchEvents } from "@/lib/mock-data"
import { ArrowRight } from "lucide-react"

export function EventTimeline() {
  const events = generateContextSwitchEvents(20)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Context Switches</CardTitle>
        <CardDescription>Live event stream</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-3">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card hover:bg-accent/5 transition-colors"
              >
                <div className="flex-shrink-0 w-16 text-xs text-muted-foreground font-mono">
                  {new Date(event.timestamp).toLocaleTimeString()}
                </div>

                <div className="flex-1 flex items-center gap-2 text-sm">
                  <Badge variant="secondary" className="font-mono">
                    CPU {event.cpu}
                  </Badge>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-muted-foreground">
                      {event.prevComm}:{event.prevPid}
                    </span>
                    <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    <span className="font-mono font-medium">
                      {event.nextComm}:{event.nextPid}
                    </span>
                  </div>

                  <Badge variant="outline" className="ml-auto font-mono text-xs">
                    {event.duration.toFixed(0)}μs
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
