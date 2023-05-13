import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light',
  },
  reducers: {
    toggleTheme: state => {
      state.theme = state.theme == 'light' ? 'dark' : 'light'
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions
