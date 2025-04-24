import { env } from '@/env'
import type { ApodItem } from '@/types/Apod'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type GetApodParams = {
  start_date?: string
  date?: string
}

export const apodApiSlice = createApi({
  reducerPath: 'apodApi',

  baseQuery: fetchBaseQuery({
    baseUrl: env.VITE_APOD_BASE_URL,
  }),

  endpoints: (builder) => ({
    getApod: builder.query<ApodItem[], GetApodParams>({
      query: ({ date, start_date }) => {
        const params = new URLSearchParams({
          api_key: env.VITE_APOD_API_KEY,
        });

        if (date) params.append('date', date);
        if (start_date) params.append('start_date', start_date);

        return {
          url: `/planetary/apod?thumbs=true&${params.toString()}`,
        };
      },
      transformResponse: (response: ApodItem | ApodItem[]) => {
        return Array.isArray(response) ? response : [response];
      },
    }),
  }),
});

export const { useGetApodQuery } = apodApiSlice;
