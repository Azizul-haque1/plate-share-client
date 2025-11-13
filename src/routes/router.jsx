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
                element: <PrivateRouter>
                    <FoodDetails />
                </PrivateRouter>
            },
            {
                path: '/my-profile',
                element: <PrivateRouter>
                    <MyProfile />
                </PrivateRouter>
            },
            {
                path: '/add-food',
                element: <PrivateRouter>
                    <AddFood />
                </PrivateRouter>
            },
            {
                path: '/manage-my-food',
                element: <PrivateRouter>
                    <ManageMyFood />
                </PrivateRouter>
            },
            {
                path: '/my-food-request',
                element: <PrivateRouter>
                    <MyFoodRequest />
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
        path: '*',
        Component: NotFound
    }
])

export default router;