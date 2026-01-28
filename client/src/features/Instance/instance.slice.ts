import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InstanceState {
  instanceId: string;
  ApiTokenInstance: string;
}

const initialState: InstanceState = {
  instanceId: '',
  ApiTokenInstance: '',
}

export const instanceSlice = createSlice({
  name: 'instance',
  initialState,
  reducers: {
    updateInstanceId: (state, action: PayloadAction<string>) => {
      state.instanceId = action.payload;
    },
    updateApiTokenInstance: (state, action: PayloadAction<string>) => {
      state.ApiTokenInstance = action.payload;
    },
  }
});

export const { updateInstanceId, updateApiTokenInstance } = instanceSlice.actions;

export default instanceSlice.reducer;
