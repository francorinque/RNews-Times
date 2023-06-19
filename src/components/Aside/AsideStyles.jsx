import styled from "styled-components"
import { ButtonGlobalStyled } from "../styles/GlobalComponents"

export const AsideStyled = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: start;
`

export const AsideTitleStyled = styled.h2`
  margin-top: 3rem;
`

export const WrapperSticky = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: sticky;
  top: var(--h-header);
`

export const AsideWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const AsideSectionStyled = styled(ButtonGlobalStyled)``
