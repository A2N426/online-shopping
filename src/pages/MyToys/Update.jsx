import { Label, Textarea } from "flowbite-react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Page } from "../../CustomHook/hook";
const Update = () => {
    const toy = useLoaderData()
    const { _id } = toy;
    Page({title:"update toy"})

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const price = form.price.value;
        const available_quantity = form.available_quantity.value;
        const description = form.description.value;
        const updatedInfo = { price, available_quantity, description };

        fetch(`https://toy-house-server.vercel.app/allToys/${_id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Update Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }

    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className="flex justify-center">
            <form onSubmit={handleSubmit} className="modal-box">
                <div className="card flex-shrink-0 lg:mx-9 w-full max-w-sm  bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text"
                                name="price"
                                defaultValue={toy.price}
                                placeholder="New Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="text"
                                name="available_quantity"
                                defaultValue={toy.available_quantity} placeholder="Available quantity" className="input input-bordered" />
                            <div id="textarea">
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="comment"
                                        value="Toy Description"
                                    />
                                </div>
                                <Textarea
                                    id="comment"
                                    name="description"
                                    defaultValue={toy.description}
                                    placeholder="Write toy description..."
                                    required={true}
                                    rows={4}
                                />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="form-control mt-6 w-1/2">
                                <button type="submit" className="btn btn-primary">Update</button>
                            </div>
                            <div className="modal-action">
                                <Link to="/myToys" htmlFor="my-modal-6" className="btn">Back</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Update;