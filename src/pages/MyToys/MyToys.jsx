import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Page } from "../../CustomHook/hook";
import { Button } from "flowbite-react";

const MyToys = () => {
    const { user } = useContext(UserContext)
    const [myToys, setMyToys] = useState([]);
    Page({ title: "my toy" })

    useEffect(() => {
        fetch(`https://toy-house-server.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [user])

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-house-server.vercel.app/allToys/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(
                            'Deleted!',
                            'Your Toy has been deleted.',
                            'success'
                        )
                        if (data.deletedCount > 0) {
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining)
                        }
                    })

            }
        })


    }

    const handleSortAscending = () => {
        fetch("https://toy-house-server.vercel.app/sortByAscending")
            .then(res => res.json())
            .then(data => setMyToys(data))
    }

    const handleSortDescending = () => {
        fetch("https://toy-house-server.vercel.app/sortByDescending")
            .then(res => res.json())
            .then(data => setMyToys(data))
    }

    return (
        <div>
            <div className="flex gap-5 justify-end mt-5 mb-5">
                <Button onClick={handleSortAscending}>
                    Sort By ascending
                </Button>
                <Button onClick={handleSortDescending}>
                    Sort By descending
                </Button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra  w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Seller</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View in details</th>
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myToys.map((toy, index) => (
                                <tr data-aos="zoom-in-right" key={toy._id}>
                                    <th>{index + 1}</th>
                                    <td>{toy?.seller}</td>
                                    <td>{toy.name}</td>
                                    <td>{toy.category}</td>
                                    <td>${toy.price}</td>
                                    <td>{toy.available_quantity}</td>
                                    <td>
                                        <Link to={`/details/${toy._id}`} className="btn btn-outline btn-sm btn-info">View Details</Link>
                                    </td>
                                    <td>
                                        <Link to={`/update/${toy._id}`} className="btn
                                        btn-sm 
                                        bg-blue-600">Update</Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(toy._id)} className="btn btn-sm btn-outline btn-error">Delete</button>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyToys;