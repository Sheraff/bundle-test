export const dashboardCopy = {
  title: "Chunk Scope PR smoke dashboard",
  loaded: "Telemetry buckets loaded",
}

export function summarizeTelemetry() {
  return `${dashboardCopy.loaded}: 128`
}

export function recommendationSummary() {
  return "inline: keep the smoke fixture compact"
}
