import { styled } from "styled-components"

export const HomeStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-top: calc(var(--h-header) + 5px);
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
