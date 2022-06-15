import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { ThemeProvider } from 'styled-components';
import theme from '../../constants/theme';
import BeatLoader from "react-spinners/BeatLoader";
import {
  PhonebookTitle,
  ContactsTitle,
  Section,
  Note,
} from './ContactsPage.styled';
import { useGetContactsQuery } from '../../redux/ContactsOperations/ContactsOperations';

const ContactsPage = () => {
    
  const {
    data: contacts,
    isFetching,
    isError,
    isSuccess } = useGetContactsQuery();


  return (
      <ThemeProvider theme={theme}>
          <>
        <Section>
          <PhonebookTitle>Phonebook</PhonebookTitle>
          <ContactForm/>
        </Section>

        <Section>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter />

          {isError && <Note>Oops! Something went wrong...</Note>} 
          
          {isFetching && <Note><BeatLoader
            color={theme.darkBlue} loading={true} size={10} margin={2} />
          </Note>} 
      
          {isSuccess && contacts.length === 0
            && <Note>No contacts here</Note>}
          
          {isSuccess && <ContactList/>} 
        
        </Section>
              </>
    </ThemeProvider>
  );
};

export default ContactsPage;