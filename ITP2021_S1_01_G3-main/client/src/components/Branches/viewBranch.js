import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import '../../css/it19519364.css';
//import Header from './Header';

export default function ViewBranch(props){

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


    return (
        <div className = "container">
            {/* <Header/> */}

        <br/><center><h2>Branch Management</h2></center><br/>
        <Link to="/branches" className="btn it19519364-my-btn" >Branches</Link>
        <Link to="/add" className="btn it19519364-my-btn" >Create Branch</Link>

                <table >
                    <tbody>  
                    <br/>                     
                            <tr>
                                <td>Name: </td>
                                <td className ="it19519364-td">{name}</td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td className ="it19519364-td"> {address}</td>
                            </tr>
                            <tr>
                                <td>Telephone:</td>
                                <td className ="it19519364-td"> 0{telephone}</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td className ="it19519364-td"> {email}</td>
                            </tr>                      
                    </tbody>
                </table>
        </div>
        
    )

}
