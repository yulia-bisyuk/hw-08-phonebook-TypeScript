import { useGetContactsQuery } from '../../redux/ContactsOperations/ContactsOperations';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/FilterSlice/FilterSlice';
import LiItem from '../ListItem';
import { List} from './ContactList.styled';
import { getToken } from 'redux/AuthSlice/AuthSlice';

const ContactList = () => {

  const filter = useSelector(getFilterValue);
  const token = useSelector(getToken);

    const {
    data: contacts, isSuccess } = useGetContactsQuery(token, { skip: token === null });
    
    const getFilteredContacts = () => {
  
    if (isSuccess)
      return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();


    return (
        <List>
        {filteredContacts && filteredContacts.map(({ id, name, number }) => (
            <LiItem
                key={id}
                id={id}
                name={name}
                phone={number}
            ></LiItem>
        ))}
        </List>
    )

}

export default ContactList;