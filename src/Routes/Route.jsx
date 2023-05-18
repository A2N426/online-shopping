import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutes/Main";
import Home from "../pages/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "myToys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: "addToys",
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            }
        ]
    }
]);

export default router;