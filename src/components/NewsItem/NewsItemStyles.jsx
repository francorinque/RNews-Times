import styled from "styled-components"

export const NewsItemStyled = styled.div`
  flex: 1 0 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;

  a {
    color: ${({ theme }) => theme.text};
  }

  img {
    height: 400px;
  }
`

export const NewsItemTitleStyled = styled.h4`
  font-size: clamp(18px, 2vw, 20px);
  font-weight: var(--semibold);
`

export const NewsItemInfoStyled = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  & > * {
    font-size: 14px;
    font-weight: var(--regular);
  }
`
