"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const EditContactForm_1 = __importDefault(require("components/EditContactForm"));
const im_1 = require("react-icons/im");
const fi_1 = require("react-icons/fi");
const react_icons_1 = require("react-icons");
const ListItem_styled_1 = require("./ListItem.styled");
const contactsApi_1 = require("../../../redux/contacts/contactsApi");
const authSelectors_1 = require("redux/authentication/authSelectors");
const hooks_1 = require("hooks");
const ListItem = ({ id, name, number }) => {
    const [editFormIsOpen, setEditFormIsOpen] = (0, react_1.useState)(false);
    const [deleteContact] = (0, contactsApi_1.useDeleteContactMutation)();
    const token = (0, hooks_1.useAppSelector)(authSelectors_1.getToken);
    return (<>
      <ListItem_styled_1.LiItem id={id} key={id}>
        {name}: {number}
        <ListItem_styled_1.ButtonsWrapper>
          <react_icons_1.IconContext.Provider value={{ color: '#00420b', size: '18px' }}>
            <ListItem_styled_1.ActionButton type="button" onClick={() => setEditFormIsOpen(true)}>
              <fi_1.FiEdit />
            </ListItem_styled_1.ActionButton>
          </react_icons_1.IconContext.Provider>
          <react_icons_1.IconContext.Provider value={{ color: '#bc2525', size: '18px' }}>
            <ListItem_styled_1.ActionButton type="button" onClick={() => deleteContact({ contactId: id, token: token })}>
              <im_1.ImCancelCircle />
            </ListItem_styled_1.ActionButton>
          </react_icons_1.IconContext.Provider>
        </ListItem_styled_1.ButtonsWrapper>
      </ListItem_styled_1.LiItem>

      {editFormIsOpen && (<div>
          <EditContactForm_1.default onClose={() => setEditFormIsOpen(false)} id={id}/>
        </div>)}
    </>);
};
exports.default = ListItem;
