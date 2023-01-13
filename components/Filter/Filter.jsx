"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ContactForm_styled_1 = require("../ContactForm/ContactForm.styled");
const hooks_1 = require("hooks");
const filterSlice_1 = require("redux/filter/filterSlice");
const Filter = () => {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const onChange = (e) => {
        dispatch((0, filterSlice_1.change)(e.currentTarget.value));
    };
    return (<ContactForm_styled_1.FormLabel>
      Find contacts by name
      <ContactForm_styled_1.FormInput autoComplete="off" type="text" name="filter" onChange={onChange} required/>
    </ContactForm_styled_1.FormLabel>);
};
exports.default = Filter;
