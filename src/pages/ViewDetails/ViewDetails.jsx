import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Page } from "../../CustomHook/hook";

const ViewDetails = () => {
    const toy = useLoaderData();
    const { name, img, category, price, rating, available_quantity, description } = toy
    Page({title:"view details"})

    return (
        <div className="lg:px-24 p-6">
            <div className="card mt-10 mb-20 font-thin lg:card-side bg-base-100 shadow-2xl lg:p-5">
                <figure data-aos="zoom-in-right" className="lg:w-1/2"><img className="rounded-lg" src={img} alt="Album" /></figure>
                <div data-aos="zoom-in-left" className="card-body lg:w-1/2">
                    <h2 className="text-3xl font-semibold">{name}</h2>
                    <p className="font-semibold">{description}</p>
                    <p><span className="font-semibold  text-2xl">Category:</span> <span className="font-serif text-lg">{category}</span></p>
                    <p><span className="font-semibold text-xl">Price:</span> <span className="font-serif">${price}</span></p>
                    <p><span className="text-xl font-semibold">Available quantity:</span> <span className="font-semibold font-serif">{available_quantity}</span></p>
                    <Rating style={{ maxWidth: 140 }} value={parseInt(rating)} />
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;