import React from "react";
import { Link } from "react-router-dom";
// import logo from '../../assets/images/logo.jpg';
function NavBar() {
    return (
        <header>
            <div className="logo">
                
                <a href="/"></a>
                
                {/* <img src="https://st4.depositphotos.com/16552764/20957/v/600/depositphotos_209572350-stock-illustration-block-chain-logo-illustration-block.jpg"  alt="NavrBar"/>
              */}
                <h5>IOTChain</h5>
                
            </div>
            <div className="display-menu">
                
                <Link className="menu" to={"/"}>Home</Link>
                <Link className="menu" to={"/logs"}>Logs</Link>
                <Link className="menu" to={"/about"}>Problem</Link>
            </div>
        </header>

    );
}
export default NavBar;