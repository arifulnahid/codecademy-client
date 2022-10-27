import { createBrowserRouter } from "react-router-dom";
import FAQ from "../Components/FAQ/FAQ";
import Blog from "../Layouts/Blog/Blog";
import Checkout from "../Layouts/Checkout/Checkout";
import CourseDetails from "../Layouts/Courses/CourseDetails";
import MoreCourse from "../Layouts/Courses/MoreCourse";
import ErrorPage from "../Layouts/ErrorPage/ErrorPage";
import Home from "../Layouts/Home/Home";
import Login from "../Layouts/Login/Login";
import Main from "../Layouts/Main/Main";
import Profile from "../Layouts/Profile/Profile";
import Signup from "../Layouts/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => fetch("https://codecaedmy.vercel.app/course")
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/courses",
                element: <MoreCourse></MoreCourse>,
                loader: async () => fetch("https://codecaedmy.vercel.app/course")
            },
            {
                path: "/faq",
                element: <FAQ></FAQ>
            },
            {
                path: "/course/:id",
                element: <CourseDetails></CourseDetails>,
                loader: async ({ params }) => fetch(`https://codecaedmy.vercel.app/course/${params.id}`)
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/checkout/:id",
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: async ({ params }) => fetch(`https://codecaedmy.vercel.app/course/${params.id}`)
            }
        ]
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>
    }
])