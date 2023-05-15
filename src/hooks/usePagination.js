import { useState } from "react"
import { useSelector } from "react-redux"

export const usePagination = (initialState, arr) => {
  const [perPage, setPerPage] = useState(initialState)
  const total = arr.length

  const handlePrev = () => {
    if (perPage === initialState) return
    setPerPage(perPage - initialState)
  }
  const handleNext = () => {
    if (perPage >= total) return
    setPerPage(perPage + initialState)
  }

  return { perPage, setPerPage, handlePrev, handleNext }
}
