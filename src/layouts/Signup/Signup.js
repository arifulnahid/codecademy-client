import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGooglePlusSquare, FaGithubSquare } from 'react-icons/fa';
import { UserContext } from '../../ContextAPI/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
    const { googleSignIn, githubSignIn, setUser, createUser, upDateUserData } = useContext(UserContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const notify = (s) => toast(s);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user);
                notify("Sucsess")
                navigate("/");
            }).catch(e => console.log(e))
    }

    const handleGithubSing = () => {
        githubSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate("/");
            }).catch(e => console.log(e))
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;

        createUser(email, password).
            then(userInfo => {
                const user = userInfo.user;
                setUser(user);
                upDateUserData(name, photo)
                    .then(() => {
                        console.log("Profile Update");
                    }).catch(e => console.log(e.message))
                navigate("/");
            }).catch(e => {
                setError(e.message);
                console.log(e.message);
            });

    }


    return (
        <div className='w-96 mx-auto py-24'>
            <h1 className='text-xl text-white font-semibold'>Please Signup!</h1>
            <form onSubmit={handleSignUp} className="w-96">
                <input type="text" name="name" placeholder="Your Full Name" className="rounded w-full my-2" />
                <input type="url" name="photo" placeholder="Your Photo URL" className="rounded w-full my-2" />
                <input type="email" name="email" placeholder="Your Email" className="rounded w-full my-2" />
                <input type="password" name="password" placeholder="Your Password" className="rounded w-full my-2" />
                <p className='text-red-600'>{error}</p>
                <input type="submit" value="Submit" className="rounded w-full btn my-3" />
            </form>
            <div className='my-3 text-xl font-semibold text-center'>Alredy have account? <Link to="/login" className='font-bold'>Login here</Link></div>
            <div className='flex flex-col'>
                <button onClick={() => handleGoogleSignIn()} className='text-xl font-bold my-1 mx-auto hover:bg-slate-600 rounded px-3 py-2'><FaGooglePlusSquare className='inline mx-2 text-3xl text-white'></FaGooglePlusSquare>Login in with <>Google</></button>
                <button onClick={() => handleGithubSing()} className='text-xl font-bold my-1 hover:bg-slate-600 rounded px-3 py-2'><FaGithubSquare className='inline mx-2 text-3xl text-white'></FaGithubSquare>Login in with <>Github</></button>
            </div>
        </div>
    );
};

export default Signup;