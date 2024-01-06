import styled from "styled-components"
import { motion } from "framer-motion"

export const ButtonGlobalStyled = styled(motion.button)`
  border: none;
  user-select: none;
  padding: 10px;
  border-radius: var(--radius);
  background: none;
  outline: 2px solid var(--colorOutline);
  cursor: pointer;
  font-weight: var(--semibold);

  &:hover {
    color: var(--colorLinkActive);
    outline-color: var(--colorLinkActive);
  }
`

export const WrapperGridStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 798px) {
    grid-template-columns: 3fr 1fr;
  }
`
