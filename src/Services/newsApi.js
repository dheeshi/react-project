import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://football98.p.rapidapi.com/premierleague',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '884964bdc0msh24a9d698dbbdb74p131326jsna90a418404d7');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNews: builder.query({ query: () => '/news' }),
    getTransfers: builder.query({ query: () => '/transfers' }),
    getTable: builder.query({ query: () => '/table' }),
    getFixtures: builder.query({ query: () => '/fixtures' }),
    getResults: builder.query({ query: () => '/results' }),
    getCompetitions: builder.query({ query: () => '/competitions' }),
  })

});

export const {
  useGetNewsQuery,
  useGetTransfersQuery,
  useGetTableQuery,
  useGetFixturesQuery,
  useGetResultsQuery,
  useGetCompetitionsQuery,
} = newsApi;
