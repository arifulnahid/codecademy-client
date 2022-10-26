import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

const MainRoute = ({ Children }) => {
    return (
        <RouterProvider router={router}>
            {Children}
        </RouterProvider>
    );
};

export default MainRoute;