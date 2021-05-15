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

    const[nameErr, setNameErr] = useState({}); //validation
    const[addressErr, setAddressErr] = useState({});
    const[telephoneErr, setTelephoneErr] = useState({});
    const[emailErr, setEmailErr] = useState({});

    //onsubmit send data to the database
    function sendData(e){
        e.preventDefault();

        const isValid = formValidation(); //validation
        if(isValid){

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
    }


    //create form validation 
    const formValidation = () => {
        const nameErr = {};
        const addressErr = {};
        const telephoneErr = {};
        const emailErr = {};
        let isValid = true;

        if(name.trim().length < 1){
            nameErr.emptyName = "Name field cannot be empty";
            isValid = false;
        }

        if(name.trim().length < 4){
            nameErr.shortName = "Name field must contain more than 4 characters";
            isValid = false;
        }        

        if(address.trim().length < 1){
            addressErr.emptyAddress = "Address field cannot be empty";
            isValid = false;
        }

        if(address.trim().length < 20){
            addressErr.shortAddress = "Name field must contain more than 20 characters";
            isValid = false;
        }

        if(telephone.trim().length < 10){
            telephoneErr.ShortPhnumber = "Telephone number must contain 10 digits";
            isValid = false;
        }

        if(telephone.trim().length > 10){
            telephoneErr.LongPhnumber = "Telephone number cannot contain more than 10 digits";
            isValid = false;
        }

        if(email.trim().length < 10){
            emailErr.invalidPhnumber = "Email field cannot be empty";
            isValid = false;
        }


        setNameErr(nameErr);
        setAddressErr(addressErr);
        setTelephoneErr(telephoneErr);
        setEmailErr(emailErr);

        return isValid;
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
                    <input type="text" className="form-control" id="name" placeholder="Enter branch name" 
                    onChange= {(e)=> {  //pass the value to the created state setName
                        setName(e.target.value);
                    }}/>
                    {/* name field validation */}
                    {Object.keys(nameErr).map((key) => {
                        return<div style = {{color : "red"}}>{nameErr[key]}</div>
                    })}
                </div>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter branch address"
                    onChange= {(e)=> {
                        setAddress(e.target.value);
                    }}/>
                    {/* address field validation */}
                    {Object.keys(addressErr).map((key) => {
                        return<div style = {{color : "red"}}>{addressErr[key]}</div>
                    })}
                </div>
                <div className="form-group">
                    <label for="telephone">Telephone number</label>
                    <input required type="number" className="form-control" id="telephone" placeholder="Enter branch contact number"
                    onChange= {(e)=> {
                        setTelephone(e.target.value);
                    }}/>
                    {/* telephone field validation */}
                    {Object.keys(telephoneErr).map((key) => {
                        return<div style = {{color : "red"}}>{telephoneErr[key]}</div>
                    })}
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input required type="email" className="form-control" id="email" placeholder="Enter branch email"
                    onChange= {(e)=> {
                        setEmail(e.target.value);
                    }}/>
                    {/* telephone field validation */}
                    {Object.keys(emailErr).map((key) => {
                        return<div style = {{color: "red"}}>{emailErr[key]}</div>
                    })}
                </div>
                <button type="submit" className="btn it19519364-my-btn">CREATE</button>
                {/* <button type="submit" className="btn btn-primary">Add</button> */}
            </form>
        </div>
    )
}