import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import 'react-toastify/dist/ReactToastify.css';
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/MyToys/UpdateToy";

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
      loader: () => fetch('http://localhost:5000/allToys'),
    },
    {
      path: '/allToys/:id',
      element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
      loader: ({params}) => fetch(`https://twinkle-kids-doll-store-server.vercel.app/allToys/${params.id}`)
    },
    {
      path: "/blogs",
      element: <Blogs></Blogs>
    },
    {
      path: "/view",
      element: <PrivateRoute></PrivateRoute>
    },
    {
      path: "/addToy",
      element: <AddToy></AddToy>
    },
    {
      path: "/myToy",
      element: <MyToys></MyToys>,
      loader: () => fetch('https://twinkle-kids-doll-store-server.vercel.app/addToy')
    },
    {
      path: "/updateToy/:id",
      element: <UpdateToy></UpdateToy>,
      loader: ({params}) => fetch(`https://twinkle-kids-doll-store-server.vercel.app/addToy/${params.id}`)
    },

  ]);

  export default router;