// import { useNavigate } from "react-router-dom";
import { WelcomeText, UserEmail, LogOutBtn } from "./UserMenu.styled";
import { useLogOutMutation } from 'redux/AuthOperations/AuthOperations';
import { getUserName, getToken } from '../../redux/AuthSlice/AuthSlice';
import { useSelector } from "react-redux";


const UserMenu = () => {
    const name = useSelector(getUserName);
    const token = useSelector(getToken)
    // const navigate = useNavigate();
    const [logOut] = useLogOutMutation();
    
    return (
        <div>
            <LogOutBtn onClick={() => {
                logOut(token);
                // navigate('/');
            }}>LogOut</LogOutBtn>
            <WelcomeText><UserEmail>{name},</UserEmail>welcome to your</WelcomeText>
            
        </div>
    )
};

export default UserMenu;