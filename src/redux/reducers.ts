import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";

export const rootReducer = combineReducers({
  users: userSlice,
});
