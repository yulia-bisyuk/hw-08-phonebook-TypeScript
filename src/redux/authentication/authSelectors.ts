import { RootState } from "redux/store";

export const getUserName = (state: RootState) => state.auth.user.name;
export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const getToken = (state: RootState) => state.auth.token;
