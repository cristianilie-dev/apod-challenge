import type { ApodItem } from '@/types/Apod'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ApodState {
  selectedApod?: ApodItem
  selectedDate?: string
}

const initialState: ApodState = {
  selectedApod: undefined,
  selectedDate: undefined
}

export const apodSlice = createSlice({
  name: 'apod',
  initialState,
  reducers: {
    setSelectedApod: (state, action: PayloadAction<ApodItem>) => {
      state.selectedApod = action.payload
    },
    clearSelectedApod: (state) => {
      state.selectedApod = undefined
    },

    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload
    },
    clearSelectedDate: (state) => {
      state.selectedDate = undefined
    },
  },
})

export const { setSelectedApod, clearSelectedApod, setSelectedDate, clearSelectedDate } = apodSlice.actions

export default apodSlice.reducer
