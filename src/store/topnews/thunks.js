import { API } from "../../apis/news"
import { setTopNews, startLoadingTopNews } from "./topnewsSlice"

let KEY = import.meta.env.VITE_API_KEY

export const getTopNews = () => {
  return async dispatch => {
    dispatch(startLoadingTopNews())

    const res = await API.get(`topstories/v2/home.json?api-key=${KEY}`)
    const { results } = res.data
    let categories = ["All", ...new Set(results.map(item => item.section))]

    dispatch(setTopNews({ results, totalLength: results.length, categories }))
  }
}
