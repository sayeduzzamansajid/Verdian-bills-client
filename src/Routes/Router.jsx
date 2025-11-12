import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AllBillsPage from "../Pages/AllBillsPage";
import MyProfile from "../Components/MyProfile";

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
            },
            {
                path:'bills/all-bills',
                Component:AllBillsPage,
            },
            {
                path:"my-profile",
                Component:MyProfile
            }
        ]
    }
])

export default router