import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "../Reducers/UserReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({ user: UserReducer });
export type IRootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
  devTools: true,
});
export default store;
