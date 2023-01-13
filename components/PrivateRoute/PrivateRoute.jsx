"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hooks_1 = require("hooks");
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const authSelectors_1 = require("redux/authentication/authSelectors");
const PrivateRoute = ({ children }) => {
    const isLoggedIn = (0, hooks_1.useAppSelector)(authSelectors_1.getIsLoggedIn);
    return <>{isLoggedIn ? children : <react_router_dom_1.Navigate to="/"/>}</>;
};
exports.default = PrivateRoute;
