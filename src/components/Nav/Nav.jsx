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
import { useState, useEffect } from "react"

const Nav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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
    <NavWrapperStyled scrolled={scrolled.toString()}>
      <NavStyled>
        <Logo width="70" />

        <ThemeWrapperStyled>
          <button onClick={() => dispatch(toggleTheme())}>
            {isDarkTheme ? <SunLight /> : <HalfMoon />}
          </button>
        </ThemeWrapperStyled>

        <ToggleWrapperStyled>
          <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
            {isOpenMenu ? <Cancel /> : <MenuScale />}
          </button>
        </ToggleWrapperStyled>

        <NavMenu isOpenMenu={isOpenMenu} />
      </NavStyled>
    </NavWrapperStyled>
  )
}
export default Nav
