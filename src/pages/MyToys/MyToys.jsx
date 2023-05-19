import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Page } from "../../CustomHook/hook";

const MyToys = () => {
    const { user } = useContext(UserContext)
    const [myToys, setMyToys] = useState([]);
    Page({title:"my toy"})

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user?.email}`)
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
                fetch(`http://localhost:5000/allToys/${id}`, {
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

    return (
        <div>
            <table className="table w-full">
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
                            <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <td>{toy?.seller}</td>
                                <td>{toy.name}</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.available_quantity}</td>
                                <td>
                                    <Link to={`/details/${toy._id}`} className="btn btn-xs">View Details</Link>
                                </td>
                                <td>
                                    <Link to={`/update/${toy._id}`}   className="btn btn-xs">Update</Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(toy._id)} className="btn btn-xs">Delete</button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div >
    );
};

export default MyToys;