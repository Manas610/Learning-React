import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

//Link is used with to instead of a and href for no page loading 
//hashlink helps us in navigation to a particular div

const Header = () => {
  return <nav>
    <h1>Sales </h1>
    <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
    </main>
  </nav>;
};

export default Header;
