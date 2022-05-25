import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { ThemeProvider } from 'styled-components';
import theme from '../../constants/theme';
import {
  Wrapper,
  PhonebookTitle,
  ContactsTitle,
  Section,
  Note,
} from './App.styled';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/FilterSlice/FilterSlice';
import { useGetContactsQuery } from '../../redux/ContactsSlice/ContactsSlice';

export const App = () => {
  const filter = useSelector(getFilterValue);

  const {
    data: contacts,
    isFetching,
    isError,
    isSuccess } = useGetContactsQuery();
  console.log(isFetching);
  console.log(contacts);

  const getFilteredContacts = () => {
  
    if (isSuccess)
      return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
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
          <Filter />

          {isError && <Note>Oops! Something went wrong...</Note>} 
          {/* set the loader */}
          {isFetching && <Note>Is loading...</Note>} 
      
          {isSuccess && filteredContacts.length === 0
            && <Note>No matches on your request</Note>}
          
          {isSuccess && <ContactList
              contacts={filteredContacts}
          />} 
        
        </Section>
      </Wrapper>
    </ThemeProvider>
  );
};