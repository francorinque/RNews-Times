import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import { getTopNews } from "../apis/news"
import { useLocation } from "react-router-dom"

export const useSingleNews = ({ title }) => {
  const location = useLocation()

  //traemos el estado global
  const topNews = useSelector(state => state.topNews.topNews)
  //guardamos el singleNews si hay estado global
  const singleNewsFromCache = topNews.find(
    singleNews => singleNews.title === title
  )
  const [details, setDetails] = useState(singleNewsFromCache)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  // fallback
  async function getDetailsNews() {
    let singleNews
    setLoading(true)
    try {
      const res = await getTopNews({
        keyword: location.state?.keyword
      })
      const results = res.data.results
      singleNews = results.find(singleNews => singleNews.title.includes(title))
      setDetails(singleNews)
      setLoading(false)
    } catch (e) {
      setError("Ups,this news not found, sorry")
      console.log(e)
      setLoading(false)
    }
  }

  useEffect(
    function () {
      if (!details) {
        getDetailsNews()
      }
    },
    [details, title]
  )

  return { details, error, loading }
}
