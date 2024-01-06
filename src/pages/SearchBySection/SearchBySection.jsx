import { SearchBySectionStyled } from "./SearchBySectionStyles"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getTopNews } from "../../services/api"
import { NewsItem } from "../../components"
import { Loader } from "../../components/UI"
import { usePagination } from "../../hooks"

let INITIAL_STATE = 6

const SearchBySection = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const { section } = useParams()

  const { perPage, setPerPage, handlePrev, handleNext } = usePagination(
    INITIAL_STATE,
    data.length > 0 && data
  )

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
      {!data.length ? (
        <Loader />
      ) : (
        data?.map(item => <NewsItem key={item.uri} {...item} />)
      )}
    </SearchBySectionStyled>
  )
}
export default SearchBySection
