import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import {jsPDF} from 'jspdf';
import 'jspdf-autotable';
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

   
    //branch report generation
    const pdf = () => {
        const loading = document.getElementById('loading');
        loading.style.display = "";//display loading icon
        const dwnIcon = document.getElementById('dwn-icon');
        dwnIcon.style.display = "none";//hide download icn

        setTimeout(() => {  
            loading.style.display = "none";
            dwnIcon.style.display = "";
        }, 1300);//display loading icon for 2 seconds  

        let bodyData = [];
        for(let i = 0; branches.length > i ; i++){
            bodyData.push([branches[i].name, branches[i].address, "0"+branches[i].telephone, branches[i].email]);
        }//save json data to bodydata in order to print in the pdf table

        const doc = new jsPDF({orientation:"portrait"});
        var time = new Date().toLocaleString();
        doc.setFontSize(27);
        doc.text(`Branch Details Report`, 105, 13, null, null, "center");
        doc.setFontSize(10);
        doc.text(`(Generated on ${time})`, 105, 17, null, null, "center");
        doc.setFontSize(12);
        doc.text("Thilina Hardware - No 55, Main Road, Horana", 105, 22, null, null, "center");
        doc.autoTable({
            theme : 'grid',
            styles: {halign:'center'},
            headStyles:{fillColor:[71, 201, 76]},
            startY:27,
            head: [['Name','Address','Telephone', 'Email']],
            body: bodyData
        })
        doc.save('BranchReport.pdf');
    }



    return (
        <div className="container">
            {/* <Header/> */}

            <center><h2>Branch Management</h2></center>
        <Link to="/branches" className="btn it19519364-my-btn" >Branches</Link>
        <Link to="/add" className="btn it19519364-my-btn" >Create Branch</Link>
       
       {/* download pdf button */}
       <button onClick={pdf} className="btn it19519364-my-btn"><svg id="dwn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
            </svg><span className="spinner-border spinner-border-sm" id="loading" role="status" aria-hidden="true" style={{display:'none'}}>
        </span> Branch Report</button>

        <table className= "it19519364-displayTable">
            <thead className="it19519364-thead">
                <tr >
                    <th className="it19519364-th">Branch ID</th>
                    <th className="it19519364-th">Branch Name</th>
                    <th className="it19519364-th">Address</th>
                    <th className="it19519364-th">Phone No</th>
                    <th className="it19519364-th">Email</th>
                    <th className="it19519364-th"> </th>
                    <th className="it19519364-th"> </th>
                    <th className="it19519364-th"> </th>
                </tr>
            </thead>
            <tbody>
                {
                branches.map(branch => 
                    <tr key={branch._id}>
                        <td>
                            {branch._id}
                        </td>
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
                            {/* <Link to="/view" className="btn it19519364-my-btn" >VIEW</Link> */}
                            <Link to={`/view/${branch._id}`} className="btn it19519364-my-btn" >VIEW</Link>
                        </td> 
                        <td>
                            {/* <Link to="/update" className="btn it19519364-my-btn" >UPDATE</Link>    */}
                            <Link to={`/update/${branch._id}`} className="btn it19519364-my-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>UPDATE</Link>
                        </td>
                        <td>
                            <button onClick={() => deleteBranch(branch._id)} type="button" className="btn it19519364-myRed-btn"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>DELETE</button>
                        </td>
                        
                    </tr>
                    )
                }
            </tbody>
        </table>
        </div>
    );
    
}