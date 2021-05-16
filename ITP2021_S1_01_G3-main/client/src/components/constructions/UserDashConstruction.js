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

        <div> <HeaderCom/> 
        <div className= "it19140162-sub1">
                <br/><p className = "it19140162-topic1">My Construction Requests</p><br/><br/><br/><br/><br/><br/>
                </div>
                <br/><br/>

        <div className="container">
                

                
                
                
                <form className="shadow p-3 mb-5 bg-white rounded">
                <div className="it19140162-mainDiv3">

                <b><h5>Systemized Requests</h5></b><br/>

                    <div id="it19140162-row1col111" className="shadow p-3 mb-5 bg-white rounded">
                        
                        <div className="it19140162-row1colone"> <p>Request Number SP0243 </p>   </div>
                        <div className="it19140162-row2colone"> </div>
                        <div className="it19140162-row1colone"> </div>

                    </div>
                    <br/>
                </div>
                <div className="it19140162-mainDiv3">  
                <b><h5>Customized Requests</h5></b><br/>
                    <div id="it19140162-row1col111" className="shadow p-3 mb-5 bg-white rounded">  

                        <div className="it19140162-row1colone"> <p>Request Number CP9033 </p>   </div>
                        <div className="it19140162-row2colone">  </div>
                        <div className="it19140162-row1colone">  </div>

                    </div>
                    <br/>
                </div>
                <br/>

                
                </form>
        </div>
        </div>
    )

};