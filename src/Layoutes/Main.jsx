import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Foot from "../Shared/Foot";

const Main = () => {
    return (
        <div className="overflow-hidden bg-gray-300">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Main;