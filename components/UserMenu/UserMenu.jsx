"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserMenu_styled_1 = require("./UserMenu.styled");
const authApi_1 = require("redux/authentication/authApi");
const authSelectors_1 = require("../../redux/authentication/authSelectors");
const hooks_1 = require("hooks");
const UserMenu = () => {
    const name = (0, hooks_1.useAppSelector)(authSelectors_1.getUserName);
    const token = (0, hooks_1.useAppSelector)(authSelectors_1.getToken);
    const [logOut] = (0, authApi_1.useLogOutMutation)();
    return (<div>
      <UserMenu_styled_1.LogOutBtn onClick={() => {
            logOut(token);
        }}>
        LogOut
      </UserMenu_styled_1.LogOutBtn>
      <UserMenu_styled_1.WelcomeText>
        <UserMenu_styled_1.UserEmail>{name},</UserMenu_styled_1.UserEmail>welcome to your
      </UserMenu_styled_1.WelcomeText>
    </div>);
};
exports.default = UserMenu;
