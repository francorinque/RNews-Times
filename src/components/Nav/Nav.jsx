import { NavStyled, NavWrapperStyled, ToggleWrapperStyled } from "./NavStyles"
//icons
import { Cancel, MenuScale } from "iconoir-react"
//components
import { Logo } from "../UI"
import NavMenu from "./NavMenu"
//others
import { useContext, useEffect, useState } from "react"
import { MenuContext } from "../../context/menuContext"

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const { isOpenMenu, setIsOpenMenu } = useContext(MenuContext)

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
        <Logo size="30" />

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
