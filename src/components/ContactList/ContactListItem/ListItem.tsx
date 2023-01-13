import { useState } from 'react';
import EditContactForm from 'components/EditContactForm';
import { ImCancelCircle } from 'react-icons/im';
import { FiEdit } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { ActionButton, LiItem, ButtonsWrapper } from './ListItem.styled';
import { useDeleteContactMutation } from '../../../redux/contacts/contactsApi';
import { getToken } from 'redux/authentication/authSelectors';
import { useAppSelector } from 'hooks';
import { Contact } from 'types/types';

const ListItem = ({ id, name, number }: Contact) => {
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);
  const [deleteContact] = useDeleteContactMutation();
  const token = useAppSelector(getToken);

  return (
    <>
      <LiItem id={id} key={id}>
        {name}: {number}
        <ButtonsWrapper>
          <IconContext.Provider value={{ color: '#00420b', size: '18px' }}>
            <ActionButton type="button" onClick={() => setEditFormIsOpen(true)}>
              <FiEdit />
            </ActionButton>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: '#bc2525', size: '18px' }}>
            <ActionButton
              type="button"
              onClick={() => deleteContact({ contactId: id, token: token })}
            >
              <ImCancelCircle />
            </ActionButton>
          </IconContext.Provider>
        </ButtonsWrapper>
      </LiItem>

      {editFormIsOpen && (
        <div>
          <EditContactForm onClose={() => setEditFormIsOpen(false)} id={id} />
        </div>
      )}
    </>
  );
};

export default ListItem;
