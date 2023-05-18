import { useContext } from "react";
import { UserContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(UserContext);
    const location = useLocation();

    if(loading){
        return <h1>Loading</h1>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;