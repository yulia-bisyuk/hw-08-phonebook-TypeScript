"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContactForm_1 = __importDefault(require("components/ContactForm"));
const Filter_1 = __importDefault(require("components/Filter"));
const ContactList_1 = __importDefault(require("components/ContactList"));
const UserMenu_1 = __importDefault(require("components/UserMenu"));
const BeatLoader_1 = __importDefault(require("react-spinners/BeatLoader"));
const ContactsPage_styled_1 = require("./ContactsPage.styled");
const authSelectors_1 = require("../../redux/authentication/authSelectors");
const hooks_1 = require("hooks");
const contactsApi_1 = require("../../redux/contacts/contactsApi");
const ContactsPage = () => {
    const token = (0, hooks_1.useAppSelector)(authSelectors_1.getToken);
    const isLoggedIn = (0, hooks_1.useAppSelector)(authSelectors_1.getIsLoggedIn);
    const { data: contacts, isFetching, isError, isSuccess, } = (0, contactsApi_1.useGetContactsQuery)(token, { skip: token === null });
    return (<>
      <ContactsPage_styled_1.Section>
        {isLoggedIn && <UserMenu_1.default />}
        <ContactsPage_styled_1.PhonebookTitle>Phonebook</ContactsPage_styled_1.PhonebookTitle>
        <ContactForm_1.default />
      </ContactsPage_styled_1.Section>

      <ContactsPage_styled_1.Section>
        <ContactsPage_styled_1.ContactsTitle>Contacts</ContactsPage_styled_1.ContactsTitle>
        <Filter_1.default />

        {isError && <ContactsPage_styled_1.Note>Oops! Something went wrong...</ContactsPage_styled_1.Note>}

        {isFetching && (<ContactsPage_styled_1.Note>
            <BeatLoader_1.default color={'#0c005a'} loading={true} size={10} margin={2}/>
          </ContactsPage_styled_1.Note>)}

        {isSuccess && contacts.length === 0 && <ContactsPage_styled_1.Note>No contacts here</ContactsPage_styled_1.Note>}

        {isSuccess && <ContactList_1.default />}
      </ContactsPage_styled_1.Section>
    </>);
};
exports.default = ContactsPage;
