import React, {useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';


export default function PrintConstruction(){

    const [reqName,setReqName] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [comments,setComments] = useState("");
    
    function sendData(e){
        e.preventDefault(); 

        
        const newCRequest = {
            reqName,
            name,
            email,
            phone,
            comments
        }
        
        axios.post("http://localhost:8070/customizedReq/add",newCRequest).then(()=>{
            alert("req added")
            
        } ).catch((err)=>{
            alert(err)
        })
    }

    return(

        <div className="container">

        <div className="topicPrint">
            <div className= "tp1">
                <p className = "topic1">My Construction Requests</p>
            </div>

            <div className="tp1"> 
                <button className="btn btn-success" id="prbtn">Download</button>
            </div>

        </div> 

        <br/>

        <div className="formPrint">

                        <div className="form-group">
                            <label for="reqName">Request Name</label>
                            <input type="text" className="form-control" id="reqName" 
                            
                                onChange={(e) => {
                                    setReqName(e.target.value);
                                }}  />
                        
                        </div>

                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" 
                            
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}  />
                        
                        </div>

                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input type="email" className="form-control" id="email" 
                            
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                        </div>
                        
                        <div className="form-group">
                            <label for="phone">Phone</label>
                            <input type="text" className="form-control" id="phone" 
                            
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }} />
                        </div>

                        <div className="form-group">
                                <label for="comments">Other Comments</label>
                                <textarea className="form-control" id="comments" rows="3" 
                                onChange={(e) => {
                                    setComments(e.target.value);
                                }}>      
                                </textarea>
                        </div>







        </div>

    </div>
    )


};
