import React from "react";
import logo from "../../assets/images/logo.svg"
import seed from "../../assets/images/seed.svg"
import yellowLeaf from "../../assets/images/yellow-leaf.svg"
import "./styles.scss"

const Header = () => {
    return(
        <div className="header">
            <div>
                <img src={logo}/>
            </div>
            <img src={yellowLeaf} className="yellowLeaf"/>
            <img src={seed} className="seed"/>
        </div>
    )
}

export default Header;