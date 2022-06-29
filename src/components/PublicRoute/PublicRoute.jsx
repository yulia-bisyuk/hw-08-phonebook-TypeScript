import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redux/AuthSlice/AuthSlice";

export default function PublicRoute({ children, restricted, navigateTo }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
   
    return (shouldRedirect ? <Navigate to={navigateTo} /> : children)

}