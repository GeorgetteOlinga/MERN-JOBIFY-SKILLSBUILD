import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
} from "./pages";

const paths = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
errorElement:<Error />,
    children: [

      {
index: true,
element:<Landing/>

      },
  {
    path: "register",
    element: <Register Page/>,
  },

  {
    path: "login",
    element: <Login />,
  },

  {
    path: "dashboard",
    element: <DashboardLayout />,
  },

    ]

  },

]);



const App = () => {
  return <RouterProvider router={paths} />;
};

export default App;
