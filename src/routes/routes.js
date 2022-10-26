import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/accounts/Login';
import Signup from '../components/accounts/Signup';
import Main from '../layouts/Main';
import Home from '../layouts/Main/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <div>Eroor element</div>,
        children: [
            {
                path: "/*",
                element: <div>Erorr element</div>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
]);
