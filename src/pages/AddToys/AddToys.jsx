import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";
import { Page } from "../../CustomHook/hook";

const AddToys = () => {

    const { user } = useContext(UserContext);
    Page({title:"add a toy"})


    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const img = form.photo.value;
        const name = form.name.value;
        const seller = user?.displayName;
        const sellerEmail = user?.email;
        const price = form.price.value;
        const available_quantity = form.available_quantity.value;
        const rating = selected1;
        const category = selected2;
        const description = form.description.value;

        const newToy = { img, name, category, seller, sellerEmail, price, rating, available_quantity, description }

        //  https://toy-house-server.vercel.app
        fetch("https://toy-house-server.vercel.app/allToys", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Successfully Added',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })

    }

    const options1 = [
        { value: '', text: 'Choose Product Rating' },
        { value: '5', text: '5' },
        { value: '4', text: '4' },
        { value: '3', text: '3' },
    ];
    const [selected1, setSelected1] = useState(options1[0].value);



    const handleChange1 = event => {
        setSelected1(event.target.value);
    };


    const options2 = [
        { value: '', text: 'Which Category' },
        { value: 'sports car', text: 'sports car' },
        { value: 'regular car', text: 'regular car' },
        { value: 'truck', text: 'truck' },
    ];
    const [selected2, setSelected2] = useState(options2[0].value);


    const handleChange2 = event => {
        setSelected2(event.target.value);
    };


    return (
        <div className="lg:px-24 px-6 mt-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email2"
                                value="Toy photo url"
                            />
                        </div>
                        <TextInput
                            id="email2"
                            name="photo"
                            type="url"
                            placeholder="Toy photo url"
                            required={true}
                            shadow={true}
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="name"
                                value="Toy Name"
                            />
                        </div>
                        <TextInput
                            id="name"
                            name="name"
                            type="text"
                            required={true}
                            shadow={true}
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="seller"
                                value="Seller name"
                            />
                        </div>
                        <TextInput
                            id="seller"
                            name="sellerName"
                            defaultValue={user?.displayName}
                            type="Seller name"
                            required={true}
                            shadow={true}
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Seller Email"
                            />
                        </div>
                        <TextInput
                            id="email"
                            defaultValue={user?.email}
                            name="sellerName"
                            type="Email"
                            required={true}
                            shadow={true}
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="price"
                                value="Price"
                            />
                        </div>
                        <TextInput
                            id="price"
                            name="price"
                            type="text"
                            required={true}
                            shadow={true}
                        />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="quantity"
                                value="Available quantity"
                            />
                        </div>
                        <TextInput
                            id="quantity"
                            name="available_quantity"
                            type="text"
                            required={true}
                            shadow={true}
                        />
                    </div>

                    <select className="border py-3" value={selected1} onChange={handleChange1}>
                        {options1.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                    <select className="border py-3" value={selected2} onChange={handleChange2}>
                        {options2.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </div>




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
                        placeholder="Write toy description..."
                        required={true}
                        rows={4}
                    />
                </div>
                <Button className="mx-auto mb-20 w-1/3 py-2" gradientDuoTone="purpleToBlue" type="submit">
                    Add Toy
                </Button>
            </form>
        </div>

    );
};

export default AddToys;