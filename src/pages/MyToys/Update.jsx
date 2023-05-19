import { Label, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom";

const Update = () => {
    const toy = useLoaderData()
    console.log(toy);
    const {id}=useParams();
    console.log(id);
    return (
        <div>
            <form className="modal-box">
                <div className="card flex-shrink-0 mx-9 w-full max-w-sm  bg-base-100">
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
                                name="quantity"
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
                                <label htmlFor="my-modal-6" className="btn">Back</label>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Update;