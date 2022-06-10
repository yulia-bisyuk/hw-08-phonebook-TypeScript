import React from 'react';
import PropTypes from 'prop-types';
import LiItem from '../ListItem';
import { List} from './ContactList.styled';

const ContactList = ({ contacts }) => (
  
    <List>
        {contacts.map(({ id, name, phone }) => (
            <LiItem
                key={id}
                id={id}
                name={name}
                phone={phone}
            ></LiItem>
        ))}
        </List>
        
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ContactList;