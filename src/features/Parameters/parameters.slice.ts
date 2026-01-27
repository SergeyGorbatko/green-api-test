import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ParametersState {
  instanceId: string;
  ApiTokenInstance: string;
}

const initialState: ParametersState = {
  instanceId: '',
  ApiTokenInstance: '',
}

export const parametersSlice = createSlice({
  name: 'parameters',
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

export const { updateInstanceId, updateApiTokenInstance } = parametersSlice.actions;

export default parametersSlice.reducer;
