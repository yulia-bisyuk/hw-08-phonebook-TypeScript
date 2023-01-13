"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = exports.getIsLoggedIn = exports.getUserName = void 0;
const getUserName = (state) => state.auth.user.name;
exports.getUserName = getUserName;
const getIsLoggedIn = (state) => state.auth.isLoggedIn;
exports.getIsLoggedIn = getIsLoggedIn;
const getToken = (state) => state.auth.token;
exports.getToken = getToken;
