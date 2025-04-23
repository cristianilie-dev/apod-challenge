import { configureStore } from '@reduxjs/toolkit'
import apodReducer from './apod/apodSlice'

export const store = configureStore({
  reducer: {
    apod: apodReducer,
  },
  devTools: import.meta.env.MODE !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
