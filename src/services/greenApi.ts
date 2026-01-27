import type {BaseQueryFn, FetchArgs, FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_GREEN_API_BASE_URL,
})

const dynamicBaseQuery: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions = {}) => {
  const { getState } = api;
  const state = getState() as RootState;

  const path = typeof args === 'string' ? args : args.url;
  const url = `/waInstance/${state.parameters.instanceId}/${path}/${state.parameters.ApiTokenInstance}`;

  const adjustedArgs = typeof args === 'string' ? url : { ...args, url };

  return rawBaseQuery(adjustedArgs, api, extraOptions)
};

export const greenApi = createApi({
  reducerPath: 'greenApi',
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    getSettings: builder.query({
      query: () => 'getSettings'
    }),
    getStateInstance: builder.query({
      query: () => 'getStateInstance' 
    }),
  })
});


export const { useLazyGetSettingsQuery, useLazyGetStateInstanceQuery } = greenApi;
