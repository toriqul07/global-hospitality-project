import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import EstatePage from "../pages/EstatePage/EstatePage";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../pages/UserProfile/UserProfile";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import TopProperties from "../pages/TopProperties/TopProperties";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('/estate.json')
        },
        {
          path:'/userprofile',
          element:<UserProfile></UserProfile>
        },
        {
          path:'/updateProfile',
          element:<UpdateProfile></UpdateProfile>
        },
        {
          path:'/estate/:id',
          element:<PrivateRoute><EstatePage></EstatePage></PrivateRoute>,
          loader:()=>fetch('../estate.json')
        },
        {
          path:'/topProperties',
          element:<PrivateRoute><TopProperties></TopProperties></PrivateRoute>,
          loader:()=>fetch('/topProperties.json')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);
  export default router;