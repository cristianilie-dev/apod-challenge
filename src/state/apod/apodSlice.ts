import type { ApodItem } from '@/types/Apod'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ApodState {
  selectedApod?: ApodItem
}

const initialState: ApodState = {
  selectedApod: undefined
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
  },
})

export const { setSelectedApod, clearSelectedApod } = apodSlice.actions

export default apodSlice.reducer
