import React, { useContext } from 'react';
import { UserContext } from '../../ContextAPI/AuthContext';
import { FaCentercode, FaUserCircle, FaBars } from 'react-icons/fa';

const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <div className='h-screen mx-auto w-96'>
            <h1 className='text-2xl font-bold text-white my-3'>Your Profile Here</h1>
            <div className='py-2 px-2'>
                {
                    user?.photoURL ?
                        <img className='w-24' src={user?.photoURL} />
                        :
                        <FaUserCircle className='text-3xl text-white'></FaUserCircle>
                }
                <h1 className='my-2 text-xl font-bold'>Your Name: {user?.displayName ? user.displayName : "No Name"}</h1>
            </div>
        </div>
    );
};

export default Profile;