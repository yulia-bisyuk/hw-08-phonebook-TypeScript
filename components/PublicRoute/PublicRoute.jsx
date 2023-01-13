"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hooks_1 = require("hooks");
const react_router_dom_1 = require("react-router-dom");
const authSelectors_1 = require("redux/authentication/authSelectors");
const PublicRoute = ({ children, restricted, navigateTo }) => {
    const isLoggedIn = (0, hooks_1.useAppSelector)(authSelectors_1.getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return <>{shouldRedirect ? <react_router_dom_1.Navigate to={navigateTo}/> : children}</>;
};
exports.default = PublicRoute;
