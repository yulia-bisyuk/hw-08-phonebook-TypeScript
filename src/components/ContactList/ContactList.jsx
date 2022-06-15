import { useGetContactsQuery } from '../../redux/ContactsOperations/ContactsOperations';
import { useSelector } from 'react-redux';
import { getFilterValue } from 'redux/FilterSlice/FilterSlice';
import LiItem from '../ListItem';
import { List} from './ContactList.styled';

const ContactList = () => {

     const filter = useSelector(getFilterValue);

    const {
    data: contacts, isSuccess } = useGetContactsQuery();
    
    const getFilteredContacts = () => {
  
    if (isSuccess)
      return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();


    return (
        <List>
        {filteredContacts.map(({ id, name, phone }) => (
            <LiItem
                key={id}
                id={id}
                name={name}
                phone={phone}
            ></LiItem>
        ))}
        </List>
    )

}

export default ContactList;