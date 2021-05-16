import React from 'react';


export default function home() {
    
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
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
                <a className="nav-link" href="/salary-list">Salary |</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/adminConsDash">Constructions |</a>
                </li>
                <li className="nav-item">
                <a className="nav-link active" href="/customers">Customers |</a>
                </li>
              </ul>
            </div>
            <button className="btn btn-primary" href="#">Sign Out</button>
          </div>
        </nav>
        

        )
    
}
