import { configureStore } from '@reduxjs/toolkit';
import apodReducer from './apod/apodSlice';
import { apodApiSlice } from './apod/apodApiSlice';

export const store = configureStore({
  reducer: {
    apod: apodReducer,
    [apodApiSlice.reducerPath]: apodApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apodApiSlice.middleware);
  },
  devTools: import.meta.env.MODE !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
