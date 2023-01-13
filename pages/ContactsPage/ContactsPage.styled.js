"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = exports.Section = exports.ContactsTitle = exports.PhonebookTitle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const PhonebookTitle = styled_components_1.default.h1 `
  color: ${props => props.theme.darkBlue};
  margin-top: 0px;
  margin-bottom: 30px;
  font-size: 28px;
  text-align: center;
`;
exports.PhonebookTitle = PhonebookTitle;
const ContactsTitle = styled_components_1.default.h1 `
  color: ${props => props.theme.darkBlue};
  margin-top: 0px;
  margin-bottom: 30px;
  font-size: 20px;
  text-align: center;
`;
exports.ContactsTitle = ContactsTitle;
const Section = styled_components_1.default.div `
  &:not(:last-child) {
    margin-bottom: 48px;
  }
`;
exports.Section = Section;
const Note = styled_components_1.default.div `
  text-align: center;
  color: ${props => props.theme.lightGray};
`;
exports.Note = Note;
