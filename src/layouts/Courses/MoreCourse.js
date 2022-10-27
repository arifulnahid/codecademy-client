import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseItem from './CourseItem';

const MoreCourse = () => {
    const data = useLoaderData()

    return (
        <div>
            <div className="flex lg:flex-wrap lg:flex-row lg:py-5 flex-col items-center justify-center bg-indigo-50 px-4">
                {
                    data.map(item => <CourseItem key={item.id} item={item}></CourseItem>)
                }
            </div>
        </div>
    );
};

export default MoreCourse;