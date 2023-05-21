import Marquee from 'react-fast-marquee'

const Marque = () => {
    return (
        <div className='flex mt-3 lg:mx-24 px-6'>
            <button className="outline outline-2 lg:outline-primary lg:px-6 px-3 py-0.5 lg:py-2 font-semibold lg:text-lg text-primary rounded-l hover:bg-primary hover:text-white">latest</button>
            <Marquee className='lg:text-lg text-sm text-primary lg:font-normal font-semibold' speed={50}>
            Entertainment News International (ENI) is the #1 popular culture network for adult fans all around the world. Get the scoop on all the popular comics.......
            Entertainment News International (ENI) is the #1 popular culture network for adult fans all around the world. Get the scoop on all the popular comics.......
            Entertainment News International (ENI) is the #1 popular culture network for adult fans all around the world. Get the scoop on all the popular comics.......
            Entertainment News International (ENI) is the #1 popular culture network for adult fans all around the world. Get the scoop on all the popular comics.......
                
            </Marquee>
        </div>
    );
};

export default Marque;