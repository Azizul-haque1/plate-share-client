import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import PrivateRouter from "./PrivateRouter";
import AddFood from "../pages/AddFood/AddFood";
import ManageMyFood from "../pages/ManageMyFood/ManageMyFood";
import MyFoodRequest from "../pages/MyFoodRequest/MyFoodRequest";
import MyProfile from "../pages/MyProfile/MyProfile";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import Overview from "../pages/Dashboard/Overview";

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
                path: '/foods/:id',
                element:
                    <FoodDetails />

            },
            {
                path: '/about',
                element: <About />

            },
            {
                path: '/contact',
                element: <Contact />

            },


            {
                path: '/dashboard/add-food',
                element: <PrivateRouter>
                    <AddFood />
                </PrivateRouter>
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
        path: 'dashboard',
        element: <PrivateRouter>
            <DashboardLayout></DashboardLayout>
        </PrivateRouter>,
        children: [
            {
                index: true,
                element: <Overview />
            },
            {
                path: 'my-profile',
                element: <PrivateRouter>
                    <MyProfile />
                </PrivateRouter>
            },

            {
                path: 'my-food-request',
                element: <PrivateRouter>
                    <MyFoodRequest />
                </PrivateRouter>
            },



        ]
    },


    {
        path: '*',
        Component: NotFound
    }
])

export default router;