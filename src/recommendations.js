const recommendationRules = [
  ["preload", "surface routes that users revisit during the same session"],
  ["defer", "keep rarely visited reports out of the first interaction"],
  ["split", "isolate feature previews from core navigation"],
  ["inline", "keep tiny copy-only helpers near the caller"],
]

export function recommendationSummary() {
  return recommendationRules
    .map(([kind, description], index) => `${index + 1}. ${kind}: ${description}`)
    .join(" | ")
}
