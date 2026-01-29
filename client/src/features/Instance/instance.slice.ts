import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InstanceState {
  id: string;
  token: string;
}

const initialState: InstanceState = {
  id: "",
  token: "",
};

export const instanceSlice = createSlice({
  name: "instance",
  initialState,
  reducers: {
    updateInstanceId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    updateApiTokenInstance: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { updateInstanceId, updateApiTokenInstance } =
  instanceSlice.actions;

export default instanceSlice.reducer;
