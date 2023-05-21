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
import NotFound from "../pages/NotFound/NotFound";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>,
                loader:()=>fetch("https://toy-house-server.vercel.app/totalToys")
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
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-house-server.vercel.app/allToys/${params.id}`)
            },
            {
                path: "/details/:id",
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-house-server.vercel.app/allToys/${params.id}`)
            },
            {
                path:"/blogs",
                element:<Blogs></Blogs>
            }
        ]
    }
]);

export default router;