import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { Page } from "../../CustomHook/hook";

const MyToys = () => {
    const { user } = useContext(UserContext)
    const [myToys, setMyToys] = useState([]);
    Page({ title: "my toy" })
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`https://toy-house-server.vercel.app/myToys/${user?.email}`,{
            method:"GET",
            headers:{
                authorization:`Bearer ${localStorage.getItem("toy-house-token")}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(!data.error){
                setMyToys(data)
            }
            else{
                navigate("/")
            }
        })
    },[user,navigate])

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
        fetch(`https://toy-house-server.vercel.app/sortByAscending/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }

    const handleSortDescending = () => {
        fetch(`https://toy-house-server.vercel.app/sortByDescending/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }

    return (
        <div className="lg:px-24 p-6 mb-20">
            <h2 className="text-4xl font-bold text-center">All is all our <span className=" underline cursor-pointer bg-gradient-to-r from-blue-600 via-rose-500 to-indigo-400 inline-block text-transparent bg-clip-text">TOY HERE</span></h2>
            <div className="flex gap-5 items-center justify-between mt-5 mb-5">
                
                <button className="btn btn-sm  btn-primary" onClick={handleSortAscending}>
                    Sort By ascending
                </button>
                <button className="btn btn-sm btn-primary" onClick={handleSortDescending}>
                    Sort By descending
                </button>
            </div>
            <div className="overflow-x-auto border-2 rounded-lg">
                <table className="table table-zebra  w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Seller</th>
                            <th>Name</th>
                            <th>Sub-Category</th>
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
                                        <Link to={`/details/${toy._id}`} className="btn btn-outline btn-sm btn-active btn-primary">View Details</Link>
                                    </td>
                                    <td>
                                        <Link to={`/update/${toy._id}`} className="btn
                                        btn-sm 
                                        btn-active
                                        btn-outline btn-accent ">Update</Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(toy._id)} className="btn btn-sm btn-error bg-red-600 text-white">Delete</button>
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