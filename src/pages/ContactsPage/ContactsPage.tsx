import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import UserMenu from 'components/UserMenu';
import BeatLoader from 'react-spinners/BeatLoader';
import {
  PhonebookTitle,
  ContactsTitle,
  Section,
  Note,
} from './ContactsPage.styled';
import {
  getIsLoggedIn,
  getToken,
} from '../../redux/authentication/authSelectors';
// import { useSelector } from 'react-redux';
import { useAppSelector } from 'components/App/hooks';
import { useGetContactsQuery } from '../../redux/contacts/contactsApi';

const ContactsPage = () => {
  const token = useAppSelector(getToken);
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const {
    data: contacts,
    isFetching,
    isError,
    isSuccess,
  } = useGetContactsQuery(token, { skip: token === null });

  return (
    <>
      <Section>
        {isLoggedIn && <UserMenu />}
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
      </Section>

      <Section>
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />

        {isError && <Note>Oops! Something went wrong...</Note>}

        {isFetching && (
          <Note>
            <BeatLoader color={'#0c005a'} loading={true} size={10} margin={2} />
          </Note>
        )}

        {isSuccess && contacts.length === 0 && <Note>No contacts here</Note>}

        {isSuccess && <ContactList />}
      </Section>
    </>
  );
};

export default ContactsPage;
