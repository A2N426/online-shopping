import { Button, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Page } from "../../CustomHook/hook";

const AllToys = () => {
    const [searchText, setSearchText] = useState("");
    const [toys, setToys] = useState([])

    Page({ title: "all toy" })

    useEffect(() => {
        fetch("https://toy-house-server.vercel.app/allToys")
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [])

    const handleSearch = () => {
        fetch(`https://toy-house-server.vercel.app/getToyByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    };

    return (
        <div>
            <div className="overflow-x-auto">
                <div className="flex justify-center mb-10">
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

                <table className="table table-zebra w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th className="text-lg">SL</th>
                            <th>Seller</th>
                            <th>Name</th>
                            <th>Category</th>
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
                                            className="btn btn-outline btn-sm btn-info">view details</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;