//components
import { Route, Routes } from "react-router-dom"
import { Layout, NotFound } from "../components"
import { About, Details, Home, SearchBySection } from "../pages"

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/about-us" element={<About />} />
        <Route
          path="/search-by-section/:section/*"
          element={<SearchBySection />}
        />
        <Route path="/details/:title" element={<Details />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
export default Router
