import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Auth/Register/SignUp";
import Login from "../Pages/Auth/Login/Login";
import AllBillsPage from "../Pages/All Bills/AllBillsPage";
import BillDetailsPage from "../Pages/All Bills/BillDetailsPage";
import Error404page from "../Pages/Error/Error404page";
import PrivateRoute from "../Private/PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyProfile from "../Components/MyProfile";
import AddBillsPage from "../Pages/Add Bills/AddBillsPage";
import MyBills from "../Pages/My Bills/MyBills";
import About from "../Pages/Additional/About";
import Contact from "../Pages/Additional/Contact";
import FAQ from "../Pages/Additional/FAQ";
import Blog from "../Pages/Additional/Blog";

const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        errorElement: <Error404page />,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/auth/login',
                Component: Login
            },
            {
                path: '/auth/signup',
                element: SignUp
            },
            {
                path: '/bills/all-bills',
                Component: AllBillsPage,
            },
            {
                path: "/bills/:id",
                loader: ({ params }) => fetch(`${import.meta.env.VITE_base_url}/bills/${params.id}`),
                element: <BillDetailsPage></BillDetailsPage>
            },
            {
                path:'about',
                Component:About
            },
            {
                path:'contact',
                Component:Contact
            },
            {
                path:'faq',
                Component:FAQ
            },
            {
                path:'blog',
                Component:Blog
            }


        ]
    },
    {
        path: '/dashboard',
        errorElement: <Error404page />,
        element: <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
        children: [
            {
               index:true,
                element: <MyProfile />
            },
            {
                path:'my-profile',
                element:<MyProfile/>
            },
            {
                path: 'my-bills',
                element: <MyBills />
            },
            {
                path: 'add-bills',
                element: <AddBillsPage />
            },
        ]

    }

])

export default router