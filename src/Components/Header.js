import { useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";

 const Header = () => {

const [btnName , setBtnName] = useState("login")

    return (
    <div className="header">
        <div className="logo-conatiner">  
              <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li>
                        <Link to="/about">About US</Link></li>
                    <li> <Link to="/contact">contact US</Link></li>
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