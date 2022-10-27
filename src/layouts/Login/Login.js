import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGooglePlusSquare, FaGithubSquare } from 'react-icons/fa';
import { UserContext } from '../../ContextAPI/AuthContext';

const Login = () => {
    const { googleSignIn, setUser, signInUser, githubSignIn } = useContext(UserContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSingIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(userInfo => {
                const user = userInfo.user;
                setUser(user);
            }).catch(e => {
                setError(e.message);
                console.log(e.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user);
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

    return (
        <div className='w-96 mx-auto py-24'>
            <h1 className='text-xl text-white font-semibold'>Please Login!</h1>
            <form onSubmit={handleSingIn} className="w-96">
                <input type="email" name='email' placeholder="Your Email" className="rounded w-full my-2" required />
                <input type="password" name='password' placeholder="Your Password" className="rounded w-full my-2" required />
                <p className='text-red-600'>{error}</p>
                <input type="submit" value="Submit" className="rounded w-full btn my-3" />
            </form>
            <div className='my-3 text-xl font-semibold text-center'>Forget Password? <Link to="/signup" className='font-bold'>Reset here</Link></div>
            <div className='my-3 text-xl font-semibold text-center'>Don't have account? <Link to="/signup" className='font-bold'>Signup here</Link></div>
            <div className='flex flex-col'>
                <button onClick={() => handleGoogleSignIn()} className='text-xl font-bold my-1 mx-auto hover:bg-slate-600 rounded px-3 py-2'><FaGooglePlusSquare className='inline mx-2 text-3xl text-white'></FaGooglePlusSquare>Login in with <>Google</></button>
                <button onClick={() => handleGithubSing()} className='text-xl font-bold my-1 hover:bg-slate-600 rounded px-3 py-2'><FaGithubSquare className='inline mx-2 text-3xl text-white'></FaGithubSquare>Login in with <>Github</></button>
            </div>
        </div>
    );
};

export default Login;