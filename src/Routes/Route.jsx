import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/AllToys";

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
      element: <PrivateRoute><AllToys></AllToys></PrivateRoute>
    }

  ]);

  export default router;