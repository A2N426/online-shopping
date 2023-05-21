import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabsCard from './TabsCard';


const ToyTabs = () => {
    const [toys, setToys] = useState([])
    const [active, setActive] = useState("sports car")

    useEffect(() => {
        fetch(`https://toy-house-server.vercel.app/allToysByCategory/${active}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [active])

    const handleTabClick = (tabName) => {
        setActive(tabName)
    }
    return (
        <div className='mt-16'>
            <h1 className='text-center text-4xl font-semibold'>Shop By <span className=' underline'>Sub  Category</span>  </h1>
            <div className='mt-5 flex justify-center'>
                <Tabs className="w-full ">
                    <TabList className="flex justify-between mb-5 border-2 border-blue-600 rounded-md">
                        <Tab className="
                        cursor-pointer lg:px-20 p-2 py-5 
                        border
                        focus:font-semibold 
                        outline
                        outline-1
                        focus:outline-4
                        outline-blue-600 
                        focus:text-white lg:text-lg font-semibold focus:bg-slate-100" onClick={() => handleTabClick("sports car")} ><span className='text-blue-600'>Sports Car</span></Tab>
                        <Tab className="cursor-pointer lg:px-20 p-2 py-5 
                        border
                        focus:font-semibold
                        outline
                        outline-1
                        focus:outline-4
                        outline-blue-600 focus:text-blue text-lg font-semibold focus:bg-slate-100" onClick={() => handleTabClick("regular car")}><span className='text-blue-600'>Regular Car</span></Tab>
                        <Tab className="cursor-pointer lg:px-20 p-2 py-5 
                        border
                        focus:font-semibold 
                        outline
                        outline-1
                        focus:outline-4
                        outline-blue-600 focus:text-blue text-lg font-semibold focus:bg-slate-100" onClick={() => handleTabClick("truck")}><span className='text-blue-600'>Super Car</span></Tab>
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
        </div>
    );
};

export default ToyTabs;