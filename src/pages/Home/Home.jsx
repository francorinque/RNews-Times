import { HomeStyled, WrapperGridStyled, TitleStyled } from "./HomeStyles"
//components
import { News, NewsCategories, Aside, RandomNew } from "../../components"
import Rectangle from "../../components/Rectangle/Rectangle"

const Home = () => {
  return (
    <HomeStyled>
      <RandomNew />
      <TitleStyled>
        <Rectangle>Top News</Rectangle>
      </TitleStyled>
      <NewsCategories />
      <WrapperGridStyled>
        <News />
        <Aside />
      </WrapperGridStyled>
    </HomeStyled>
  )
}
export default Home
