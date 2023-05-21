import Marquee from 'react-fast-marquee'

const Marque = () => {
    return (
        <div  data-aos="flip-left" className='flex mt- lg:mx-24 px-6'>
            <button className="outline outline-2 lg:outline-rose-600 lg:px-6 px-3 py-0.5 lg:py-2 font-semibold lg:text-lg text-rose-600 rounded-l hover:bg-rose-600 hover:text-white">latest</button>
            <Marquee className='lg:text-lg text-sm text-rose-600 lg:font-normal font-semibold' speed={15}>
            Entertainment News International (ENI) is the #1 popular culture network for adult fans all around the world. Get the scoop on all the popular comics.......
            Entertainment News International (ENI) is the #1 popular culture network for adult fans all around the world. Get the scoop on all the popular comics.......
            Entertainment News International (ENI) is the #1 popular culture network for adult fans all around the world. Get the scoop on all the popular comics.......
            Entertainment News International (ENI) is the #1 popular culture network for adult fans all around the world. Get the scoop on all the popular comics.......
                
            </Marquee>
        </div>
    );
};

export default Marque;