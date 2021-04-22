import React from "react";
import {Link} from "react-router-dom";
import '../css/IT19197760.css';


function Header(){

    return(

<nav className="navbar navbar-expand-lg navbar-light bg-light" style= {{background: "#828282"}}>
  <a className="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      
      <Link to ="/employee" className ="btn">Employee List</Link>
      <Link to ="/employee/display" className =""></Link>

      
      <a class="btn" href="/employee/display">Employee Problem</a>
     
    </div>
  </div>
</nav>

        

    )


    }

    export default Header;