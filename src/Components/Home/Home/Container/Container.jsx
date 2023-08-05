import useTitle from "../../../../hook/useTitle";
import Banner from "../Banner";
import ChooseProduct from "../ChooseProduct";
import ClientSays from "../Client/ClientSays";
import Gallery from "../Gallery";
import ReactTabs from "../ReactTabs";
import Shipping from "../Shipping";

const Container = () => {
    useTitle('Twinkle Kids Doll Store | Home')
    return (
        <div>
            <Banner></Banner>
            <Shipping></Shipping>
            <Gallery></Gallery>
            <ReactTabs></ReactTabs>
            <ChooseProduct></ChooseProduct>
            <ClientSays></ClientSays>
        </div>
    );
};

export default Container;