import { AnimatePresence } from "framer-motion"
import { NavMenuDesktopStyled, NavMenuMobileStyled } from "./NavStyles"

import NavMenuLinks from "./NavMenuLinks"
import { useContext } from "react"
import { MenuContext } from "../../context/menuContext"

const NavMenu = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(MenuContext)

  return (
    <>
      {/* mobile */}
      <AnimatePresence>
        {isOpenMenu && (
          <NavMenuMobileStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: "tween" }}
          >
            <NavMenuLinks onClick={() => setIsOpenMenu(false)} />
          </NavMenuMobileStyled>
        )}
      </AnimatePresence>
      {/* desktop */}
      <NavMenuDesktopStyled>
        <NavMenuLinks />
      </NavMenuDesktopStyled>
    </>
  )
}
export default NavMenu
