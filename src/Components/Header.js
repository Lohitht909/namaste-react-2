import { useState } from "react";
import { LOGO_URL } from "./utils/constants";

 const Header = () => {

const [btnName , setBtnName] = useState("login")

    return (
    <div className="header">
        <div className="logo-conatiner">  
              <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                       btnName ==="login" ?  setBtnName("logout") : setBtnName("login")
                    }}>
                      {btnName}
                    </button>
                </ul>
            </div>
    </div>

    )
}

export default Header;