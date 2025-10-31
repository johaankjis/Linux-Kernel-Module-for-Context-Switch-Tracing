export interface ContextSwitchEvent {
  timestamp: number
  cpu: number
  prevPid: number
  prevComm: string
  prevPrio: number
  prevState: string
  nextPid: number
  nextComm: string
  nextPrio: number
  duration: number
}

export interface ProcessStats {
  pid: number
  comm: string
  switches: number
  cpuTime: number
  avgLatency: number
  priority: number
}

export interface CPUStats {
  cpu: number
  switches: number
  utilization: number
  idleTime: number
}

// Generate mock context switch events
export function generateContextSwitchEvents(count = 100): ContextSwitchEvent[] {
  const processes = [
    "systemd",
    "kworker",
    "chrome",
    "firefox",
    "code",
    "bash",
    "sshd",
    "nginx",
    "postgres",
    "docker",
    "node",
    "python3",
  ]

  const states = ["R", "S", "D", "Z", "T"]
  const events: ContextSwitchEvent[] = []
  let timestamp = Date.now() - 60000 // Start 1 minute ago

  for (let i = 0; i < count; i++) {
    timestamp += Math.random() * 100 + 10
    events.push({
      timestamp,
      cpu: Math.floor(Math.random() * 8),
      prevPid: Math.floor(Math.random() * 10000) + 1000,
      prevComm: processes[Math.floor(Math.random() * processes.length)],
      prevPrio: Math.floor(Math.random() * 40) + 100,
      prevState: states[Math.floor(Math.random() * states.length)],
      nextPid: Math.floor(Math.random() * 10000) + 1000,
      nextComm: processes[Math.floor(Math.random() * processes.length)],
      nextPrio: Math.floor(Math.random() * 40) + 100,
      duration: Math.random() * 5000 + 100,
    })
  }

  return events
}

// Generate process statistics
export function generateProcessStats(): ProcessStats[] {
  const processes = [
    { comm: "chrome", base: 5000 },
    { comm: "firefox", base: 4500 },
    { comm: "code", base: 3000 },
    { comm: "systemd", base: 2000 },
    { comm: "kworker", base: 1500 },
    { comm: "docker", base: 1200 },
    { comm: "postgres", base: 1000 },
    { comm: "nginx", base: 800 },
    { comm: "node", base: 600 },
    { comm: "python3", base: 500 },
  ]

  return processes.map((proc, idx) => ({
    pid: 1000 + idx * 100,
    comm: proc.comm,
    switches: proc.base + Math.floor(Math.random() * 1000),
    cpuTime: Math.random() * 10000 + 1000,
    avgLatency: Math.random() * 500 + 50,
    priority: Math.floor(Math.random() * 40) + 100,
  }))
}

// Generate CPU statistics
export function generateCPUStats(): CPUStats[] {
  return Array.from({ length: 8 }, (_, i) => ({
    cpu: i,
    switches: Math.floor(Math.random() * 5000) + 2000,
    utilization: Math.random() * 40 + 60,
    idleTime: Math.random() * 30 + 10,
  }))
}

// Generate time series data for charts
export function generateTimeSeriesData(points = 30) {
  const now = Date.now()
  return Array.from({ length: points }, (_, i) => ({
    time: now - (points - i) * 2000,
    switches: Math.floor(Math.random() * 500) + 200,
    latency: Math.random() * 200 + 50,
    cpuUsage: Math.random() * 30 + 60,
  }))
}
