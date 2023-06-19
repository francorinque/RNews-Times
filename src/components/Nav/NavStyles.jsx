import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"
import { css, styled } from "styled-components"

export const NavWrapperStyled = styled.div`
  min-width: 250px;
  height: var(--h-header);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  transition: ease 1s;
  background: ${({ theme, $isOpenMenu, $scrolled }) =>
    $scrolled || $isOpenMenu ? theme.bgHeader : "none"};
`

export const NavStyled = styled.nav`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 12px;
  position: relative;
`

export const NavMenuMobileStyled = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: calc(var(--h-header) + 10px);
  right: 10px;
  z-index: 99;
  border-radius: var(--radius);
  padding: 20px;
  min-width: 120px;
  background: ${({ theme }) => theme.bgHeader};

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
    flex: 1;
    justify-content: flex-start;
  }
`

export const LinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.textHeader};

  &.active {
    color: var(--clr-secundary-50);
  }

  &:hover {
    color: var(--clr-secundary-50);
    outline-color: var(--clr-secundary-50);
  }

  @media (min-width: 768px) {
    color: ${({ theme }) => theme.text};
  }
`

const resetButton = styled.div`
  button {
    border: none;
    background: none;
    cursor: pointer;

    svg {
      color: ${({ theme }) => theme.textHeader};
    }
  }
`

export const ToggleWrapperStyled = styled(resetButton)`
  @media (min-width: 768px) {
    display: none;
  }
`

export const ThemeWrapperStyled = styled(resetButton)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    right: 0;
    left: unset;
  }
`
