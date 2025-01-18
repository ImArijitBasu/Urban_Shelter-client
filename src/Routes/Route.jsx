import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Apartments from "../Pages/Home/Apartments";
import Login from "../Pages/Authentications/Login";
import SignUp from "../Pages/Authentications/SignUp";
import Dashboard from "../Layouts/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile";
import PrivateRoute from "./PrivateRoute";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile";
import ManageMembers from "../Pages/Dashboard/Admin/ManageMembers";
import MakeAnnouncements from "../Pages/Dashboard/Admin/MakeAnnouncements";
import AgreementRequests from "../Pages/Dashboard/Admin/AgreementRequests";
import ManageCoupons from "../Pages/Dashboard/Admin/ManageCoupons";
import AdminRoute from "./AdminRoute";
import MemberRoute from "./MemberRoute";
import MakePayment from "../Pages/Dashboard/Member/MakePayment";
import PaymentHistory from "../Pages/Dashboard/Member/PaymentHistory";
import Announcements from "../Pages/Dashboard/Announcements";
import Payment from "../Pages/Dashboard/Member/Payment";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage/>,
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
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      //!Admin routes
      {
        path: "adminProfile",
        element: (
          <AdminRoute>
            <AdminProfile></AdminProfile>
          </AdminRoute>
        ),
      },
      {
        path: "manageMembers",
        element: (
          <AdminRoute>
            <ManageMembers></ManageMembers>
          </AdminRoute>
        ),
      },
      {
        path: "makeAnnouncements",
        element: (
          <AdminRoute>
            <MakeAnnouncements />
          </AdminRoute>
        ),
      },
      {
        path: "agreementRequests",
        element: (
          <AdminRoute>
            <AgreementRequests />
          </AdminRoute>
        ),
      },
      {
        path: "manageCoupons",
        element: (
          <AdminRoute>
            <ManageCoupons />
          </AdminRoute>
        ),
      },
      //!Member routes
      {
        path: "makePayment",
        element: (
          <MemberRoute>
            <MakePayment />
          </MemberRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <MemberRoute>
            <PaymentHistory />
          </MemberRoute>
        ),
      },
      {
        path: "makePayment/payment",
        element: (
          <MemberRoute>
            <Payment/>
          </MemberRoute>
        ),
      },
      //! common routes
      {
        path: 'announcements',
        element: <Announcements></Announcements>
      },
      {
        path: "userProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/dashboard", 
        element: <Navigate to="announcements" replace={true} />
      },
    ],
  },
]);
