import type { ApodItem } from '@/types/Apod'
import { createSlice } from '@reduxjs/toolkit'

export interface ApodState {
}

const initialState: ApodState = {
}

export const apodSlice = createSlice({
  name: 'apod',
  initialState,
  reducers: {},
})

export default apodSlice.reducer
