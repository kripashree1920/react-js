import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import AppBody from "./src/components/AppBody";
// import
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
                element:<About />
            },
        ],
        errorElement:<Error/>

    }
 
],

);


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={route}/>)