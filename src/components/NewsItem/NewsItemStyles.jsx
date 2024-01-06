import styled from "styled-components"
import { Link } from "react-router-dom"

export const WrapperStyled = styled(Link)`
  flex: 1 0 300px;
  cursor: pointer;
  outline: 2px solid var(--colorOutline);
  border-radius: var(--radius);
  overflow: hidden;
  padding: 15px;
`

export const ItemStyled = styled.div`
  img {
    height: 350px;
    margin-bottom: 20px;
    border-radius: var(--radius);
  }
`

export const ContentStyled = styled.div``

export const TitleStyled = styled.div`
  text-align: start;
  h4 {
    font-size: clamp(18px, 2vw, 20px);
  }
`

export const InfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const DateStyled = styled.span`
  font-size: 14px;
  font-weight: var(--regular);
`
export const SectionStyled = styled.p`
  border-radius: var(--radius);
  font-weight: var(--semibold);
`
