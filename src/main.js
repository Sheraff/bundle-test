import "./style.css"
import { dashboardCopy, recommendationSummary, summarizeTelemetry } from "./analytics.js"

document.querySelector("#app").textContent = `${dashboardCopy.title}: ${summarizeTelemetry()}`

console.log(recommendationSummary())
