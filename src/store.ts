import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { greenApi } from "./services/greenApi"; 
import parametersSlice from "./features/Parameters/parameters.slice";
import {useSelector, type TypedUseSelectorHook} from "react-redux";

export const store = configureStore({
  reducer: combineReducers({
    parameters: parametersSlice,
    [greenApi.reducerPath]: greenApi.reducer
  })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
