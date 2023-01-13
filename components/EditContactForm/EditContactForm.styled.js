"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmButton = exports.CancelButton = exports.ButtonsWrapper = exports.FormInput = exports.FormLabel = exports.InputsWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const InputsWrapper = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
`;
exports.InputsWrapper = InputsWrapper;
const FormLabel = styled_components_1.default.label `
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: center;
  font-size: 14px;
  color: #323643;
  font-weight: 600;
`;
exports.FormLabel = FormLabel;
const FormInput = styled_components_1.default.input `
  width: 268px;
  height: 20px;
  padding-left: 6px;
  border: 0.5px solid ${props => props.theme.darkBlue};
  border-radius: 5px;
`;
exports.FormInput = FormInput;
const ButtonsWrapper = styled_components_1.default.div `
  margin-left: 74px;
  margin-bottom: 16px;
`;
exports.ButtonsWrapper = ButtonsWrapper;
const CancelButton = styled_components_1.default.button `
  margin-right: 8px;
  border: 0.5px solid ${props => props.theme.red};
  border-radius: 5px;
  background-color: transparent;
  color: ${props => props.theme.red};
  cursor: pointer;
`;
exports.CancelButton = CancelButton;
const ConfirmButton = styled_components_1.default.button `
  border: 0.5px solid ${props => props.theme.green};
  border-radius: 5px;
  background-color: transparent;
  color: ${props => props.theme.green};
  cursor: pointer;
`;
exports.ConfirmButton = ConfirmButton;
