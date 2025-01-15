import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Apartments from "../Pages/Home/Apartments";
import Login from "../Pages/Authentications/Login";
import SignUp from "../Pages/Authentications/SignUp";
import Dashboard from "../Layouts/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "apartments",
        element: <Apartments></Apartments>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "signup",
        element: <SignUp/>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
        {
            path: "userProfile",
            element: <MyProfile></MyProfile>
        }
    ]
  }
]);
