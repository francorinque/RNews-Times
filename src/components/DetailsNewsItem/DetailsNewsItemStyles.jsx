import styled from "styled-components"

export const DetailsNewsItemStyled = styled.div`
  width: 100%;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 30px;

  img {
    height: 500px;
    object-fit: cover;
  }
`

export const TitleStyled = styled.h3`
  color: var(--clr-secundary-50);
  font-size: clamp(30px, 3vw, 40px);
`

export const ParagraphStyled = styled.p`
  /* margin: 0 auto; */
`

export const ByStyled = styled.span`
  font-size: 12px;
`
