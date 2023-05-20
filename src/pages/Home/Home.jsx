import { Page } from "../../CustomHook/hook";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import Service from "../../components/Service";
import ToyTabs from "../../components/ToyTabs";

const Home = () => {
    Page({title:"Home"})
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyTabs></ToyTabs>
            <Service></Service>
        </div>
    );
};

export default Home;