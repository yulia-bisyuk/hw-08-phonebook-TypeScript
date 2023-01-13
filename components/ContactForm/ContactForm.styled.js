"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = exports.SubmitBtn = exports.FormInput = exports.FormLabel = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const FormLabel = styled_components_1.default.label `
  display: block;
  text-align: center;
  color: ${props => props.theme.darkGrey};
  font-weight: 600;
`;
exports.FormLabel = FormLabel;
const FormInput = styled_components_1.default.input `
  display: block;
  width: 340px;
  height: 24px;
  margin-bottom: 24px;
  margin-top: 8px;
  padding-left: 8px;
  border: 1px solid ${props => props.theme.darkBlue};
  border-radius: 5px;
`;
exports.FormInput = FormInput;
const SubmitBtn = styled_components_1.default.button `
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 148px;
  height: 40px;
  border-style: solid;
  border-radius: 5px;
  border-width: 2px;
  border-color: ${props => props.theme.darkBlue};
  background-color: ${props => props.theme.darkBlue};
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition-property: transform;
  transition-duration: 500ms;

  &:hover {
    transform: scale(1.08);
  }
`;
exports.SubmitBtn = SubmitBtn;
const ErrorMessage = styled_components_1.default.div `
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 12px;
  width: 340px;
  color: red;
  text-align: left;
`;
exports.ErrorMessage = ErrorMessage;
