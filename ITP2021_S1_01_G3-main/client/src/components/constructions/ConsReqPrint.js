import React, {useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import './../../css/IT19140162.css';
import  HeaderCom from './header';


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
        
        axios.post("http://localhost:5000/customizedReq/add",newCRequest).then(()=>{
            alert("req added")
            
        } ).catch((err)=>{
            alert(err)
        })
    }

    return(

        <div className="container">
        <HeaderCom/>
        
        <div className="it19140162-topicPrint">
        
            <div className= "it19140162-tp1">
                <p className = "it19140162-topic1">My Construction Requests</p>
            </div>

            <div className="it19140162-tp1"> 
                <button className="btn btn-success" id="it19140162-prbtn">Download</button>
            </div>

        </div> 

        <br/>

        <div className="it19140162-formPrint">
        <form className="shadow p-3 mb-5 bg-white rounded">
                        <div className="form-group">
                            <label for="it19140162-reqName">Request Name</label>
                            <input type="text" className="form-control" id="it19140162-reqName" 
                            
                                onChange={(e) => {
                                    setReqName(e.target.value);
                                }}  />
                        
                        </div>

                        <div className="form-group">
                            <label for="it19140162-name">Name</label>
                            <input type="text" className="form-control" id="it19140162-name" 
                            
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}  />
                        
                        </div>

                        <div className="form-group">
                            <label for="it19140162-email">Email address</label>
                            <input type="email" className="form-control" id="it19140162-email" 
                            
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                        </div>
                        
                        <div className="form-group">
                            <label for="it19140162-phone">Phone</label>
                            <input type="text" className="form-control" id="it19140162-phone" 
                            
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }} />
                        </div>

                        <div className="form-group">
                                <label for="it19140162-comments">Other Comments</label>
                                <textarea className="form-control" id="it19140162-comments" rows="3" 
                                onChange={(e) => {
                                    setComments(e.target.value);
                                }}>      
                                </textarea>
                        </div>





                        </form>
                       
        </div>
        
    </div>
    )


};
