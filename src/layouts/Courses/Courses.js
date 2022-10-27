import React, { useContext } from 'react';
import { UserContext } from '../../ContextAPI/AuthContext';
import CourseItem from './CourseItem';

const Courses = ({ data }) => {

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

export default Courses;