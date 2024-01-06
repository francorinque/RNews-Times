import {
  NewsCardsStyled,
  NewsPaginationStyled,
  NewsWrapperStyled,
  PaginationButtonStyled
} from "./NewsStyles"
//components
import { MySkeleton } from "../UI"
//others
import { useEffect } from "react"
import { NewsItem } from ".."
import { useFilters, usePagination } from "../../hooks"
import { useNews } from "../../store/news"

let INITIAL_STATE = 6

const News = () => {
  //filtro
  const { filter, filterTopNews } = useFilters()

  //estado global
  const { topNews, total, fetchTopNews } = useNews(state => state)

  //pagination
  const { perPage, setPerPage, handlePrev, handleNext } = usePagination(
    INITIAL_STATE,
    topNews
  )

  //traemos los datos
  useEffect(() => {
    fetchTopNews()
  }, [])

  useEffect(() => {
    if (filter === "All") setPerPage(INITIAL_STATE)
  }, [filter])

  //filtramos los datos
  let filteredTopNews = filterTopNews(topNews).slice(0, perPage)

  return (
    <>
      <NewsWrapperStyled>
        <NewsCardsStyled>
          {filteredTopNews.length < 1 ? (
            <>
              <MySkeleton />
              <MySkeleton />
              <MySkeleton />
              <MySkeleton />
              <MySkeleton />
              <MySkeleton />
            </>
          ) : (
            filteredTopNews.map(newsItem => {
              return (
                newsItem.multimedia && (
                  <NewsItem key={newsItem.uri} {...newsItem} />
                )
              )
            })
          )}
        </NewsCardsStyled>

        {filter === "All" && (
          <NewsPaginationStyled>
            <PaginationButtonStyled
              onClick={handlePrev}
              disabled={perPage === INITIAL_STATE}
            >
              Prev
            </PaginationButtonStyled>
            <PaginationButtonStyled
              onClick={handleNext}
              disabled={perPage >= total}
            >
              Next
            </PaginationButtonStyled>
          </NewsPaginationStyled>
        )}
      </NewsWrapperStyled>
    </>
  )
}
export default News
