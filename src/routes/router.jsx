import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";

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
                path: '/available-foods',
                Component: AvailableFoods
            },
            {
                path: '/auth/login',
                Component: Login

            },
            {
                path: '/auth/register',
                Component: Register

            },
        ]
    },


    {
        path: '*',
        Component: NotFound
    }
])

export default router;