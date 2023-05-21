import { Page } from "../../CustomHook/hook";
import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import Marque from "../../components/Marque";
import Service from "../../components/Service";
import ToyTabs from "../../components/ToyTabs";
import Trending from "../../components/Trending";

const Home = () => {
    Page({ title: "Home" })
    return (
        <div >
            <Marque></Marque>
            <Banner></Banner>
            <div className="lg:px-24 p-6">
                <Gallery></Gallery>
                <ToyTabs></ToyTabs>
                <Trending></Trending>
                <Service></Service>
            </div>
        </div>
    );
};

export default Home;