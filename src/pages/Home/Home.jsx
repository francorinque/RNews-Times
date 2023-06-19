import { HomeStyled, WrapperGridStyled } from "./HomeStyles"
//components
import { News, NewsCategories, Aside, RandomNew } from "../../components"

const Home = () => {
  return (
    <HomeStyled>
      <RandomNew />
      <h1>Top News</h1>
      <NewsCategories />
      <WrapperGridStyled>
        <News />
        <Aside />
      </WrapperGridStyled>
    </HomeStyled>
  )
}
export default Home
