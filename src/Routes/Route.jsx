import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoutes/Main";
import Home from "../pages/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyToys from "../pages/MyToys/MyToys";
import AddToys from "../pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import Update from "../pages/MyToys/Update";
import ViewDetails from "../pages/ViewDetails/ViewDetails";

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
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader:({params})=>fetch(`http://localhost:5000/allToys/${params.id}`)
            },
            {
                path:"/details",
                element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
            }
        ]
    }
]);

export default router;