import { useEffect } from "react"
import { useState } from "react"
import { useNews } from "../store/news"

const useRandomNew = () => {
  const { topNews, total } = useNews(state => state)

  const [randomNew, setRandomNew] = useState(null)

  const getRandomNew = () => {
    const randomNumber = Math.floor(Math.random() * total)
    if (randomNumber < topNews.length) {
      setRandomNew(topNews[randomNumber])
    }
  }

  useEffect(
    function () {
      if (topNews && topNews.length > 0) getRandomNew()
    },
    [topNews]
  )

  return { randomNew }
}

export default useRandomNew
