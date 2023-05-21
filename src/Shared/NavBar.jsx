import { Navbar } from "flowbite-react";
import { useContext, } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../providers/AuthProviders";

const NavBar = () => {
    const { user, logOut, } = useContext(UserContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }


    return (
        <div className="mb-3">
            <Navbar
                fluid={true}
                rounded={true}
                className="lg:px-16 px-6"
            >
                <Navbar.Brand>
                    <img
                        src="https://img.freepik.com/free-vector/gradient-t-logo-template_23-2149371037.jpg?size=626&ext=jpg&ga=GA1.2.24677610.1673838713&semt=ais"
                        className="mr-3 lg:w-14 lg:h-14 w-10  h-10 rounded-full"
                        alt="Toy logo"
                    />
                    <span className="self-center whitespace-nowrap  text-2xl font-bold  dark:text-white bg-gradient-to-r from-blue-600 via-rose-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                        Toy House
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">

                    {
                        user ?
                            <div className='relative group lg:flex'>
                                <img className="rounded-full lg:w-14 lg:h-14 w-10 lg:mr-0 mr-3" src={user?.photoURL} alt="Not Found" />
                                <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md top-0 right-1 absolute
                        -translate-x-14 -translate-y-4  opacity-0 m-4 mx-auto">{user?.displayName}</span>
                            </div>
                            :
                            <NavLink
                                className="btn btn-active btn-primary" to="/login">Login</NavLink>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink className="text-lg">
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? 'text-blue-600 normal-case font-bold tracking-wide transition-colors duration-200 text-md text-lg' : 'hover:text-blue-700 text-lg')}
                        to="/AllToys">
                        All Toys
                    </NavLink>
                    {
                        user && <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 normal-case font-bold tracking-wide transition-colors duration-200 text-md text-lg' : 'hover:text-blue-700 text-lg')} to="/myToys">
                            My Toys
                        </NavLink>
                    }
                    {
                        user && <NavLink
                            className={({ isActive }) => (isActive ? 'text-blue-600 normal-case font-bold tracking-wide transition-colors duration-200 text-md text-lg' : 'hover:text-blue-700 text-lg')}
                            to="/addToys">
                            Add A Toy
                        </NavLink>
                    }
                    <NavLink
                        className={({ isActive }) => (isActive ? 'text-blue-600 normal-case font-bold tracking-wide transition-colors duration-200 text-md text-lg' : 'hover:text-blue-700 text-lg')}
                        to="/blogs">
                        Blogs
                    </NavLink >
                    {
                        user &&
                        <NavLink className="text-lg" onClick={handleLogOut}>
                            Logout
                        </NavLink>}
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default NavBar;