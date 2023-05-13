import {
  NewsCardsStyled,
  NewsWrapperStyled,
  NewsPaginationStyled,
  PaginationButtonStyled,
  WrapperLoader
} from "./NewsStyles"
//components
import { Loader } from "../UI"
//others
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTopNews } from "../../store/topnews/thunks"
import { useFilters, usePagination } from "../../hooks"
import { NewsItem } from ".."

let INITIAL_STATE = 6

const News = () => {
  const dispatch = useDispatch()
  //filtro
  const { filter, filterTopNews } = useFilters()
  //stado global
  let { topNews, loading, total } = useSelector(state => state.topNews)
  //pagination
  const { perPage, setPerPage, handlePrev, handleNext } =
    usePagination(INITIAL_STATE)
  //traemos los datos
  useEffect(() => {
    dispatch(getTopNews())
  }, [])
  useEffect(() => {
    if (filter === "All") setPerPage(INITIAL_STATE)
  }, [filter])
  //filtramos los datos
  let filteredTopNews = filterTopNews(topNews).slice(0, perPage)

  if (loading) {
    return (
      <WrapperLoader>
        <Loader />
      </WrapperLoader>
    )
  }

  return (
    <>
      <NewsWrapperStyled>
        <NewsCardsStyled>
          {filteredTopNews?.map(newsItem => {
            return (
              newsItem.multimedia && (
                <NewsItem key={newsItem.uri} {...newsItem} />
              )
            )
          })}
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
