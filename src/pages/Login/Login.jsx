import { Button, Label, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext, useState } from "react";
import { UserContext } from "../../providers/AuthProviders";
import { Page } from "../../CustomHook/hook";

const Login = () => {
    const { logIn, googleLogIn } = useContext(UserContext);
    const [success, setSuccess] = useState("")
    const [err, setErr] = useState("")
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    Page({title:"login"})

    const handleLogIn = event => {
        event.preventDefault();

        setSuccess("");
        setErr("");
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(() => {
                // const createdUser = result.user;
                setSuccess("successfully login")
                navigate(from, { replace: true })

            })
            .catch(err => {
                setErr(err.message)
            })
    }
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(() => {
                setSuccess("success log in with google")
                navigate(from, { replace: true })
            })
            .catch(err => {
                setErr(err.message)
            })
    }
    return (
        <div data-aos="zoom-out-up" className="lg:w-1/2 mx-auto mt-10 mb-20">
            <div className="shadow-2xl rounded-lg p-10">
                <form onSubmit={handleLogIn} className="flex  flex-col gap-4">
                    <h2 className="text-center text-4xl font-semibold">Login Please</h2>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email2"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email2"
                            name="email"
                            type="email"
                            placeholder="Type your email"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password2"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password2"
                            name="password"
                            placeholder="Your password"
                            type="password"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <p><small className="text-red-700">{err}</small></p>
                    <p><small className="text-success">{success}</small></p>
                    <Button type="submit">
                        Login
                    </Button>

                </form>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogIn} className="bg-blue-800 w-1/2 mx-auto text-white rounded-xl flex items-center justify-center gap-2 py-3 font-semibold "><FaGoogle className="text-2xl" />Google</button>
                <p className="text-center font-semibold mt-3">Do not have an account? Please <Link to="/register" className="text-blue-800 font-semibold hover:underline">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;