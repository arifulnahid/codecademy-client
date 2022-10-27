import React from 'react';
import { Link } from 'react-router-dom';

const CourseItem = ({ item }) => {

    // console.log(item);
    return (
        <div className="w-full lg:max-w-sm lg:mx-2 overflow-hidden rounded-xl bg-gray-200 shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <img src={item.thumbnail} alt="plant" className="h-auto w-full" />
            <div className="p-5">
                <p className="text-xl font-bold mb-5 text-gray-700">{item.title}</p>
                <p className="text-xl font-bold mb-5 text-gray-700">{item.fee}</p>
                <Link className="text-xl font-bold" to={`/course/${item.id}`} className="w-full block text-center font-bold rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">Details</Link>
            </div>
        </div>
    );
};

export default CourseItem;