import {
  NavWrapperStyled,
  NavStyled,
  ToggleWrapperStyled,
  ThemeWrapperStyled
} from "./NavStyles"
//icons
import {
  SunLight,
  MenuScale,
  Cancel,
  HalfMoon,
  MouseButtonLeft
} from "iconoir-react"
//components
import { Logo } from "../UI"
import NavMenu from "./NavMenu"
//others
import { useSelector, useDispatch } from "react-redux"
import { toggleTheme } from "../../store/theme/theme.slice"
import { useState, useEffect, useContext } from "react"
import { MenuContext } from "../../context/menuContext"

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const { isOpenMenu, setIsOpenMenu } = useContext(MenuContext)
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme.theme)
  let isDarkTheme = theme === "dark"

  function handleScroll() {
    let scroll = window.scrollY
    if (scroll > 5) setScrolled(true)
    else setScrolled(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <NavWrapperStyled $scrolled={scrolled} $isOpenMenu={isOpenMenu}>
      <NavStyled>
        <Logo width="70" />

        <ThemeWrapperStyled $isOpenMenu={isOpenMenu}>
          <button onClick={() => dispatch(toggleTheme())}>
            {isDarkTheme ? <SunLight /> : <HalfMoon />}
          </button>
        </ThemeWrapperStyled>

        <ToggleWrapperStyled $isOpenMenu={isOpenMenu}>
          <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
            {isOpenMenu ? <Cancel /> : <MenuScale />}
          </button>
        </ToggleWrapperStyled>

        <NavMenu />
      </NavStyled>
    </NavWrapperStyled>
  )
}
export default Nav
