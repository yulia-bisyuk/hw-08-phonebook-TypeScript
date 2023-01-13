"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactsApi_1 = require("../../redux/contacts/contactsApi");
const hooks_1 = require("hooks");
const filterSlice_1 = require("redux/filter/filterSlice");
const ContactListItem_1 = __importDefault(require("./ContactListItem"));
const ContactList_styled_1 = require("./ContactList.styled");
const authSelectors_1 = require("redux/authentication/authSelectors");
const ContactList = () => {
    const filter = (0, hooks_1.useAppSelector)(filterSlice_1.getFilterValue);
    const token = (0, hooks_1.useAppSelector)(authSelectors_1.getToken);
    const { data: contacts, isSuccess } = (0, contactsApi_1.useGetContactsQuery)(token, {
        skip: token === null,
    });
    const getFilteredContacts = () => {
        if (isSuccess)
            return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.trim().toLowerCase()));
    };
    const filteredContacts = getFilteredContacts();
    return (<ContactList_styled_1.List>
      {filteredContacts &&
            filteredContacts.map(({ id, name, number }) => (<ContactListItem_1.default key={id} id={id} name={name} number={number}/>))}
    </ContactList_styled_1.List>);
};
exports.default = ContactList;
