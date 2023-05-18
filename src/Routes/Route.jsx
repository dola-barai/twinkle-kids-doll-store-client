import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        
      ]
    },
    {
      path: "/login",
      element: <Login></Login>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/register",
      element: <Register></Register>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/allToys",
      element: <PrivateRoute><AllToys></AllToys></PrivateRoute>,
      loader: () => fetch('http://localhost:5000/allToys?limit=20')
    },
    {
      path: "/blogs",
      element: <Blogs></Blogs>
    },
    {
      path: "/view",
      element: <PrivateRoute></PrivateRoute>
    }

  ]);

  export default router;