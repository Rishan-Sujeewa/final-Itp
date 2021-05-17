import React from "react";
import './../../css/IT19140162.css';
import {getUser, removeUser} from '../../utils/common';
import logo from '../../images/logo/Tilina_prev_ui.png'

function Header(){
    const id = getUser();
    return(
        <div><center className="logo-bcg"><img  className="our-logo" src={logo}/></center>
        <nav id="it19140162-header" className="navbar navbar-expand-lg navbar-light " >
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

        <li className="nav-item">
            <a className="nav-link" href="/customerhome">Home</a>
        </li>

        

        {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Electrical
            </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
        <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
        </div>
        </li> */}

        {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Safety Items
            </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
        <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
        </div>
        </li> */}


        <li className="nav-item">
            <a className="nav-link" href="/customer/profile">My Profile</a>
        </li>
{/* 
        <li className="nav-item">
            <a className="nav-link" href="#">Accessories</a>
        </li> */}

        <li className="nav-item">
            <a className="nav-link" href="/Creq">Housing Plans</a>
        </li> 

        <li className="nav-item">
            <a className="nav-link" href="/userDashCons">My Constructions</a>
        </li>
        {id ? null :<li className="nav-item">
            <a className="nav-link" href="/customer/login">Log in</a>
        </li>}

        
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-light" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
    )
}


export default Header;
