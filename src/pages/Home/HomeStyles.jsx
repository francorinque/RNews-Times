import { styled } from "styled-components"

export const HomeStyled = styled.section`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
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
