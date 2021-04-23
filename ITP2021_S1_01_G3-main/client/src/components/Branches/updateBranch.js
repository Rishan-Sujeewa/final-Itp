import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import '../../css/it19519364.css';
//import Header from './Header';

export default function UpdateBranch(){


    return (
        <div className = "container">
            {/* <Header/> */}

            <center><h2>Branch Management</h2></center>
        <Link to="/branches" className="btn it19519364-my-btn" >Branches</Link>
        <Link to="/add" className="btn it19519364-my-btn" >Create Branch</Link>
        <Link to="/download" className="btn it19519364-my-btn" >Branch Report</Link>

            <form className= "it19519364-myForm">
                <h2>Update Branch</h2>
                <div className="form-group">
                    <label for="name">Branch name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address"/>
                </div>
                <div className="form-group">
                    <label for="telephone">Telephone number</label>
                    <input type="text" className="form-control" id="telephone"/>
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email"/>
                </div>
                    <button  type="submit" className="btn it19519364-my-btn">UPDATE</button>
            </form>
        </div>
    )

}

