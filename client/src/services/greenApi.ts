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

  console.log(args)
  const path = typeof args === 'string' ? args : args.url;
  const url = `/waInstance/${state.instance.instanceId}/${path}/${state.instance.ApiTokenInstance}`;

  const adjustedArgs = typeof args === 'string' ? url : { ...args, url };
  
  return rawBaseQuery(adjustedArgs, api, extraOptions)
};

export const greenApi = createApi({
  reducerPath: 'greenApi',
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    getSettings: builder.query<any, void>({
      query: () => 'getSettings'
    }),
    getStateInstance: builder.query<any, void>({
      query: () => 'getStateInstance' 
    }),
  })
});


export const { useLazyGetSettingsQuery, useLazyGetStateInstanceQuery } = greenApi;
