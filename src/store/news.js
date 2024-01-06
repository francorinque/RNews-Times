import { create } from "zustand"
import { getTopNews } from "../services/api"

export const useNews = create(set => {
  return {
    topNews: [],
    total: 0,
    categories: [],
    fetchTopNews: async () => {
      const { data } = await getTopNews({ keyword: "home" })
      const topNews = data.results
      let categories = ["All", ...new Set(topNews.map(item => item.section))]
      set({ topNews, categories, total: topNews.length })
    }
  }
})
