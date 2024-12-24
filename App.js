import React, { Suspense ,lazy} from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import AppBody from "./src/components/AppBody";
import Contact from "./src/components/Contact";
// import About from "./src/components/About";
import Error from "./src/components/Error";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom';

const AppLayout =()=>{
    return(
        <div>
            <Header/>
            {/* <AppBody/> */}
            <Outlet />
        </div>
    )
}

const About = lazy(()=> import( "./src/components/About"));

const route = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element:<AppBody />
            },
            {
                path:'/about',
                element:<Suspense fallback={<h1>LOADING ......</h1>}> <About /></Suspense>
            },
            {
                path:"/contact-us",
                element:<Contact />
            }
        ],
        errorElement:<Error/>

    }
 
],

);


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={route}/>)