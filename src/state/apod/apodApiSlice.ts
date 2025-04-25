import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ApodItem } from '@/types/Apod';
import { env } from '@/env';

type GetApodParams = {
  date?: string;
  start_date?: string;
  end_date?: string;
};

export const apodApiSlice = createApi({
  reducerPath: 'apodApi',

  baseQuery: fetchBaseQuery({
    baseUrl: env.VITE_NASA_BASE_URL,
  }),

  endpoints: (builder) => ({
    getApod: builder.query<Array<ApodItem>, GetApodParams>({
      query: ({ date, start_date, end_date }) => {
        const params = new URLSearchParams({
          api_key: env.VITE_APOD_API_KEY,
        });

        if (date) params.append('date', date);
        if (start_date) params.append('start_date', start_date);
        if (end_date) params.append('end_date', end_date);

        return {
          url: `/planetary/apod?thumbs=true&${params.toString()}`,
        };
      },
      transformResponse: (response: ApodItem | Array<ApodItem>) => {
        return Array.isArray(response) ? response : [response];
      },
    }),
  }),
});

export const { useGetApodQuery } = apodApiSlice;
