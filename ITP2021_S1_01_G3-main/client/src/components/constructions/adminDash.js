import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import img2 from '../../images/delete.png';
import './../../css/IT19140162.css';
import jsPDF from 'jspdf';

export default function AdminConstruction(){

    const[adminReqCus, setReqAdmin] = useState([]);
    const[adminReqSys, setReqAdminSys] = useState([]);
    
    useEffect(() =>{
        function fetchAdminReq(){
            axios.get("http://localhost:5000/customizedReq/")
            .then(res => {
                setReqAdmin(res.data); 
               
               console.log('data is retreived');
               
            }) 
            .catch((err)=>{
                console.log('error in fetching');
                console.log(err);
            })
        }
        fetchAdminReq();


        function fetchAdminReqSystemized(){
            axios.get("http://localhost:5000/systemizedReq/")
            .then(res => {
                setReqAdminSys(res.data); 
               
               console.log('data is retreived');
               
            }) 
            .catch((err)=>{
                console.log('error in fetching');
                console.log(err);
            })
        }
        fetchAdminReqSystemized();

        
    },[]);

    
    function createPDFCustom  () {  

        const unit = "pt";
        const size = "A4"; //page size
        const orientation = "landscape";
        const marginLeft = 40;
        const doc = new jsPDF( orientation , unit , size ); //create document
        const title = "All Customized Requests & Details";
        const headers = [["Customer Name", "Email", "Phone" , "Comments","Order ID"]];
  

         const data = adminReqCus.map(

            data => [
                data.name,
                data.email,
                data.phone,
                data.otherComments,
                data._id
                 ]
         );
        let contents = {
            startY : 50,
            head : headers,
            body : data

        }

        doc.setFontSize( 20 );
        doc.text (title, marginLeft,40);
         require('jspdf-autotable');
        doc.autoTable(contents);
        doc.save ("customReq.pdf")

    }
    
    function createPDF  () {  

        const unit = "pt";
        const size = "A4"; //page size
        const orientation = "landscape";
        const marginLeft = 40;
        const doc = new jsPDF( orientation , unit , size ); //create document
        const title = "All Systemized Requests & Details";
        const headers = [["Customer Name", "plan Number", "Email", "Phone" , "Comments","Order ID"]];
  

         const data = adminReqSys.map(

            data => [
                data.name,
                data.planNumber,
                data.email,
                data.phone,
                data.otherComments,
                data._id
                 ]
         );
        let contents = {
            startY : 50,
            head : headers,
            body : data

        }

        doc.setFontSize( 20 );
        doc.text (title, marginLeft,40);
         require('jspdf-autotable');
        doc.autoTable(contents);
        doc.save ("systemReq.pdf")

    }
    
    const deleteCustomizedReq = async(id) => {
        
        const deletereq = await axios.delete(`http://localhost:5000/customizedReq/delete/${id}`);
        
        if(deletereq){
            window.location ="/adminConsDash"
        }
        
    }


    const deletesystemizedReq = async(id) => {
        
        const deletereqS = await axios.delete(`http://localhost:5000/systemizedReq/delete/${id}`);
        
        if(deletereqS){
            window.location ="/adminConsDash"
        }
        
    }

    
        return(
    
    
            <div className="container">
                    <br/><br/>
                    <div className= "it19140162-sub1AdminDash">
                    <div><center> <p className = "it19140162-topic1AdminDash">Construction Requests</p> </center></div>
                       <div>
                            <Link to="/insertD"><i id="it19140162-naviFont" className ="fas fa-plus-circle fa-2x" style={{cursor:'pointer',float:'right',color:'green',height : '60px', width: '60px'}}  ></i></Link>
                            <p className="huseplanAdd">ADD HOUSE PLANS</p>
                        </div>
                    </div>
                   
                    <form className="shadow p-3 mb-5 bg-white rounded">  <br/>
                    <div className="it19140162-mainDiv33">
    
                        <div className="it19140162-row1col11">
                    <div className="it19140162-downdiv">
                    <div>
                        <h5><b className="it19140162-adminDash-reqTopic">Systemized Requests</b></h5>
                    </div>
                    <div>
                        <button type="button" class="btn btn-success" onClick={createPDF}>  DOWNLOAD</button>
                        </div></div>
                        <div className="it19140162-row1colone"></div> <div className="it19140162-row1colone"></div> <div className="it19140162-row1colone"></div>
                            <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>

                            <tbody>
                           
                           {/* map eken return wenne array eksk. array eka save karaganne CusReq 1ta. eken puluwan eka athule thiyena  */}
                            {adminReqSys.map(SysReq =>
                             <tr key = {SysReq._id} >
                            

                             <td>
                                
                                 <p><b>Request Number : </b>{SysReq._id} </p>
                                 <p><b>Customer Name  : </b>{SysReq.name} </p>
                                 <p><b>Customer Email : </b>{SysReq.email} </p>
                                 <p><b>Customer Phone : </b>{SysReq.phone} </p>
                            </td>
                            <td>
                                  
                            </td>
                            <td>
                            <i id="delFont" className ="fas fa-times" style={{cursor:'pointer',float:'right',color:'red'}} onClick = {()=>deletesystemizedReq(SysReq._id)}></i>
                            <Link to = {`/viewreq/${SysReq._id}`}><button type="button" class="btn btn-outline-success">View Details</button></Link>
                            </td>
                            
                            </tr>
                            )}
                            
                            </tbody>
                            </table>
                        </div>
                      
                       
                        
                        <div className="it19140162-row1col11"> 
                        <div className="it19140162-downdiv">
                        <div><h5><b className="it19140162-adminDash-reqTopic">Customized Requests</b></h5></div>
                        <div><button type="button" class="btn btn-success" onClick={createPDFCustom}>  DOWNLOAD</button></div>
                        </div>
                            <div className="it19140162-row1colone"></div> <div className="it19140162-row1colone"></div> <div className="it19140162-row1colone"></div>
                            <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                           
                           {/* map eken return wenne array eksk. array eka save karaganne CusReq 1ta. eken puluwan eka athule thiyena  */}
                            {adminReqCus.map(CusReq =>
                             <tr key = {CusReq._id} >
                            

                             <td>
                                
                                 <p><b>Request Number : </b>{CusReq._id} </p>
                                 <p><b>Customer Name  : </b>{CusReq.name} </p>
                                 <p><b>Customer Email : </b>{CusReq.email} </p>
                                 <p><b>Customer Phone : </b>{CusReq.phone} </p>
                            </td>
                            <td>
                                    

                            </td>
                            <td>
                            <i id="it19140162-delFont" className ="fas fa-times" style={{cursor:'pointer',float:'right',color:'red',height : '30px'}} onClick = {()=>deleteCustomizedReq(CusReq._id)} ></i>
                            <Link to = {`/editCreq/${CusReq._id}`}><button type="button" class="btn btn-outline-success">View Details</button></Link>

                                
                            </td>
                            
                            </tr>
                            )}
                            
                            </tbody>
                            </table>
                        </div>
    
                    </div>

                    
                    </form>
            </div>
    
        )
    
    };