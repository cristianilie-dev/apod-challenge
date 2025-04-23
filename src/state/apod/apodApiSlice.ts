import { env } from '@/env'
import type { ApodItem } from '@/types/Apod'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type GetApodParams = {
  start_date: string
}

export const apodApiSlice = createApi({
  reducerPath: 'apodApi',

  baseQuery: fetchBaseQuery({
    baseUrl: env.VITE_APOD_BASE_URL,
  }),

  endpoints: (builder) => ({
    getApod: builder.query<ApodItem[], GetApodParams>({
      query: ({ start_date }) => ({
        url: `/planetary/apod?api_key=${env.VITE_APOD_API_KEY}&start_date=${start_date}`
      }),
    }),
  }),
})

export const { useGetApodQuery } = apodApiSlice
