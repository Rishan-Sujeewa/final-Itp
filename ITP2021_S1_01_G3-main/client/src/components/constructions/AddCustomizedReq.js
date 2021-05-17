import React, {useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import './../../css/IT19140162.css';
import  HeaderCom from './header';


export default function AddCustomizedReq(){

    const [image,setImage] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [comments,setComments] = useState("");
    
    function sendData(e){
        e.preventDefault(); 

        validateUserReqForm();
        
        const newCRequest = {
            image,
            name,
            email,
            phone,
            comments
        }
        
        axios.post("http://localhost:5000/customizedReq/add",newCRequest).then(()=>{
            alert("req added")
            window.location = "/Creq"
            
        } ).catch((err)=>{
            alert(err)
        })
    }

    function validateUserReqForm() {
        var name = document.forms["it19140162-usereReqForm"]["it19140162name"].value;
        var email = document.forms["it19140162-usereReqForm"]["it19140162email"].value;
        var phone = document.forms["it19140162-usereReqForm"]["it19140162phone"].value;

        if (name == "") {
          alert("Name must be filled out");
          return false;
        }
        if (email == "") {
            alert("Email must be filled out");
            return false;
        }
        if (phone == "") {
           alert("Phone must be filled out");
           return false;
         }
         
      }

    return(
    
        <div> <HeaderCom/>

           
            <div className= "it19140162-sub1">
             <p className = "it19140162-topic1">Get Ready To Discover Your Dream Home..</p><br/>
                <Link to ="/findHome">
                    <button type= "submit" id = "it19140162-findHome" className = "btn btn-success" >Find A Home</button>
                </Link>
                <br/><br/><br/> <br/><br/>
            </div><br/>

        <div className="container"> 
        
            
            <div className = "it19140162-mainDiv">        
                
                <div className = "it19140162-sub3">
                    <p className = "it19140162-topic1">Let's Build Your Home Together..</p> 
                    <div className="form-group"> <br/><br/>
                        <div className = "it19140162-boarder1"><h5>Add Your Plan</h5>
                        <input type="file" className="form-control-file" id="it19140162-image"/> </div>
                    </div>
                    <div className = "it19140162-boarderd">
                        <label>Have Any Questions?</label><br/>
                        <label>If You Want To Edit</label><br/>
                        <label>Details.....</label><br/>
                        <label>Contact Us via : </label><br/>
                        <label>0718821118</label> <br/>
                        <label>0112340542</label> <br/>
                    </div>

                </div>  
                <div className = "it19140162-sub4"><br/><br/><br/><br/>
                     <form className="shadow p-3 mb-5 bg-white rounded" onSubmit={sendData} name="it19140162-usereReqForm">  

                     <div className="form-group">

                        <h4><b>Make Your Request</b></h4>

                     </div> 
                        
                    
                    <div className="form-group" >
                        <label for="it19140162-name">Name</label>
                        <input type="text" className="form-control" id="it19140162-name" placeholder="Enter your name" name="it19140162name"
                        
                            onChange={(e) => {
                                setName(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-email">Email address</label>
                        <input type="email" className="form-control" id="it19140162-email" placeholder="name@example.com" name="it19140162email"
                        
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    
                    <div className="form-group">
                        <label for="it19140162-phone">Phone</label>
                        <input type="text" className="form-control" id="it19140162-phone" placeholder="Enter your phone number" name="it19140162phone"
                        
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
                        <button type="submit" className="btn btn-success">SEND REQUEST</button>
                    </div>
        </form>
                </div>
                
                </div><br/>
            </div>          
      
            </div>
    )

}