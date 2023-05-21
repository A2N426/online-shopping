import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../providers/AuthProviders";
import { Page } from "../../CustomHook/hook";

const Register = () => {
    const [success, setSuccess] = useState("")
    const [err, setErr] = useState("")
    const navigate = useNavigate();

    Page({title:"register"})

    const { register, changeProfile } = useContext(UserContext);

    const handleRegister = event => {
        event.preventDefault();

        setSuccess("");
        setErr("");
        const form = event.target;



        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            return setErr("Password Minimum eight characters, at least one letter and one number")
        }

        if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
            return setErr("Please Provide valid email")
        }

        register(email, password)
            .then(result => {
                const createdUser = result.user;
                changeProfile(createdUser, name, photo)
                setSuccess("Successfully Created")
                navigate("/")

            })
            .catch(err => {
                setErr(err.message)
            })
    }
    return (
        <div data-aos="zoom-out-up">
            <div className="lg:w-1/2 mx-auto mt-10 mb-20">
                <form onSubmit={handleRegister} className="flex shadow-2xl rounded-lg p-10 flex-col gap-4">
                    <h2 className="text-center text-4xl font-semibold">Register Please</h2>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email2"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            id="email2"
                            name="name"
                            type="text"
                            placeholder="Type your name"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email"
                            name="email"
                            placeholder="Your email"
                            type="email"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password"
                                value="Your Password"
                            />
                        </div>
                        <TextInput
                            id="password"
                            name="password"
                            placeholder="Your password"
                            type="password"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="url"
                                value="Photo URL"
                            />
                        </div>
                        <TextInput
                            id="url"
                            name="photo"
                            placeholder="URL"
                            type="url"
                            shadow={true}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox className="cursor-pointer" id="agree" />
                        <Label htmlFor="agree">
                            I agree with the <span className="text-blue-600 cursor-pointer hover:underline dark:text-blue-500">terms and conditions</span>
                        </Label>
                    </div>
                    <p><small className="text-red-700">{err}</small></p>
                    <p><small className="text-success">{success}</small></p>
                    <Button type="submit">
                        Register
                    </Button>
                    <p className="text-center font-semibold">Already have an account? Please <Link to="/login" className="text-blue-800 font-semibold hover:underline">Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;