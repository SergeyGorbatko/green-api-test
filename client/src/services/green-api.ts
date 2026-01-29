import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { InstanceState } from "../features/Instance/instance.slice";
import type { SendMessageRequest } from "./send-message.type";

export const greenApi = createApi({
  reducerPath: "greenApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "/api/green-api",

    prepareHeaders: (headers, { getState }) => {
      const state = getState() as { instance: InstanceState };
      const token = state.instance.token;

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getSettings: builder.query<any, string>({
      query: (instanceId) => ({
        url: "getSettings",
        params: { id: instanceId },
      }),
    }),

    getStateInstance: builder.query<any, string>({
      query: (instanceId) => ({
        url: "getStateInstance",
        params: { id: instanceId },
      }),
    }),

    sendMessage: builder.mutation<
      any,
      { instanceId: string; body: SendMessageRequest }
    >({
      query: ({ instanceId, body }) => ({
        url: "sendMessage",
        method: "POST",
        params: { id: instanceId },
        body,
      }),
    }),
  }),
});

export const {
  useLazyGetSettingsQuery,
  useLazyGetStateInstanceQuery,
  useSendMessageMutation,
} = greenApi;
