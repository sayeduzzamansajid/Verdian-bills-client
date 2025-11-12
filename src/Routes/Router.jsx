import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/auth/login',
                Component: Login
            },
            {
                path:'/auth/signup',
                Component: SignUp
            }
        ]
    }
])

export default router