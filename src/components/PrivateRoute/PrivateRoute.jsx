import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from "redux/AuthSlice/AuthSlice";

export default function PrivateRoute({ children }) {
    const isLoggedIn = useSelector(getIsLoggedIn);
    
   return (isLoggedIn ? children : <Navigate to="/" />)

}