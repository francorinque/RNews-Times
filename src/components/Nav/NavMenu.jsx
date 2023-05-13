import { AnimatePresence } from 'framer-motion'
import { NavMenuDesktopStyled, NavMenuMobileStyled } from './NavStyles'

import NavMenuLinks from './NavMenuLinks'

const NavMenu = ({ isOpenMenu }) => {
  return (
    <>
      {/* mobile */}
      <AnimatePresence>
        {isOpenMenu && (
          <NavMenuMobileStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: 'tween' }}
          >
            <NavMenuLinks />
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
