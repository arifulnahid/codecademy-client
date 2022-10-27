import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold capitalize lg:text-4xl dark:text-white text-white">From the blog</h1>

                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-62" src="https://nordicapis.com/wp-content/uploads/What-is-CORS-.png" alt="" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">

                            <a href="#" className="block mt-4 text-2xl font-semibold text-white hover:underline dark:text-white md:text-3xl">
                                What is cors?
                            </a>

                            <p className="mt-3 text-sm text-white dark:text-gray-300 md:text-sm">
                                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-64" src="https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg" alt="" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">

                            <a href="#" className="block mt-4 text-2xl font-semibold text-white hover:underline dark:text-white md:text-3xl">
                                All the features you want to know
                            </a>

                            <p className="mt-3 text-sm text-white dark:text-gray-300 md:text-sm">
                                The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-64" src="https://blog.back4app.com/wp-content/uploads/2019/10/firebase-alternatives-1-1140x515.png" alt="" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">

                            <a href="#" className="block mt-4 text-2xl font-semibold text-white hover:underline dark:text-white md:text-3xl">
                                firebase alternative
                            </a>

                            <p className="mt-3 text-sm text-white dark:text-gray-300 md:text-sm">
                                Competitors and Alternatives to Firebase Realtime Database
                                MongoDB.
                                Oracle Database.
                                Amazon Redshift.
                                DataStax Enterprise.
                                Redis Enterprise Cloud.
                                Cloudera Enterprise Data Hub.
                                Db2.
                                Couchbase Server.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-64" src="https://res.cloudinary.com/practicaldev/image/fetch/s--IDcanLpC--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zw6ade965aztnwz1kur3.png" alt="" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">

                            <a href="#" className="block mt-4 text-2xl font-semibold text-white hover:underline dark:text-white md:text-3xl">
                                How does the private route work?
                            </a>

                            <p className="mt-3 text-sm text-white dark:text-gray-300 md:text-sm">
                                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-64" src="https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture.png" alt="" />

                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">

                            <a href="#" className="block mt-4 text-2xl font-semibold text-white hover:underline dark:text-white md:text-3xl">
                                What is Node? How does Node work?
                            </a>

                            <p className="mt-3 text-sm text-white dark:text-gray-300 md:text-sm">
                                Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                                Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

                                Node.js basically works on two concept

                                Asynchronous
                                Non-blocking I/O
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Blog;