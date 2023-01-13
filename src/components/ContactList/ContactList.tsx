import { useGetContactsQuery } from '../../redux/contacts/contactsApi';
import { useAppSelector } from 'hooks';
import { getFilterValue } from 'redux/filter/filterSlice';
import LiItem from './ContactListItem';
import { List } from './ContactList.styled';
import { getToken } from 'redux/authentication/authSelectors';
import { Contact, ContactListType } from 'types/types';

const ContactList: React.FC = () => {
  const filter = useAppSelector(getFilterValue);
  const token = useAppSelector(getToken);
  const { data: contacts, isSuccess } = useGetContactsQuery(token, {
    skip: token === null,
  });

  const getFilteredContacts = () => {
    if (isSuccess)
      return contacts.filter((contact: Contact) =>
        contact.name.toLowerCase().includes(filter.trim().toLowerCase())
      );
  };

  const filteredContacts: ContactListType = getFilteredContacts();

  return (
    <List>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => (
          <LiItem key={id} id={id} name={name} number={number} />
        ))}
    </List>
  );
};

export default ContactList;
