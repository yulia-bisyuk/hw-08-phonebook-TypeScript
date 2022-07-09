import { useGetContactsQuery } from '../../redux/contacts/contactsApi';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/filter/filterSlice';
import LiItem from './ContactListItem';
import { List } from './ContactList.styled';
import { getToken } from 'redux/authentication/authSelectors';

const ContactList = () => {
  const filter = useSelector(getFilterValue);
  const token = useSelector(getToken);
  const { data: contacts, isSuccess } = useGetContactsQuery(token, {
    skip: token === null,
  });

  const getFilteredContacts = () => {
    if (isSuccess)
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.trim().toLowerCase())
      );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <List>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => (
          <LiItem key={id} id={id} name={name} phone={number}/>
        ))}
    </List>
  );
};

export default ContactList;
