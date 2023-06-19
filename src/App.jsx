import {
  GlobalStyles,
  darkTheme,
  lightTheme
} from "./components/styles/GlobalStyles"

import { ThemeProvider } from "styled-components"
import Router from "./Router/Router"
//components
import { Footer, Nav } from "./components"
import { useSelector } from "react-redux"
import { HashRouter } from "react-router-dom"
import { Circle } from "./components/UI"

function App() {
  const theme = useSelector(state => state.theme.theme)

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <HashRouter>
          <Circle />
          <Circle position="bottomleft" />
          <Nav />
          <Router />
          <Footer />
        </HashRouter>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App
