import React from "react";
import ReactDom from "react-dom/client"


const Header = () => {
    return (
    <div className="header">
        <div className="logo-conatiner">  
              <img className="logo" src="https://images.squarespace-cdn.com/content/5e473e46773e7329dde12671/07338cd3-48ea-4063-9c5e-2693f56fb192/Rooted-Food-Logo-Black-Color-Outline.jpg?format=1500w&content-type=image%2Fjpeg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
    </div>

    )
}


const AppLayout = () =>{
    return <div className="app"><Header/></div>
}

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)