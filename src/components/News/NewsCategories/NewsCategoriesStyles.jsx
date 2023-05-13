import { styled, css } from "styled-components"
import { ButtonGlobalStyled } from "../../styles/GlobalComponents"

export const NewsCategoriesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const CategoryStyled = styled(ButtonGlobalStyled)`
  ${({ selected }) =>
    selected &&
    css`
      color: var(--clr-secundary-50);
      outline-color: var(--clr-secundary-50);
    `}
`
