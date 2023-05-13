import {
  DetailsNewsItemStyled,
  TitleStyled,
  ParagraphStyled,
  ByStyled
} from "./DetailsNewsItemStyles"

const DetailsNewsItem = ({ data }) => {
  let { title, multimedia, byline, abstract } = data
  const image = multimedia ? multimedia[0].url : null
  return (
    <DetailsNewsItemStyled>
      <TitleStyled>{title}</TitleStyled>
      <img src={image} alt={title} />
      <ParagraphStyled>{abstract}</ParagraphStyled>
      <ByStyled>
        <strong>{byline}</strong>
      </ByStyled>
    </DetailsNewsItemStyled>
  )
}
export default DetailsNewsItem
