import styled from "styled-components"

export const DetailsNewsItemStyled = styled.div`
  width: 100%;

  img {
    height: 500px;
    margin-inline: auto;
    object-fit: cover;
    margin-bottom: 50px;
  }
`

export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
`

export const TitleStyled = styled.h3`
  font-size: clamp(30px, 3vw, 40px);
  text-wrap: balance;
  max-width: 800px;
`

export const ParagraphStyled = styled.p`
  max-width: 700px;

  line-height: 1.5;
  text-wrap: pretty;
`

export const ByStyled = styled.span`
  font-size: 12px;
`
