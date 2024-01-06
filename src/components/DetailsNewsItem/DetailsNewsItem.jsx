import { Aside } from ".."
import { WrapperGridStyled } from "../styles/GlobalComponents"
import {
  DetailsNewsItemStyled,
  TitleStyled,
  ParagraphStyled,
  ByStyled,
  ContentStyled
} from "./DetailsNewsItemStyles"

const DetailsNewsItem = ({ data }) => {
  let { title, multimedia, byline, abstract } = data || {}
  const image = multimedia ? multimedia[0].url : null
  return (
    <WrapperGridStyled>
      <DetailsNewsItemStyled>
        <img src={image} alt={title} />
        <ContentStyled>
          <TitleStyled>{title}</TitleStyled>
          <ParagraphStyled>{abstract}</ParagraphStyled>
          <ByStyled>
            <strong>{byline}</strong>
          </ByStyled>
        </ContentStyled>
      </DetailsNewsItemStyled>
      <Aside />
    </WrapperGridStyled>
  )
}
export default DetailsNewsItem
