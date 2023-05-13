import { styled } from "styled-components"
import { ButtonGlobalStyled } from "../styles/GlobalComponents"

export const NewsCardsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-content: flex-start;
  justify-content: flex-start;
`

export const NewsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const NewsPaginationStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`

export const PaginationButtonStyled = styled(ButtonGlobalStyled)`
  &:disabled {
    cursor: not-allowed;
    opacity: 40%;
  }
`

export const WrapperLoader = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-content: center;
`
