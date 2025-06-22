import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

// Wait for DOM to be ready and create root element if it doesn't exist
function initializeApp() {
  let rootElement = document.getElementById("root")

  // If root element doesn't exist, create it
  if (!rootElement) {
    rootElement = document.createElement("div")
    rootElement.id = "root"
    document.body.appendChild(rootElement)
  }

  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

// Ensure DOM is loaded before initializing
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp)
} else {
  initializeApp()
}
