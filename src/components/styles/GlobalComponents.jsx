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
