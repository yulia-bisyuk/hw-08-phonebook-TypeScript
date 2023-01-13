"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = exports.IconWrapper = exports.AuthLink = exports.PageTitle = exports.InvitationTitle = exports.PageWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const PageWrapper = styled_components_1.default.div `
  width: 340px;
  height: fit-content;
`;
exports.PageWrapper = PageWrapper;
const PageTitle = styled_components_1.default.h1 `
  color: ${props => props.theme.darkBlue};
  margin-top: 0px;
  margin-bottom: 30px;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;
exports.PageTitle = PageTitle;
const InvitationTitle = styled_components_1.default.h2 `
  color: ${props => props.theme.darkBlue};
  margin-top: 0px;
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center;
`;
exports.InvitationTitle = InvitationTitle;
const AuthLink = (0, styled_components_1.default)(react_router_dom_1.Link) `
  display: block;
  padding: 10px 15px;
  margin-right: auto;
  margin-left: auto;
  :not(:last-child) {
    margin-bottom: 60px;
  }
  text-align: center;
  text-decoration: none;
  width: 148px;
  border-radius: 5px;
  background-color: ${props => props.theme.darkBlue};
  color: white;
  font-size: 16px;
  transition-property: transform;
  transition-duration: 500ms;

  &:hover {
    transform: scale(1.08);
  }
`;
exports.AuthLink = AuthLink;
const IconWrapper = styled_components_1.default.div `
  justify-content: center;
  display: flex;
  margin-bottom: 20px;
`;
exports.IconWrapper = IconWrapper;
const Text = styled_components_1.default.p `
  color: ${props => props.theme.darkBlue};
  font-size: 18px;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 10px;
`;
exports.Text = Text;
