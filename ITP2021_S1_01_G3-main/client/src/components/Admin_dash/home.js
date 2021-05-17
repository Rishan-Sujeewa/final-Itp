import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../actionsAdmin";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Col } from "react-bootstrap";


const Home = (props) => {

  const auth = useSelector((state) => state.authAdmin);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {auth.authenticate ? (<Fragment>
          <a className="navbar-brand" href="#"><b>Admin Dashboard</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">Stock |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/vehicle-list">Delivery & Vehicles |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/orders">Order |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Employee-list">Employees |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/branches">Branches |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/salary-list">Payment |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/adminConsDash">Constructions |</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/customers">Customers |</a>
              </li>
            </ul>
          </div>
        </Fragment>) : (
            <Col></Col>
          )}
        {auth.authenticate ? (
          <button className="btn btn-primary" onClick={logout} >Sign Out</button>
        ) : (
            <Nav>
              {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
              <li className="nav-item">
                <NavLink to="signin" className="nav-link">
                  Signin
            </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="signup" className="nav-link">
                  Signup
            </NavLink>
              </li>
            </Nav>
          )}
      </div>
    </nav>
  )
}

export default Home;


