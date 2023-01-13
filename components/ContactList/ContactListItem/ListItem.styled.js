"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonsWrapper = exports.LiItem = exports.ActionButton = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const LiItem = styled_components_1.default.li `
  list-style-type: none;
  width: 340px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.darkBlue};

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
exports.LiItem = LiItem;
const ActionButton = styled_components_1.default.button `
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :not(:first-child) {
    margin-left: 8px;
  }
`;
exports.ActionButton = ActionButton;
const ButtonsWrapper = styled_components_1.default.div `
  display: flex;
`;
exports.ButtonsWrapper = ButtonsWrapper;
