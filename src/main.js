import "./style.css"

document.querySelector("#app").textContent = "Chunk Scope real package-build smoke"

void import("./lazy.js").then(({ message }) => {
  console.log(message)
})
