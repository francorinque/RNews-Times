import { useContext, useEffect, useState } from "react"
import { FiltersContext } from "../context/filtersContext"

export function useFilters() {
  const { filter, setFilter } = useContext(FiltersContext)

  const filterTopNews = news => {
    return filter !== "All"
      ? news.filter(item => item.section === filter)
      : news
  }

  return { filter, setFilter, filterTopNews }
}
