import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";
import Foot from "../Shared/Foot";

const Main = () => {
    return (
        <div className="lg:px-28 px-6">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Main;