import { createSlice } from '@reduxjs/toolkit';
import type { ApodItem } from '@/types/Apod';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ApodState {
  selectedApod?: ApodItem;
  selectedDate?: string;
  weekOffset: number;
}

const initialState: ApodState = {
  selectedApod: undefined,
  selectedDate: undefined,
  weekOffset: 0,
};

export const apodSlice = createSlice({
  name: 'apod',
  initialState,
  reducers: {
    setSelectedApod: (state, action: PayloadAction<ApodItem>) => {
      state.selectedApod = action.payload;
    },
    clearSelectedApod: (state) => {
      state.selectedApod = undefined;
    },

    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    clearSelectedDate: (state) => {
      state.selectedDate = undefined;
    },

    setWeekOffset: (state, action: PayloadAction<number>) => {
      state.weekOffset = action.payload;
    },
    incrementWeekOffset: (state) => {
      state.weekOffset += 1;
    },
    decrementWeekOffset: (state) => {
      state.weekOffset = Math.max(0, state.weekOffset - 1);
    },
  },
});

export const {
  setSelectedApod,
  clearSelectedApod,
  setSelectedDate,
  clearSelectedDate,
  setWeekOffset,
  incrementWeekOffset,
  decrementWeekOffset,
} = apodSlice.actions;

export default apodSlice.reducer;
