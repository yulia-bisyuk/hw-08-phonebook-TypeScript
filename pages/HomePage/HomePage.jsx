"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const md_1 = require("react-icons/md");
const fa_1 = require("react-icons/fa");
const react_icons_1 = require("react-icons");
const HomePage_styled_1 = require("./HomePage.styled");
const HomePage = () => {
    return (<HomePage_styled_1.PageWrapper>
      <HomePage_styled_1.IconWrapper>
        <react_icons_1.IconContext.Provider value={{ color: '#0c005a', size: '60px' }}>
          <md_1.MdContactPhone />
        </react_icons_1.IconContext.Provider>
      </HomePage_styled_1.IconWrapper>
      <HomePage_styled_1.PageTitle>Phonebook</HomePage_styled_1.PageTitle>
      <HomePage_styled_1.InvitationTitle>Save your contacts here!</HomePage_styled_1.InvitationTitle>
      <react_icons_1.IconContext.Provider value={{ color: '#0c005a', size: '20px' }}>
        <HomePage_styled_1.IconWrapper>
          <fa_1.FaUserPlus />
        </HomePage_styled_1.IconWrapper>
        <HomePage_styled_1.AuthLink to="register">Registration</HomePage_styled_1.AuthLink>
        <HomePage_styled_1.Text>Already have an account?</HomePage_styled_1.Text>
        <HomePage_styled_1.IconWrapper>
          <fa_1.FaUserCheck />
        </HomePage_styled_1.IconWrapper>
      </react_icons_1.IconContext.Provider>
      <HomePage_styled_1.AuthLink to="login">Login</HomePage_styled_1.AuthLink>
    </HomePage_styled_1.PageWrapper>);
};
exports.default = HomePage;
