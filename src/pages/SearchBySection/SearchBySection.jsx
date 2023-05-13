import { SearchBySectionStyled } from "./SearchBySectionStyles"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getTopNews } from "../../apis/news"
import { NewsItem } from "../../components"
import { Loader } from "../../components/UI"

const SearchBySection = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const { section } = useParams()

  useEffect(() => {
    let isCancelled = false

    getTopNews({ keyword: section })
      .then(res => {
        if (!isCancelled) {
          setData(res.data.results)
        }
      })
      .catch(e => {
        if (isCancelled) {
          console.log("is cancelled")
        } else {
          setError("Ups, this section not found, sorry.")
        }
      })

    return () => (isCancelled = true)
  }, [section])

  if (error) {
    return <p>{error}</p>
  }

  return (
    <SearchBySectionStyled>
      {!data.length && <Loader />}
      {data?.map(item => (
        <NewsItem key={item.uri} {...item} />
      ))}
    </SearchBySectionStyled>
  )
}
export default SearchBySection
