import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { FiltersProvider } from "./context/filtersContext.jsx"
import { MenuProvider } from "./context/menuContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <FiltersProvider>
    <MenuProvider>
      <App />
    </MenuProvider>
  </FiltersProvider>
  // </React.StrictMode>
)
