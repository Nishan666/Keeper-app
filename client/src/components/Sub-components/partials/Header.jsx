import React from "react";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import { Link } from "react-router-dom";
import { useLogout } from "../../../hooks/useLogout";
import { useAuthContext } from "../../../hooks/useAuthContext";

// header section with nav bar
const Header = ()=> {

  // logout will remove user from localStorage and from user state
  const {logout} = useLogout()

  // info of current loged user
  const {user} = useAuthContext()

  return (
    <header className="mainHeading">
      <Link className="text-nav" to='/'><h1 className="titleName"><OfflineBoltIcon />Keeper</h1></Link>
      <div className="navBarLink">
      {/* if user is present then show email and logout btn else show login and signup btn */}
      {user ?
      <div>
            <span className="text-nav">{user.email}  &nbsp; &nbsp; &nbsp; &nbsp;</span>
            <span className="text-nav" style={{ cursor: "pointer" }} onClick={() => logout()}>LogOut</span>
        </div>
      :
          <div>
            <Link className="text-nav" to='/signup'><span >SignUp  &nbsp; &nbsp; &nbsp; &nbsp;</span></Link>
            <Link className="text-nav" to='/login'><span>LogIn</span></Link>
          </div>
      }
      </div>
    </header>
  );
}

export default Header;