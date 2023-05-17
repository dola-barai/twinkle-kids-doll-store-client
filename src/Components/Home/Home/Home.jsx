
import Navbar from "../../../Shared/Navbar/Navbar";
import Footer from "../../../Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import Container from "./Container/Container";

const Home = () => {
    return (
        <div className="mx-5 mt-5">
            <Navbar></Navbar>
            <Container></Container>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;