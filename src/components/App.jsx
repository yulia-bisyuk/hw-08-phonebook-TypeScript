import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { ThemeProvider } from 'styled-components';
import theme from '../constants/theme';
import {
  Wrapper,
  PhonebookTitle,
  ContactsTitle,
  Section,
  Note,
} from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  console.log(contacts);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();


  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Section>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactForm/>
        </Section>

        <Section>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter/>
          
          {filteredContacts.length === 0 ? (
            <Note>No contacts here</Note>
          ) : (
            <ContactList
              contacts={filteredContacts}
            />
          )}
        </Section>
      </Wrapper>
    </ThemeProvider>
  );
};