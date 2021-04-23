import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import '../../css/it19519364.css';
//import Header from './Header';

export default function ViewBranch(){


    return (
        <div className = "container">
            {/* <Header/> */}

            <center><h2>Branch Management</h2></center>
        <Link to="/branches" className="btn it19519364-my-btn" >Branches</Link>
        <Link to="/add" className="btn it19519364-my-btn" >Create Branch</Link>
        <Link to="/download" className="btn it19519364-my-btn" >Branch Report</Link>

            <div className= "it19519364-display-branch-view">
                <h6>Name: </h6>
                <h6>Address: </h6>
                <h6>Telephone: </h6>
                <h6>Email: </h6>

                <div>
                    <table className= "it19519364-display-view-download">
                    {/* <table className= "displayTable"> */}
                        <thead>
                            <th>Employees</th>
                            <th></th>
                            <th>Vehicles</th>
                            <th></th>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>Employee 1</td>
                                    <td>
                                        <button type="button" className="btn it19519364-my-btn">UNASSIGN</button>
                                    </td>
                                    <td>Vehicle 1</td>
                                    <td>
                                        <button type="button" className="btn it19519364-my-btn">UNASSIGN</button>
                                    </td>   
                                </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
            
            
            <div>
                <div className = "container">
                    <form className= "it19519364-assignForm">
                        <h6>Assign Employee: </h6>
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" />
                        </div>
                            <button  type="submit" className="btn it19519364-my-btn">ASSIGN</button>
                    </form>
                </div>
                <div className = "container">
                    <form className= "it19519364-assignForm">
                        <h6>Assign Vehicle: </h6>
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" />
                        </div>
                            <button  type="submit" className="btn it19519364-my-btn">ASSIGN</button>
                    </form>
                </div>
            </div>
        </div>
        
    )

}
