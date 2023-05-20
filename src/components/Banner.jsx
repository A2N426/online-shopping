import toy from '../assets/toy1.jpg'

const Banner = () => {
    return (
        <div data-aos="zoom-out-down">
            <div className="carousel w-full lg:h-[600px] h-[300px] mt-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={toy} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full flex bg-gradient-to-r from-[#0e4655] to-[rgba(31, 31, 31, 0)] lg:left-0 lg:p-28 p-5 top-0">
                        <div className='text-white lg:w-1/2'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>TOY SHOP</h1>
                            <h3 className='lg:text-3xl font-mono lg:mt-1'>FOR THE HOLIDAY</h3>
                            <h1 className='lg:text-6xl text-2xl'>50% OFF</h1>
                            <p className='mt-3 mb-1 lg:mb-4  lg:text-xl text-sm lg:mr-0 mr-28'>Hot prices on the hottest toy.Figures are not good for the toy industry in recent years. Competition from ecommerce and cheaper products made in China has.</p>
                            <button className="outline outline-1 lg:font-semibold font-extralight outline-white hover:btn hover:btn-secondary hover:outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32">More info</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:gap-0 gap-10 right-5 lg:top-1/2 top-5 ">
                        <a href="#slide4" className="lg:btn lg:btn-circle lg:hover:bg-yellow-500">❮</a>
                        <a href="#slide2" className="lg:btn lg:btn-circle lg:hover:bg-yellow-500">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.pexels.com/photos/207607/pexels-photo-207607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full flex bg-gradient-to-r from-[#0e4655] to-[rgba(31, 31, 31, 0)] lg:left-0 lg:p-28 p-5 top-0">
                        <div className='text-white lg:w-1/2'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>TOY SHOP</h1>
                            <h3 className='lg:text-3xl font-mono lg:mt-1'>FOR THE HOLIDAY</h3>
                            <h1 className='lg:text-6xl text-2xl'>50% OFF</h1>
                            <p className='mt-3 mb-1 lg:mb-4  lg:text-xl text-sm lg:mr-0 mr-28'>Hot prices on the hottest toy.Figures are not good for the toy industry in recent years. Competition from ecommerce and cheaper products made in China has.</p>
                            <button className="outline outline-1 lg:font-semibold font-extralight outline-white hover:btn hover:btn-primary hover:outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32">More info</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:gap-0 gap-10 right-5 lg:top-1/2 top-5 ">
                        <a href="#slide1" className="lg:btn lg:btn-circle lg:hover:bg-yellow-500">❮</a>
                        <a href="#slide3" className="lg:btn lg:btn-circle lg:hover:bg-yellow-500">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-vector/christmas-toys-background-flat-design_23-2148350472.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full flex bg-gradient-to-r from-[#0e4655] to-[rgba(31, 31, 31, 0)] lg:left-0 lg:p-28 p-5 top-0">
                        <div className='text-white lg:w-1/2'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>TOY SHOP</h1>
                            <h3 className='lg:text-3xl font-mono lg:mt-1'>FOR THE HOLIDAY</h3>
                            <h1 className='lg:text-6xl text-2xl'>50% OFF</h1>
                            <p className='mt-3 mb-1 lg:mb-4  lg:text-xl text-sm lg:mr-0 mr-28'>Hot prices on the hottest toy.Figures are not good for the toy industry in recent years. Competition from ecommerce and cheaper products made in China has.</p>
                            <button className="outline outline-1 lg:font-semibold font-extralight outline-white hover:btn hover:btn-primary hover:outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32">More info</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:gap-0 gap-10 right-5 lg:top-1/2 top-5 ">
                        <a href="#slide2" className="lg:btn lg:btn-circle lg:hover:bg-yellow-500">❮</a>
                        <a href="#slide4" className="lg:btn lg:btn-circle lg:hover:bg-yellow-500">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-vector/flat-design-christmas-toy-collection_23-2148745483.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full flex bg-gradient-to-r from-[#0e4655] to-[rgba(31, 31, 31, 0)] lg:left-0 lg:p-28 p-5 top-0">
                        <div className='text-white lg:w-1/2'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>TOY SHOP</h1>
                            <h3 className='lg:text-3xl font-mono lg:mt-1'>FOR THE HOLIDAY</h3>
                            <h1 className='lg:text-6xl text-2xl'>50% OFF</h1>
                            <p className='mt-3 mb-1 lg:mb-4  lg:text-xl text-sm lg:mr-0 mr-28'>Hot prices on the hottest toy.Figures are not good for the toy industry in recent years. Competition from ecommerce and cheaper products made in China has.</p>
                            <button className="outline outline-1 lg:font-semibold font-extralight outline-white hover:btn hover:btn-primary hover:outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32">More info</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:gap-0 gap-10 right-5 lg:top-1/2 top-5 ">
                        <a href="#slide3" className="lg:btn lg:btn-circle lg:hover:bg-yellow-500">❮</a>
                        <a href="#slide5" className="lg:btn lg:btn-circle lg:hover:bg-yellow-500">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-vector/toys-icons-set_1284-3024.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full flex bg-gradient-to-r from-[#0e4655] to-[rgba(31, 31, 31, 0)] lg:left-0 lg:p-28 p-5 top-0">
                        <div className='text-white lg:w-1/2'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>TOY SHOP</h1>
                            <h3 className='lg:text-3xl font-mono lg:mt-1'>FOR THE HOLIDAY</h3>
                            <h1 className='lg:text-6xl text-2xl'>50% OFF</h1>
                            <p className='mt-3 mb-1 lg:mb-4  lg:text-xl text-sm lg:mr-0 mr-28'>Hot prices on the hottest toy.Figures are not good for the toy industry in recent years. Competition from ecommerce and cheaper products made in China has.</p>
                            <button className="outline outline-1 lg:font-semibold font-extralight outline-white hover:btn hover:btn-primary hover:outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32">More info</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:gap-0 gap-10 right-5 lg:top-1/2 top-5 ">
                        <a href="#slide4" className="lg:btn lg:btn-circle lg:hover:bg-yellow-500">❮</a>
                        <a href="#slide6" className="lg:btn lg:btn-circle lg:hover:bg-yellow-500">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/toys-collection_488220-24457.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full flex bg-gradient-to-r from-[#0e4655] to-[rgba(31, 31, 31, 0)] lg:left-0 lg:p-28 p-5 top-0">
                        <div className='text-white lg:w-1/2'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>TOY SHOP</h1>
                            <h3 className='lg:text-3xl font-mono lg:mt-1'>FOR THE HOLIDAY</h3>
                            <h1 className='lg:text-6xl text-2xl'>50% OFF</h1>
                            <p className='mt-3 mb-1 lg:mb-4  lg:text-xl text-sm lg:mr-0 mr-28'>Hot prices on the hottest toy.Figures are not good for the toy industry in recent years. Competition from ecommerce and cheaper products made in China has.</p>
                            <button className="outline outline-1 lg:font-semibold font-extralight outline-white hover:btn hover:btn-primary hover:outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32">More info</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:gap-0 gap-10 right-5 lg:top-1/2 top-5 ">
                        <a href="#slide4" className="lg:btn lg:btn-circle lg:hover:bg-yellow-500">❮</a>
                        <a href="#slide6" className="lg:btn lg:btn-circle lg:hover:bg-yellow-500">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={toy} className="w-full rounded-xl" />
                    <div className="absolute rounded-xl h-full flex bg-gradient-to-r from-[#0e4655] to-[rgba(31, 31, 31, 0)] lg:left-0 lg:p-28 p-5 top-0">
                        <div className='text-white lg:w-1/2'>
                            <h1 className='lg:text-6xl text-2xl font-bold'>TOY SHOP</h1>
                            <h3 className='lg:text-3xl font-mono lg:mt-1'>FOR THE HOLIDAY</h3>
                            <h1 className='lg:text-6xl text-2xl'>50% OFF</h1>
                            <p className='mt-3 mb-1 lg:mb-4  lg:text-xl text-sm lg:mr-0 mr-28'>Hot prices on the hottest toy.Figures are not good for the toy industry in recent years. Competition from ecommerce and cheaper products made in China has.</p>
                            <button className="outline outline-1 lg:font-semibold font-extralight outline-white hover:btn hover:btn-primary hover:outline-none p-2 lg:p-3 rounded-lg lg:w-36 w-32">More info</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-5 lg:gap-0 gap-10 right-5 lg:top-1/2 top-5 ">
                        <a href="#slide5" className="lg:btn lg:btn-circle lg:hover:bg-yellow-500">❮</a>
                        <a href="#slide1" className="lg:btn lg:btn-circle lg:hover:bg-yellow-500">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

