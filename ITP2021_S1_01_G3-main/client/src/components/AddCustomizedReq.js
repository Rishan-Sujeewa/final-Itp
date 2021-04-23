import React, {useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function AddCustomizedReq(){

    const [image,setImage] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [comments,setComments] = useState("");
    
    function sendData(e){
        e.preventDefault(); 

        
        const newCRequest = {
            image,
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
            <br/>
            <div className= "sub1">
                <p className = "topic1">Get Ready To Discover Your Dream Home..</p><br/>
                <Link to ="/findHome">
                    <button type= "submit" id = "findHome" className = "btn btn-success" >Find A Home</button>
                </Link>
                <br/><br/><br/> <br/><br/>
            </div><br/>
            <div className = "mainDiv">        
                
                <div className = "sub3">
                    <p className = "topic1">Let's Build Your Home Together..</p> 
                    <div className="form-group"> <br/><br/>
                        <div className = "boarder1"><h5>Add Your Plan</h5>
                        <input type="file" className="form-control-file" id="image"/> </div>
                    </div>
                    <div className = "boarderd">
                        <label>Have Any Questions?</label><br/>
                        <label>If You Want To Edit</label><br/>
                        <label>Details.....</label><br/>
                        <label>Contact Us via : </label><br/>
                        <label>0718821118</label> <br/>
                        <label>0112340542</label> <br/>
                    </div>

                </div>  
                <div className = "sub4">
                     <form onSubmit={sendData}>  <br/><br/><br/><br/>

                     <div className="form-group">

                        <h4>Make Your Request</h4>

                     </div> 
                        
                    
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name"
                        
                            onChange={(e) => {
                                setName(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="name@example.com"
                        
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    
                    <div className="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder="Enter your phone number"
                        
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

                    <div>
                        <button type="submit" className="btn btn-success">SEND REQUEST</button>
                    </div>
        </form>
                </div>
                
                </div><br/>
            </div>          
      

    )

}