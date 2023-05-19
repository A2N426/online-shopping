import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabsCard from './TabsCard';


const ToyTabs = () => {
    const [toys, setToys] = useState([])
    const [active, setActive] = useState("sports car")

    useEffect(() => {
        fetch(`http://localhost:5000/allToysByCategory/${active}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [active])

    const handleTabClick = (tabName) => {
        setActive(tabName)
    }
    return (
        <div className='mt-20 mb-20 flex justify-center'>
            <Tabs className="w-full">
                <TabList className="flex justify-between mb-10">
                    <Tab className="cursor-pointer border-4 focus:border-none lg:px-10 p-2 py-3 focus:text-2xl focus:font-semibold focus:bg-rose-600 focus:text-white" onClick={() => handleTabClick("sports car")} >Sports Car</Tab>
                    <Tab className="cursor-pointer border-4 focus:border-none lg:px-10 p-2 py-3 focus:text-2xl focus:font-semibold focus:bg-rose-600 focus:text-white" onClick={() => handleTabClick("regular car")}>Regular Car</Tab>
                    <Tab className="cursor-pointer border-4 focus:outline-none focus:border-none lg:px-10 p-2 py-3 focus:text-2xl focus:font-semibold focus:bg-rose-600 focus:text-white" onClick={() => handleTabClick("truck")}>Truck</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid  grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                            toys.map(toy => <TabsCard
                                key={toy._id}
                                toy={toy}
                            ></TabsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                            toys.map(toy => <TabsCard
                                key={toy._id}
                                toy={toy}
                            ></TabsCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                        {
                            toys.map(toy => <TabsCard
                                key={toy._id}
                                toy={toy}
                            ></TabsCard>)
                        }
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    );
};

export default ToyTabs;