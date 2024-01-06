import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { styled } from "styled-components"

export const NavWrapperStyled = styled.div`
  min-width: 250px;
  height: var(--h-header);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  transition: ease 1s;

  background: ${({ $isOpenMenu, $scrolled }) =>
    $isOpenMenu || $scrolled ? "var(--bgColorMenu)" : "transparent"};
`

export const NavStyled = styled.nav`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  position: relative;
`

export const NavMenuMobileStyled = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: calc(var(--h-header) + 5px);
  right: 0;
  z-index: 99;
  border-radius: var(--radius);
  padding: 20px;
  min-width: 200px;
  background-color: var(--bgColorMenu);
  box-shadow: var(--shadow);

  @media (min-width: 768px) {
    display: none;
  }
`

export const NavMenuDesktopStyled = styled.div`
  display: none;
  gap: 1rem;
  padding-left: 10px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`

export const LinkStyled = styled(NavLink)`
  font-weight: var(--semibold);
  &.active {
    color: var(--colorLinkActive);
  }

  &:hover {
    color: var(--colorLinkActive);
  }
`

const resetButton = styled.div`
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`

export const ToggleWrapperStyled = styled(resetButton)`
  @media (min-width: 768px) {
    display: none;
  }
`
