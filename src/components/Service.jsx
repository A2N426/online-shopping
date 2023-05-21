import { FaDribbbleSquare, FaDropbox, FaDraft2Digital, FaDochub, FaDiscourse, FaCuttlefish } from 'react-icons/fa';


const Service = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center"><span>Our</span> <span className="text-red-600">Services</span></h1>
            <p className="text-center font-semibold mt-2">Online service available and offline service available from this shop.</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5 mb-10">
                <div className="card bg-base-100 shadow-xl text-center">
                    <div className="card-body">
                        <FaDribbbleSquare className='text-5xl text-primary mx-auto' />
                        <h2 className="text-2xl font-semibold">ONLINE</h2>
                        <p>If you need online shop its possible with our. you can.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-active btn-secondary ">Ream More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl text-center">
                    <div className="card-body">
                        <FaDiscourse className='text-5xl text-primary mx-auto' />
                        <h2 className="text-2xl font-semibold">OFFLINE</h2>
                        <p>If you need online shop its possible with our. you can.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline btn-info ">Ream More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl text-center">
                    <div className="card-body">
                        <FaDochub className='text-5xl text-primary mx-auto' />
                        <h2 className="text-2xl font-semibold">MORE LINE</h2>
                        <p>If you need online shop its possible with our. you can.</p>
                        <div className="card-actions justify-center">
                            <button className="btn  btn-active btn-secondary">Ream More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl text-center">
                    <div className="card-body">
                        <FaDropbox className='text-5xl text-primary mx-auto' />
                        <h2 className="text-2xl font-semibold">RAIL LINE</h2>
                        <p>If you need online shop its possible with our. you can.</p>
                        <div className="card-actions justify-center">
                            <button className="btn  btn-active btn-secondary">Ream More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl text-center">
                    <div className="card-body">
                        <FaDraft2Digital className='text-5xl text-primary mx-auto' />
                        <h2 className="text-2xl font-semibold">ONLINE</h2>
                        <p>If you need online shop its possible with our. you can.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline btn-info ">Ream More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl text-center">
                    <div className="card-body">
                        <FaCuttlefish className='text-5xl text-primary mx-auto' />
                        <h2 className="text-2xl font-semibold">ALL SERVICES</h2>
                        <p>If you need online shop its possible with our. you can.</p>
                        <div className="card-actions justify-center">
                            <button className="btn  btn-active btn-secondary ">Ream More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;