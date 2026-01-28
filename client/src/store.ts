import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { greenApi } from "./services/greenApi"; 
import { useSelector, type TypedUseSelectorHook } from "react-redux";
import instanceReducer from "./features/Instance/instance.slice"
import logReducer from "./features/Log/log.slice";

export const store = configureStore({
  reducer: combineReducers({
    instance: instanceReducer,
    log: logReducer,
    [greenApi.reducerPath]: greenApi.reducer
  }),
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(greenApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
