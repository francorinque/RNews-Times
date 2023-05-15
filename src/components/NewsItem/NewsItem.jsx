//styles
import dayjs from "dayjs"
import {
  NewsItemStyled,
  NewsItemContentStyled,
  NewsItemTitleStyled,
  NewsItemWrapperStyled,
  NewsItemInfoStyled,
  NewsItemDateStyled
} from "./NewsItemStyles"

import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

const NewsItem = ({ title, section, multimedia, published_date }) => {
  const navigate = useNavigate()
  const location = useLocation()
  let image = multimedia ? multimedia[1].url : null

  return (
    <NewsItemWrapperStyled
      to={`/details/${title}`}
      state={{ keyword: section }}
    >
      <NewsItemStyled>
        <NewsItemContentStyled>
          <img src={image} alt={title} />

          <NewsItemTitleStyled>
            <h4>{`${title.substring(0, 40)}...`}</h4>
          </NewsItemTitleStyled>

          <NewsItemInfoStyled>
            <p>{section}</p>
            <NewsItemDateStyled>
              <strong>{dayjs(published_date).format("MMM D, YY")}</strong>
            </NewsItemDateStyled>
          </NewsItemInfoStyled>
        </NewsItemContentStyled>
      </NewsItemStyled>
    </NewsItemWrapperStyled>
  )
}
export default NewsItem

{
  /* <NewsTextsStyled>
            <NewsItemTitleStyled></NewsItemTitleStyled>
            <NewsItemInfoStyled>
              <p>{section}</p>
              <span>{published_date && formatDateFromApi(published_date)}</span>
            </NewsItemInfoStyled>
          </NewsTextsStyled> */
}
