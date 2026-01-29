import { createSlice } from "@reduxjs/toolkit";
import { greenApi } from "../../services/green-api";
const logSlice = createSlice({
  name: "log",
  initialState: { value: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        greenApi.endpoints.getSettings.matchFulfilled,
        (state, action) => {
          state.value = action.payload;
        },
      )
      .addMatcher(
        greenApi.endpoints.getStateInstance.matchFulfilled,
        (state, action) => {
          state.value = action.payload;
        },
      )
      .addMatcher(
        greenApi.endpoints.sendMessage.matchFulfilled,
        (state, action) => {
          state.value = action.payload;
        },
      );
  },
});

export default logSlice.reducer;
