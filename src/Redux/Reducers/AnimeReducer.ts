import { createReducer, createAction } from "@reduxjs/toolkit";

//Actions
export const set_access_token = createAction<string>("user/setAccessToken");

//Reducer
export interface AnimeListReducer {}
const initialState: AnimeListReducer = { access_token: "" };

export const AnimeListReducer = createReducer(initialState, (builder) => {
  builder.addCase(set_access_token, (state, action) => {});
});
