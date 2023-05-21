import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Page } from "../../CustomHook/hook";
import { Button, TextInput } from "flowbite-react";
import { FaAngleDoubleRight } from 'react-icons/fa';
import Marque from "../../components/Marque";

const AllToys = () => {
    const [searchText, setSearchText] = useState("");
    const [toys, setToys] = useState([])
    const { totalToys } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [toyPerPage, setToyPerPage] = useState(20);

    const totalPage = Math.ceil(totalToys / toyPerPage)

    const pageNumbers = [...Array(totalPage).keys()];

    Page({ title: "all toy" })

    useEffect(() => {
        fetch(`https://toy-house-server.vercel.app/allToys?page=${currentPage}&limit=${toyPerPage}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [currentPage, toyPerPage])

    const handleSearch = () => {
        fetch(`https://toy-house-server.vercel.app/getToyByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    };

    const options = [5, 10, 15, 20]

    const handleSelectChange = event => {
        setToyPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    }

    return (
        <div className="lg:px-24 p-6 mb-20">
            <Marque></Marque>
            <div className="flex mt-10 justify-center mb-10">
                <div className="flex">
                    <TextInput
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
                        placeholder="Search your product"
                        required={true}
                    />
                    <Button
                        onClick={handleSearch}
                        gradientDuoTone="purpleToBlue">
                        Search
                    </Button>
                </div>
            </div>
            <div className="overflow-x-auto
                 rounded-lg">


                <table className="table table-zebra w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th className="text-lg">SL</th>
                            <th>Seller</th>
                            <th>Name</th>
                            <th>SUb-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View in details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toys.map((toy, index) => (
                                <tr data-aos="zoom-in-right" key={toy._id}>
                                    <th>{index + 1}</th>
                                    <td>{toy?.seller}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.category}</td>
                                    <td>${toy.price}</td>
                                    <td>{toy.available_quantity}</td>
                                    <td>
                                        <Link
                                            to={`/details/${toy._id}`}
                                            className="btn btn-sm btn-active btn-primary text-white">view details</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {/* pagination */}
                <div className="w-1/6 mx-auto mt-5 flex justify-center">
                    {
                        pageNumbers.map(number => <button className={`border px-4 py-2 rounded-md text-lg ${number === currentPage && "bg-blue-600 text-white"}`}
                            key={number}
                            onClick={() => setCurrentPage(number)}
                        >
                            <FaAngleDoubleRight/>
                        </button>)
                    }

                    <select
                        value={toyPerPage}
                        onChange={handleSelectChange}
                        className="rounded-md"
                    >
                        {
                            options.map(option => <option
                                key={option}
                                value={option}
                            >
                                {option}
                            </option>)
                        }
                    </select>
                </div>
            </div>
        </div>
    );
};

export default AllToys;