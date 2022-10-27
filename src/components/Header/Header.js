import React, { useContext } from 'react';
import { FaCentercode, FaUserCircle, FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../ContextAPI/AuthContext';

const Header = () => {
    const { user, userSignOut } = useContext(UserContext);
    // console.log(user);

    const signOutHandler = () => {
        userSignOut().then(() => {
            console.log("Sign - out successful.");
        }).catch((error) => {
            console.log(error, "An error happened");
        });
    }


    return (
        <nav className='flex justify-between items-center py-3 lg:px-14  bg-slate-400'>
            <div className='flex justify-center items-center'>
                <NavLink to="/"><FaCentercode className="text-3xl text-white mx-5"></FaCentercode></NavLink>
                <NavLink to="/" className='text-3xl font-bold text-white'>Codecademy</NavLink>
            </div>

            <div className=''>
                <div className="lg:hidden visible">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user?.photoURL ?
                                                <img src={user?.photoURL} />
                                                :
                                                <FaUserCircle className='text-3xl text-white'></FaUserCircle>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to="/profile" className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><Link>Settings</Link></li>
                                    <li><button onClick={() => signOutHandler()}>Logout</button></li>
                                </ul>
                            </div>
                            :
                            <>
                                <Link to="/login" className="text-xl font-bold text-white mx-2" to="/login" >Login</Link>
                                <Link to="/signup" className="text-xl font-bold text-white mx-2" to="/signup" >Signup</Link>
                            </>
                    }
                </div>

                <div className='hidden lg:block'>
                    {
                        user ?
                            <>
                                {
                                    user ?
                                        <div className="dropdown dropdown-end">
                                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                <div className="w-10 rounded-full">
                                                    {
                                                        user?.photoURL ?
                                                            <img src={user?.photoURL} />
                                                            :
                                                            <FaUserCircle className='text-3xl text-white'></FaUserCircle>
                                                    }
                                                </div>
                                            </label>
                                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                                <li>
                                                    <Link to="/profile" className="justify-between">
                                                        Profile
                                                        <span className="badge">New</span>
                                                    </Link>
                                                </li>
                                                <li><Link>Settings</Link></li>
                                                <li><button onClick={() => signOutHandler()}>Logout</button></li>
                                            </ul>
                                        </div>
                                        :
                                        <>
                                            <Link to="/login" className="text-xl font-bold text-white mx-2" to="/login" >Login</Link>
                                            <Link to="/signup" className="text-xl font-bold text-white mx-2" to="/signup" >Signup</Link>
                                        </>
                                }
                            </>

                            :
                            <>
                                <Link to="/login" className="text-xl font-bold text-white mx-2" to="/login" >Login</Link>
                                <Link to="/signup" className="text-xl font-bold text-white mx-2" to="/signup" >Signup</Link>
                            </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Header;