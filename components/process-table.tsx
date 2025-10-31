"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { generateProcessStats } from "@/lib/mock-data"
import { useState } from "react"

export function ProcessTable() {
  const [search, setSearch] = useState("")
  const processes = generateProcessStats()

  const filteredProcesses = processes.filter(
    (proc) => proc.comm.toLowerCase().includes(search.toLowerCase()) || proc.pid.toString().includes(search),
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Top Processes</CardTitle>
            <CardDescription>Processes by context switch count</CardDescription>
          </div>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search processes..."
              className="pl-9"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>PID</TableHead>
              <TableHead>Process</TableHead>
              <TableHead className="text-right">Switches</TableHead>
              <TableHead className="text-right">CPU Time (ms)</TableHead>
              <TableHead className="text-right">Avg Latency (μs)</TableHead>
              <TableHead className="text-right">Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProcesses.map((proc) => (
              <TableRow key={proc.pid}>
                <TableCell className="font-mono text-sm">{proc.pid}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="font-mono">
                    {proc.comm}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-mono">{proc.switches.toLocaleString()}</TableCell>
                <TableCell className="text-right font-mono">{proc.cpuTime.toFixed(2)}</TableCell>
                <TableCell className="text-right font-mono">{proc.avgLatency.toFixed(2)}</TableCell>
                <TableCell className="text-right font-mono">{proc.priority}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
