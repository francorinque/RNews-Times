import { configureStore } from "@reduxjs/toolkit"

//slices
import { topNewsSlice } from "./topnews/topnewsSlice"

export const store = configureStore({
  reducer: {
    topNews: topNewsSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
})
