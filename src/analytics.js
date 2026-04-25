const telemetryBuckets = [
  { label: "checkout", samples: [18, 22, 24, 29, 31, 37, 41, 43] },
  { label: "catalog", samples: [42, 45, 48, 52, 58, 61, 67, 72] },
  { label: "settings", samples: [9, 11, 12, 13, 15, 16, 18, 20] },
]

export const dashboardCopy = {
  title: "Chunk Scope PR smoke dashboard",
  empty: "No staged telemetry is available",
  loaded: "Telemetry buckets loaded",
}

export function summarizeTelemetry() {
  const total = telemetryBuckets.reduce((sum, bucket) => {
    return sum + bucket.samples.reduce((bucketSum, sample) => bucketSum + sample, 0)
  }, 0)

  return `${dashboardCopy.loaded}: ${total}`
}
