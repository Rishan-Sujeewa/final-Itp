import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import '../../css/it19519364.css';
//import Header from './Header';

export default function AddBranch(){


    return (
        <div className = "container">
            {/* <Header/> */}

            <center><h2>Branch Management</h2></center>
        <Link to="/branches" className="btn it19519364-my-btn" >Branches</Link>
        <Link to="/add" className="btn it19519364-my-btn" >Create Branch</Link>
        <Link to="/download" className="btn it19519364-my-btn" >Branch Report</Link>

        <div className = "it19519364-view-download">
            
            <center><h2>Branch Report</h2></center>
            <button  type="submit" className="btn it19519364-my-btn">DOWNLOAD</button>
            <div className= "it19519364-display-branch-view">
                <h6>Name: </h6>
                <h6>Address: </h6>
                <h6>Telephone: </h6>
                <h6>Email: </h6>
                <div>
                    <table className= "it19519364-display-view-download">
                        <thead>
                            <th>Employees</th>
                            <th>Vehicles</th>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>Employee 1</td>
                                    <td>Vehicle 1</td>
                                </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
           
        </div>
        </div>
    )

}
