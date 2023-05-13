import styled from "styled-components"
import { motion } from "framer-motion"

export const ButtonGlobalStyled = styled(motion.button)`
  border: none;
  user-select: none;
  padding: 10px;
  border-radius: var(--radius);
  background: none;
  outline: 2px solid var(--clr-primary-200);
  cursor: pointer;
  font-weight: var(--semibold);
  color: ${({ theme }) => theme.text};

  &:hover {
    color: var(--clr-secundary-50);
    outline-color: var(--clr-secundary-50);
  }
`
