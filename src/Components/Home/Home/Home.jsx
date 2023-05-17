
import Navbar from "../../../Shared/Navbar/Navbar";
import Footer from "../../../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div className="mx-10 mt-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;