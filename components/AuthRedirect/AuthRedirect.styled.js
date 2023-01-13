"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedirectLink = exports.Text = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const RedirectLink = (0, styled_components_1.default)(react_router_dom_1.Link) `
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: fit-content;
  text-decoration: none;
  color: ${props => props.theme.darkBlue};

  :hover {
    text-decoration: underline;
  }
`;
exports.RedirectLink = RedirectLink;
const Text = styled_components_1.default.span `
  display: block;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 8px;
  color: ${props => props.theme.darkGrey};
`;
exports.Text = Text;
