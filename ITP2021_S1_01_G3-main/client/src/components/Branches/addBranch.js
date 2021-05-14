import React, { useState } from "react";
import axios from "axios";              //handle http requests
import {Link} from 'react-router-dom';
import '../../css/it19519364.css';
//import Header from './Header';

export default function AddBranch(){

    //create states name, address, telephone, email
    const[name, setName] = useState("");
    const[address, setAddress] = useState("");
    const[telephone, setTelephone] = useState("");
    const[email, setEmail] = useState("");

    //onsubmit send data to the database
    function sendData(e){
        e.preventDefault();
        
        const newBranch = {
            name,
            address,
            telephone,
            email
        }

        axios.post("http://localhost:5000/branch/add", newBranch).then(()=> {
            alert("Branch added!");
        }).catch((error)=> {
            alert(error);
        })
     
    }

    return(
        <div className="container"> 
        {/* <Header/>   */}

        <br/><center><h2>Branch Management</h2></center><br/>
        <Link to="/branches" className="btn it19519364-my-btn" >Branches</Link>
        <Link to="/add" className="btn it19519364-my-btn" >Create Branch</Link>
       

            <form onSubmit={sendData} className= "it19519364-myForm">
                <h2>Create Branch</h2>
                <div className="form-group">
                    <label for="name">Branch name</label>
                    <input required type="text" className="form-control" id="name" placeholder="Enter branch name" 
                    onChange= {(e)=> {  //pass the value to the created state setName
                        setName(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input required type="text" className="form-control" id="address" placeholder="Enter branch address"
                    onChange= {(e)=> {
                        setAddress(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="telephone">Telephone number</label>
                    <input required type="text" className="form-control" id="telephone" placeholder="Enter branch contact number"
                    onChange= {(e)=> {
                        setTelephone(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input required type="email" className="form-control" id="email" placeholder="Enter branch email"
                    onChange= {(e)=> {
                        setEmail(e.target.value);
                    }}/>
                </div>
                <button type="submit" className="btn it19519364-my-btn">CREATE</button>
                {/* <button type="submit" className="btn btn-primary">Add</button> */}
            </form>
        </div>
    )
}