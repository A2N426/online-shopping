import { useContext } from "react";
import { UserContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const location = useLocation();

    if (loading) {
        return <Button className="mx-auto" color="gray">
            <Spinner
                aria-label="Extra large spinner example"
                size="xl"
            />
            <span className="pl-3">
                Loading...
            </span>
        </Button>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;