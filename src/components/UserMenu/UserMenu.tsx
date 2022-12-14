import { WelcomeText, UserEmail, LogOutBtn } from './UserMenu.styled';
import { useLogOutMutation } from 'redux/authentication/authApi';
import {
  getUserName,
  getToken,
} from '../../redux/authentication/authSelectors';
// import { useSelector } from 'react-redux';
import { useAppSelector } from 'components/App/hooks';

const UserMenu = () => {
  const name = useAppSelector(getUserName);
  const token = useAppSelector(getToken);
  const [logOut] = useLogOutMutation();

  return (
    <div>
      <LogOutBtn
        onClick={() => {
          logOut(token);
        }}
      >
        LogOut
      </LogOutBtn>
      <WelcomeText>
        <UserEmail>{name},</UserEmail>welcome to your
      </WelcomeText>
    </div>
  );
};

export default UserMenu;
