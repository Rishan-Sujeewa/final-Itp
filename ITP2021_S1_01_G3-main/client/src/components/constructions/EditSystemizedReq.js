import React, {useState} from "react";
import axios from "axios";
import './../../css/IT19140162.css';
import  HeaderCom from './header';

export default function EditCustemizedReq(){

    const [planNumber,setPlanNumber] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [comments,setComments] = useState("");
    
    function sendData(e){
        e.preventDefault(); 

        
        const newCRequest = {
            planNumber,
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
    

        <div className="container"> <HeaderCom/>
            <br/>
            <div className= "it19140162-sub1">
                <p className = "it19140162-topic1">Edit Systemized Requests</p><br/><br/><br/><br/><br/><br/>
            </div><br/><br/>
            <div className = "it19140162-mainDiv">        
                
                     <form onSubmit={sendData}>  
                        
                        <div className="form-group">
                            <label for="it19140162-planNumber">Plan Number</label>
                            <input type="text" className="form-control" id="it19140162-planNumber" placeholder="SP0000"
                        
                            onChange={(e) => {
                                setPlanNumber(e.target.value);
                            }}  />
                    
                        </div>

                    <div className="form-group">
                        <label for="it19140162-name">Name</label>
                        <input type="text" className="form-control" id="it19140162-name" placeholder="Enter your name"
                        
                            onChange={(e) => {
                                setName(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-email">Email address</label>
                        <input type="email" className="form-control" id="it19140162-email" placeholder="name@example.com"
                        
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    
                    <div className="form-group">
                        <label for="it19140162-phone">Phone</label>
                        <input type="text" className="form-control" id="it19140162-phone" placeholder="Enter your phone number"
                        
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

                    <div>
                        <button type="submit" className="btn btn-success">SAVE CHANGES</button>
                    </div>
        </form>
                
                
                </div><br/>
            </div>          
      

    )

}   