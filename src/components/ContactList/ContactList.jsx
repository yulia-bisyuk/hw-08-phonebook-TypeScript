import React from 'react';
import PropTypes from 'prop-types';
import LiItem from '../ListItem';
import { List} from './ContactList.styled';

const ContactList = ({contacts}) => (
    <List>
        {contacts.map(({ id, name, number }) => (
            <LiItem
                key={id}
                id={id}
                name={name}
                number={number}
            ></LiItem>
        ))}
    </List>
)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ContactList;