//styles

import {
  ContentStyled,
  DateStyled,
  InfoStyled,
  ItemStyled,
  TitleStyled,
  WrapperStyled,
  FooterStyled,
  SectionStyled
} from "./NewsItemStyles"

import dayjs from "dayjs"
import { useLocation, useNavigate } from "react-router-dom"

const NewsItem = ({ title, section, multimedia, published_date }) => {
  const navigate = useNavigate()
  const location = useLocation()
  let image = multimedia ? multimedia[1].url : null

  return (
    <WrapperStyled to={`/details/${title}`} state={{ keyword: section }}>
      <ItemStyled>
        <ContentStyled>
          <img src={image} alt={title} />

          <InfoStyled>
            <TitleStyled>
              <h4>{`${title.substring(0, 30)}...`}</h4>
            </TitleStyled>

            <FooterStyled>
              <SectionStyled>{section}</SectionStyled>
              <DateStyled>
                <strong>{dayjs(published_date).format("MMM D, YY")}</strong>
              </DateStyled>
            </FooterStyled>
          </InfoStyled>
        </ContentStyled>
      </ItemStyled>
    </WrapperStyled>
  )
}
export default NewsItem
