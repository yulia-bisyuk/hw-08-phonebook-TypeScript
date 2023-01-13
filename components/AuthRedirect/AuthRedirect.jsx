"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthRedirect_styled_1 = require("./AuthRedirect.styled");
const AuthRedirect = ({ page, text }) => {
    return (<>
      <AuthRedirect_styled_1.Text>or</AuthRedirect_styled_1.Text>
      <AuthRedirect_styled_1.RedirectLink to={page}>{text}</AuthRedirect_styled_1.RedirectLink>
    </>);
};
exports.default = AuthRedirect;
