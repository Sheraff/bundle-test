import "./style.css"
import { dashboardCopy, recommendationSummary, summarizeTelemetry } from "./analytics.js"

document.querySelector("#app").textContent = `${dashboardCopy.title}: ${summarizeTelemetry()}`

void import("./lazy.js").then(({ message }) => {
  console.log(message)
})

console.log(recommendationSummary())
