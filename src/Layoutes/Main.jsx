import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Foot from "../Shared/Foot";

const Main = () => {
    return (
        <div className="overflow-hidden">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Main;