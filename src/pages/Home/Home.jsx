import { Page } from "../../CustomHook/hook";
import Banner from "../../components/Banner";
import ToyTabs from "../../components/ToyTabs";

const Home = () => {
    Page({title:"Home"})
    return (
        <div>
            <Banner></Banner>
            <ToyTabs></ToyTabs>
        </div>
    );
};

export default Home;