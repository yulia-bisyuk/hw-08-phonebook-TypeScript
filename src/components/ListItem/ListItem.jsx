import React from 'react';
import PropTypes from 'prop-types';
import { ImCancelCircle } from 'react-icons/im';
import { IconContext } from "react-icons";
import { DeleteButton, LiItem} from './ListItem.styled';

const ListItem = ({ id, name, phone }) => {
    // const dispatch = useDispatch();

    return (
        <LiItem
            id={id}
            key={id}>
            {name}: {phone}
            <IconContext.Provider value={{ color: "#bc2525", size: "18px" }}>
                <DeleteButton type='button'>
                    {/* // onClick={() => dispatch(deleteItem(id))}> */}
                    <ImCancelCircle />
                </DeleteButton>
            </IconContext.Provider>
        </LiItem>
    )
    
};

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}

export default ListItem;