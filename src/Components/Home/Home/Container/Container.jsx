import useTitle from "../../../../hook/useTitle";
import Banner from "../Banner";
import Brand from "../Brand";
import ChooseProduct from "../ChooseProduct";
import ClientSays from "../Client/ClientSays";
import Contact from "../Contact";
import Gallery from "../Gallery";
import NewCollection from "../NewCollection";
import ReactTabs from "../ReactTabs";
import Shipping from "../Shipping";
import ShopNow from "../ShopNow";

const Container = () => {
    useTitle('Twinkle Kids Doll Store | Home')
    return (
        <div>
            <Banner></Banner>
            <Shipping></Shipping>
            <Gallery></Gallery>
            <NewCollection></NewCollection>
            <ReactTabs></ReactTabs>
            <Brand></Brand>
            <ChooseProduct></ChooseProduct>
            <ShopNow></ShopNow>
            <ClientSays></ClientSays>
            <Contact></Contact>
        </div>
    );
};

export default Container;