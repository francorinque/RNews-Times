import axios from "axios"

let KEY = import.meta.env.VITE_API_KEY

export const API = axios.create({
  baseURL: "https://api.nytimes.com/svc/"
})

export const getTopNews = ({ keyword = "home" }) => {
  return API.get(`topstories/v2/${keyword}.json?api-key=${KEY}`)
}

export const getSections = () => {
  return API.get(`news/v3/content/section-list.json?api-key=${KEY}`).then(
    res => res.data.results
  )
}
