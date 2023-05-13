//styles
import {
  NewsItemStyled,
  NewsItemTitleStyled,
  NewsItemInfoStyled
} from "./NewsItemStyles"

import { formatDateFromApi } from "../../utils/formatdate.utility"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

const NewsItem = ({ title, section, multimedia, published_date }) => {
  const navigate = useNavigate()
  const location = useLocation()
  let image = multimedia ? multimedia[1].url : null

  return (
    <NewsItemStyled>
      <Link to={`/details/${title}`} state={{ keyword: section }}>
        <div>
          <img src={image} alt={title} />
          <NewsItemTitleStyled>{`${title.substring(
            0,
            40
          )}...`}</NewsItemTitleStyled>
          <NewsItemInfoStyled>
            <p>{section}</p>
            <span>{published_date && formatDateFromApi(published_date)}</span>
          </NewsItemInfoStyled>
        </div>
      </Link>
    </NewsItemStyled>
  )
}
export default NewsItem
