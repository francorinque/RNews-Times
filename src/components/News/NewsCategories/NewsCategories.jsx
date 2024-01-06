import { NewsCategoriesStyled, CategoryStyled } from "./NewsCategoriesStyles"
//components
import { Loader } from "../../UI"

import { useSelector } from "react-redux"
import { useFilters } from "../../../hooks"

const NewsCategories = () => {
  const { categories, loading } = useSelector(state => state.topNews)
  const { filter, setFilter } = useFilters()

  function handleCategory(category) {
    setFilter(category)
  }

  return (
    <NewsCategoriesStyled loading={loading}>
      {loading ? (
        <Loader />
      ) : (
        categories.map((category, index) => {
          let selected = category === filter
          return (
            <CategoryStyled
              key={index + category}
              $selected={selected}
              onClick={() => handleCategory(category)}
            >
              {category}
            </CategoryStyled>
          )
        })
      )}
    </NewsCategoriesStyled>
  )
}
export default NewsCategories
