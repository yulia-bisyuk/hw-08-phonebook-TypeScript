"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogOutBtn = exports.UserEmail = exports.WelcomeText = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const WelcomeText = styled_components_1.default.p `
  text-align: center;
  font-weight: 600;
  color: ${props => props.theme.darkGrey};
`;
exports.WelcomeText = WelcomeText;
const UserEmail = styled_components_1.default.span `
  margin-bottom: 8px;
  font-size: 18px;
  display: block;
  color: ${props => props.theme.darkBlue};
`;
exports.UserEmail = UserEmail;
const LogOutBtn = styled_components_1.default.button `
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  border: 0.5px solid ${props => props.theme.red};
  border-radius: 5px;
  background-color: transparent;
  color: ${props => props.theme.red};
  cursor: pointer;
`;
exports.LogOutBtn = LogOutBtn;
