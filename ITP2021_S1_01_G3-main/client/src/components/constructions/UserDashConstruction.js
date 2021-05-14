import React, {useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import img1 from '../../images/edit.png';
import './../../css/IT19140162.css';
import  HeaderCom from './header';
import EditCustemizedReq from "./EditSystemizedReq";

export default function UserDashConstruction(){

    const [rNum,setRequestNumber] = useState("");

    function sendData(e){
        e.preventDefault(); 

        
        const newCRequest = {
            
        }
        
        axios.post("http://localhost:5000/customizedReq/add",newCRequest).then(()=>{
            alert("req added")
            
        } ).catch((err)=>{
            alert(err)
        })
    }

    

    return(


        <div className="container">
                

                <HeaderCom/>
                
                <div className= "it19140162-sub1">
                <br/><p className = "it19140162-topic1">My Construction Requests</p><br/><br/><br/><br/><br/><br/>
                </div>
                <br/><br/>
                <form className="shadow p-3 mb-5 bg-white rounded">
                <div className="it19140162-mainDiv3">

                <b><h5>Systemized Requests</h5></b><br/>

                    <div id="it19140162-row1col111" className="shadow p-3 mb-5 bg-white rounded">
                        
                        <div className="it19140162-row1colone"> <p>Request Number SP0243 </p>   </div>
                        <div className="it19140162-row2colone"> <Link to ="/editSreq"><img className="it19140162-imgd" src={img1} /> <p>Edit</p> </Link>   </div>
                        <div className="it19140162-row1colone"> </div>

                    </div>
                    <br/>
                </div>
                <div className="it19140162-mainDiv3">  
                <b><h5>Customized Requests</h5></b><br/>
                    <div id="it19140162-row1col111" className="shadow p-3 mb-5 bg-white rounded">  

                        <div className="it19140162-row1colone"> <p>Request Number CP9033 </p>   </div>
                        <div className="it19140162-row2colone"> <button className="btn btn-success"  type="button">EDIT </button> </div>
                        <div className="it19140162-row1colone">  </div>

                    </div>
                    <br/>
                </div>
                <br/>

                <div className="it19140162-dpr">

                    <p className="it19140162-printS"><b>Enter Request Number To Get A Printed Copy </b>  </p>
                    
                    <div className="it19140162-prB">
                    
                    <div className="it19140162-pb"><input type="text" className="it19140162-rNumber" id="it19140162-rNum"
                            
                            onChange={(e) => {
                                setRequestNumber(e.target.value);
                            }}  /> </div>
                        <div className="it19140162-pb">
                        <Link to ="/userConsPrint">
                            <button type= "submit" id = "it19140162-userConsPrint" className = "btn btn-success" >OK</button>
                        </Link> </div>

                    </div>

                </div>
                </form>
        </div>

    )

};