import { Link } from "react-router-dom"
import { Loader } from "../index.js"
import useRandomNew from "../../hooks/useRandomNew.js"
import dayjs from "dayjs"

import {
  RandomNewImgStyled,
  RandomNewStyled,
  RandomNewTextsStyled,
  WrapperLoader
} from "./RandomNewStyles.jsx"

const RandomNew = () => {
  const { randomNew } = useRandomNew()

  if (!randomNew) {
    return (
      <WrapperLoader>
        <Loader />
      </WrapperLoader>
    )
  }

  return (
    randomNew && (
      <RandomNewStyled>
        <Link
          to={`/details/${randomNew.title}`}
          state={{ keyword: randomNew.section }}
        >
          <RandomNewImgStyled
            src={randomNew?.multimedia?.[1].url}
            alt="random new"
          />
          <RandomNewTextsStyled>
            <h4>{randomNew.title}</h4>
            <span>{dayjs(randomNew.published_date).format("MMM D, YY")}</span>
          </RandomNewTextsStyled>
        </Link>
      </RandomNewStyled>
    )
  )
}
export default RandomNew

// title, section, multimedia, published_date
