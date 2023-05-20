import Banner from "../Banner";
import ChooseProduct from "../ChooseProduct";
import ClientSays from "../Client/ClientSays";
import Gallery from "../Gallery";
import ReactTabs from "../ReactTabs";

const Container = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ReactTabs></ReactTabs>
            <ChooseProduct></ChooseProduct>
            <ClientSays></ClientSays>
        </div>
    );
};

export default Container;