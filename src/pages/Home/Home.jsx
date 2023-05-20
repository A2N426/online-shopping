import { Page } from "../../CustomHook/hook";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import Service from "../../components/Service";
import ToyTabs from "../../components/ToyTabs";
import Trending from "../../components/Trending";

const Home = () => {
    Page({title:"Home"})
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ToyTabs></ToyTabs>
            <Trending></Trending>
            <Service></Service>
        </div>
    );
};

export default Home;