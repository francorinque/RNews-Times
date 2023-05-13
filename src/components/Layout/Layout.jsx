import { useEffect } from "react"
import { LayoutStyled } from "./LayoutStyles"
import { useLocation } from "react-router-dom"

const Layout = ({ children }) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return <LayoutStyled>{children}</LayoutStyled>
}
export default Layout
