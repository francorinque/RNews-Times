import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import dayjs from "dayjs"

import {
  RandomNewStyled,
  RandomNewImgStyled,
  RandomNewTextsStyled
} from "./RandomNewStyles.jsx"

const RandomNew = () => {
  const [randomNew, setRandomNew] = useState(null)
  const { topNews } = useSelector(state => state.topNews)

  useEffect(function () {
    let randomNumber = Math.floor(Math.random() * topNews?.length)
    setRandomNew(topNews[randomNumber])
  }, [])

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
