import { NewsCategoriesStyled, CategoryStyled } from "./NewsCategoriesStyles"
//components
import { Loader } from "../../UI"

import { useFilters } from "../../../hooks"
import { useNews } from "../../../store/news"

const NewsCategories = () => {
  const { categories } = useNews(state => state)
  const { filter, setFilter } = useFilters()

  function handleCategory(category) {
    setFilter(category)
  }

  return (
    <NewsCategoriesStyled $loading={categories.length === 0}>
      {categories.length < 1 ? (
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
