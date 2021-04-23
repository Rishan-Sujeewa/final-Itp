import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import '../../css/it19519364.css';
//import Header from './Header';

//import { Table } from 'react-materialize';

export default function AllBranches(){

    const [branches, setBranches] = useState([]);

    //read
    useEffect(() => {
        function getBranches(){
            axios.get("http://localhost:5000/branch/").then((res) =>{
                setBranches(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getBranches();
    }, [])

    //delete
    const deleteBranch = async(id) => {
        const deletion = await axios.delete(`http://localhost:5000/branch/delete/${id}`);
        if(deletion){
            window.location = "/branches"
        }
    }

   /* return(
        <table>
            <tbody>
               { branches.map((branch) => {
                    return(
                        <tr key ={branch._id}>
                            <td>{branch.name}</td>
                        </tr>
                    )  
                }
            </tbody>
        </table>
    ) 
*/


    return (
        <div className="container">
            {/* <Header/> */}

            <center><h2>Branch Management</h2></center>
        <Link to="/branches" className="btn it19519364-my-btn" >Branches</Link>
        <Link to="/add" className="btn it19519364-my-btn" >Create Branch</Link>
        <Link to="/download" className="btn it19519364-my-btn" >Branch Report</Link>

        <table className= "it19519364-displayTable">
        <tbody>
            {
            branches.map(branch => 
                <tr key={branch._id}>
                    <td>
                        {branch.name}
                    </td>
                    <td>
                        {branch.address}
                    </td>
                    <td>
                        {branch.telephone}
                    </td>
                    <td>
                        {branch.email}
                    </td>
                    <td>
                        {/* <button type="button" class="btn btn-info">Update</button> */}
                        <Link to="/update" className="btn it19519364-my-btn" >UPDATE</Link>
                        {/* <Link to="/update" className="btn btn-info" >Update</Link> */}
                    </td>
                    <td>
                        {/* <button type="button" className="btn my-btn">DELETE</button> */}
                        <button onClick={() => deleteBranch(branch._id)} type="button" className="btn it19519364-my-btn">DELETE</button>
                    </td>
                     <td> 
                         {/* <button type="button" className="btn my-btn">VIEW</button>  */}
                         <Link to="/view" className="btn it19519364-my-btn" >VIEW</Link>
                     </td> 
                </tr>
                )
            }
        </tbody>
        </table>
        </div>
    );
    
}