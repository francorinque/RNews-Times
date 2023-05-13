import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

//slices
import { themeSlice } from "./theme/theme.slice"
import { topNewsSlice } from "./topnews/topnewsSlice"

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["theme"]
}

const rootReducer = combineReducers({
  theme: themeSlice.reducer,
  topNews: topNewsSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
})

export const persistor = persistStore(store)
