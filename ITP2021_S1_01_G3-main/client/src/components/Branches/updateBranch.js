import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import '../../css/it19519364.css';
//import Header from './Header';

export default function UpdateBranch(props){

    const[name, setName] = useState("");
    const[address, setAddress] = useState("");
    const[telephone, setTelephone] = useState("");
    const[email, setEmail] = useState("");
    const id = props.match.params.id;

    //fetch data
    useEffect (() => {
        async function fetchData(){
            const response = (await axios.get(`http://localhost:5000/branch/get/${id}`)).data;
            setName(response.branch.name);
            setAddress(response.branch.address);
            setTelephone(response.branch.telephone);
            setEmail(response.branch.email);
        }
        fetchData();
    },[id])


    //onsubmit update data in the database
    const branchFormSubmit = (async(e) => {
        e.preventDefault();

        const updateBranch = {
            name,
            address,
            telephone,
            email
        }

        const response = await axios.put(`http://localhost:5000/branch/update/${id}`, updateBranch)
        .then(()=> {
            alert("Branch updated!");
            window.location = "/branches";
        }).catch((error)=> {
            alert(error);
        })

    })


    return (
        <div className = "container">
            {/* <Header/> */}

        <br/><center><h2>Branch Management</h2></center><br/>
        <Link to="/branches" className="btn it19519364-my-btn" >Branches</Link>
        <Link to="/add" className="btn it19519364-my-btn" >Create Branch</Link>

        <form onSubmit={branchFormSubmit} className= "it19519364-myForm">
                <h2>Update Branch</h2>
                <div className="form-group">
                    <label for="name">Branch name</label>
                    <input type="text" className="form-control" id="name" value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="address">Address</label>
                    <input type="text" className="form-control" id="address" value={address}
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="telephone">Telephone number</label>
                    <input type="text" className="form-control" id="telephone"  value={telephone}
                    onChange={(e) => {
                        setTelephone(e.target.value);
                    }}/>
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email"  value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                </div>
                    <button  type="submit" className="btn it19519364-my-btn">UPDATE</button>
            </form>
        </div>
    )

}

