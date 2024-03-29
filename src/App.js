import React from "react";
import ReactDom from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter ,Outlet,RouterProvider } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";







const AppLayout = () =>{
    return <div className="app">
        <Header/>
        <Outlet/>
        </div>
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children : [
            {
                path:"/",
                element:<Body/>, 
            },
             {
            path:"/about",
    element:<About/>,
        },    
        {
            path:"/contact",
            element:<Contact/>,
        },
        {
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>,
        },
    ],
        errorElement:<Error/>,
    },

   
])

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>)