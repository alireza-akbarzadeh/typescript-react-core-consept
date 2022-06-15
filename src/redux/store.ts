// @Redux-Toolkit
import { configureStore } from "@reduxjs/toolkit";
// @React-Redux
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// @Reducers
import { rootReducer } from "./reducers";
// @Type-hook
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// @Custom-Hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// @Store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
