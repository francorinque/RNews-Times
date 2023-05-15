import styled from "styled-components"
import { Link } from "react-router-dom"

export const NewsItemWrapperStyled = styled(Link)`
  color: ${({ theme }) => theme.text};
  flex: 1 0 300px;
  min-height: 400px;
  cursor: pointer;
`

export const NewsItemStyled = styled.div`
  img {
    height: 350px;
  }
`

export const NewsItemContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const NewsItemTitleStyled = styled.div`
  text-align: start;
  h4 {
    font-size: clamp(16px, 2vw, 18px);
  }
`

export const NewsItemInfoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewsItemDateStyled = styled.span`
  font-size: 14px;
`
