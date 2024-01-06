import { styled, css } from "styled-components"
import { ButtonGlobalStyled } from "../../styles/GlobalComponents"

export const NewsCategoriesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;

  ${({ $loading }) =>
    $loading &&
    css`
      display: grid;
      place-items: center;
      padding: 50px 0;
    `}

  width: 100%;
`

export const CategoryStyled = styled(ButtonGlobalStyled)`
  ${({ $selected }) =>
    $selected &&
    css`
      color: var(--colorLinkActive);
      outline-color: var(--colorLinkActive);
    `}
`
