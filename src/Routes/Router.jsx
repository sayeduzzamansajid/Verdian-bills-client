import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import AllBillsPage from "../Pages/AllBillsPage";
import MyProfile from "../Components/MyProfile";
import PrivateRoute from "../Private/PrivateRoute";
import BillDetailsPage from "../Pages/BillDetailsPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
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
                Component: SignUp
            },
            {
                path: '/bills/all-bills',
                Component: AllBillsPage,
            },
            {
                path: "/bills/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/bills/${params.id}`),
                element: <PrivateRoute>
                    <BillDetailsPage></BillDetailsPage>
                </PrivateRoute>
            },
            {
                path: "my-profile",
                element: <PrivateRoute>
                    <MyProfile/>
                </PrivateRoute>
            }
        ]
    }
])

export default router