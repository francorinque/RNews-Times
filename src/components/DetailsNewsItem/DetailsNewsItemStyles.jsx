import styled from "styled-components"

export const DetailsNewsItemStyled = styled.div`
  width: 100%;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;

  img {
    height: 500px;
    margin-inline: auto;
    object-fit: cover;
  }
`

export const TitleStyled = styled.h3`
  color: var(--clr-secundary-50);
  font-size: clamp(30px, 3vw, 40px);
  max-width: 800px;
  margin-inline: auto;
`

export const ParagraphStyled = styled.p`
  max-width: 700px;
  margin-inline: auto;
`

export const ByStyled = styled.span`
  font-size: 12px;
`
