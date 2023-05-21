import { Button, Card } from "flowbite-react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext } from "react";
import { UserContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const TabsCard = ({ toy }) => {
    const { _id, img, name, price, rating } = toy;
    const { user } = useContext(UserContext);

    const handleDetails = () => {
        if (!user) {
            Swal.fire({
                title: 'Warning!',
                text: 'You have to log in first to view details',
                icon: 'warning',
                confirmButtonText: 'Ok'
            })
        }
    }

    return (
        <div>
            <div className="max-w-sm" data-aos="zoom-out-up">

                <Card
                    imgAlt="That is i a TOY IMAGE"
                    imgSrc={img}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="font-semibold">Price: ${price}</p>
                    <Rating style={{ maxWidth: 140 }} value={parseInt(rating)} />
                    <Link to={`/details/${_id}`} >
                        <Button
                            className="w-full"
                            onClick={handleDetails}
                            gradientDuoTone="purpleToPink"
                        >
                            View Details
                        </Button>
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default TabsCard;