import React from "react";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import { Link } from "react-router-dom";

// header section with nav bar
const Header = ()=> {
  return (
    <header className="mainHeading">
      <h1 className="titleName"><OfflineBoltIcon />Keeper</h1>
      <div className="navBarLink">
        <Link className="text-nav" to='/'><span >Home</span></Link>
        <Link className="text-nav" to='/signup'><span >SignUp</span></Link>
        <Link className="text-nav" to='/login'><span >LogIn</span></Link>
        <Link className="text-nav" to='/logout'><span >LogOut</span></Link>
      </div>
    </header>
  );
}

export default Header;