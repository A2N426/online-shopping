import { FaFileVideo } from 'react-icons/fa';
import code from "../../assets/code.png"
import { FaArrowRight } from 'react-icons/fa';

const Blogs = () => {
    return (
        <div className='lg:px-24 p-6'>
            <div data-aos="flip-left">
                <h1 className="text-5xl font-extrabold uppercase text-center lg:mt-24">That Stuck 4 Question</h1>
                <p className="text-center text-2xl font-mono mt-5">We write about react js concept that is mostly uses.</p>
            </div>
            <div data-aos="zoom-in-up" className='mb-5'>
                <div className="mt-10 border rounded-md lg:p-10 p-5">

                    <div className='flex justify-between'>
                        <p className="flex gap-1 bg-blue-100 w-32 rounded-md lg:font-semibold text-blue-800 lg:p-2 p-1 mb-5"><FaFileVideo className=""></FaFileVideo> <small>Documentations</small>
                        </p>
                        <p className='font-semibold'>7 day ago</p>
                    </div>

                    <h1 className="text-3xl font-semibold hover:underline">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <p className="text-gray-500 mt-5 text-xl">Tokens are pieces of data that carry just enough information to facilitate the process of determining a users identity or authorizing a user to perform an action. All in all, tokens are artifacts that allow application systems to perform the authorization and authentication process.When a user logins in, the authorization server issues an access token, which is an artifact that client applications can use to make secure calls to an API server. When a client application needs to access protected resources on a server on behalf of a user, the access token lets the client signal to the server that it has received authorization by the user to perform certain tasks or access certain resources.</p>
                    <img className="mx-auto mt-10 mb-10 rounded-xl" src={code} alt="" />
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <img className='rounded-full w-10' src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                            <p className='text-lg font-semibold'>Pitter Son</p>
                        </div>
                        <p className='text-blue-700 text-lg gap-2 font-semibold flex items-center'>Read More <FaArrowRight /></p>
                    </div>
                </div>
            </div>
            <div data-aos="flip-up">
                <div className="mt-10 border rounded-md lg:p-10 p-5">

                    <div className='flex justify-between'>
                        <p className="flex gap-1 bg-blue-100 w-32 rounded-md lg:font-semibold text-blue-800 lg:p-2 p-1 mb-5"><FaFileVideo className=""></FaFileVideo> <small>Documentations</small>
                        </p>
                        <p className='font-semibold'>7 day ago</p>
                    </div>

                    <h1 className="text-3xl font-semibold hover:underline">Compare SQL and NoSQL databases?</h1>
                    <p className="text-gray-500 mt-5 text-xl">SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    <img className="mx-auto mt-10 mb-10 rounded-xl" src={code} alt="" />
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <img className='rounded-full w-10' src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                            <p className='text-lg font-semibold'>Pitter Son</p>
                        </div>
                        <p className='text-blue-700 text-lg gap-2 font-semibold flex items-center'>Read More <FaArrowRight /></p>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in">
                <div className="mt-10 border rounded-md lg:p-10 p-5">

                    <div className='flex justify-between'>
                        <p className="flex gap-1 bg-blue-100 w-32 rounded-md lg:font-semibold text-blue-800 lg:p-2 p-1 mb-5"><FaFileVideo className=""></FaFileVideo> <small>Documentations</small>
                        </p>
                        <p className='font-semibold'>7 day ago</p>
                    </div>

                    <h1 className="text-3xl font-semibold hover:underline">What is express js? What is Nest JS?</h1>
                    <p className="text-gray-500 mt-5 text-xl">Express is a minimalist and flexible framework that is easy to use and has a large community of developers. NestJS, on the other hand, is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
                    <img className="mx-auto mt-10 mb-10 rounded-xl" src={code} alt="" />
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <img className='rounded-full w-10' src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                            <p className='text-lg font-semibold'>Pitter Son</p>
                        </div>
                        <p className='text-blue-700 text-lg gap-2 font-semibold flex items-center'>Read More <FaArrowRight /></p>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in-down">
                <div className="mt-10 border rounded-md lg:p-10 p-5">

                    <div className='flex justify-between'>
                        <p className="flex gap-1 bg-blue-100 w-32 rounded-md lg:font-semibold text-blue-800 lg:p-2 p-1 mb-5"><FaFileVideo className=""></FaFileVideo> <small>Documentations</small>
                        </p>
                        <p className='font-semibold'>7 day ago</p>
                    </div>

                    <h1 className="text-3xl font-semibold hover:underline">What is MongoDB aggregate and how does it work?</h1>
                    <p className="text-gray-500 mt-5 text-xl">What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents  all that pass through the pipeline.</p>
                    <img className="mx-auto mt-10 mb-10 rounded-xl" src={code} alt="" />
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <img className='rounded-full w-10' src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                            <p className='text-lg font-semibold'>Pitter Son</p>
                        </div>
                        <p className='text-blue-700 text-lg gap-2 font-semibold flex items-center'>Read More <FaArrowRight /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;