import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand>
                    <img
                        src="https://img.freepik.com/free-vector/gradient-t-logo-template_23-2149372726.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais"
                        className="mr-3 lg:w-14 lg:h-14 h-9 rounded-full"
                        alt="Toy logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Toy House
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <h1>Profile</h1>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink >
                        Home
                    </NavLink>
                    <NavLink to="/login">
                        All Toys
                    </NavLink>
                    <NavLink to="/login">
                        My Toys
                    </NavLink>
                    <NavLink to="/login">
                        Add A Toy
                    </NavLink>
                    <NavLink to="/login">
                        Blogs
                    </NavLink>
                    <NavLink to="/login">
                        Logout
                    </NavLink>
                    <NavLink to="/login">
                        Login
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default NavBar;