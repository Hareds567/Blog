import { createReducer, createAction } from "@reduxjs/toolkit";

//Actions
export const set_access_token = createAction<string>("user/setAccessToken");

//Reducer
export interface User {
  access_token: string;
}
const initialState: User = { access_token: "" };

export const UserReducer = createReducer(initialState, (builder) => {
  builder.addCase(set_access_token, (state, action) => {
    state.access_token = action.payload;
  });
});
