import { GlobalStyles } from "./components/styles/GlobalStyles"

import Router from "./Router/Router"
//components
import { Footer, Nav } from "./components"
import { useSelector } from "react-redux"
import { HashRouter } from "react-router-dom"
import { Circle } from "./components/UI"

function App() {
  return (
    <>
      <HashRouter>
        <Circle />
        <Circle position="bottomleft" />
        <Nav />
        <Router />
        <Footer />
      </HashRouter>
      <GlobalStyles />
    </>
  )
}

export default App
