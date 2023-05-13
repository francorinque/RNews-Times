import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  topNews: [],
  error: null,
  total: 0,
  categories: []
}

export const topNewsSlice = createSlice({
  name: "topnews",
  initialState,
  reducers: {
    startLoadingTopNews: (state /* action */) => {
      state.loading = true
    },
    setTopNews: (state, action) => {
      ;(state.loading = false),
        (state.topNews = action.payload.results),
        (state.total = action.payload.totalLength),
        (state.categories = action.payload.categories)
    }
  }
})

// Action creators are generated for each case reducer function
export const { startLoadingTopNews, setTopNews } = topNewsSlice.actions
