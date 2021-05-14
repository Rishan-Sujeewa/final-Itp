import React, {useState,useEffect} from "react";
import axios from "axios";
import './../../css/IT19140162.css';
import  HeaderCom from './header';

export default function EditCustemizedReq(){

    
    const [image,setImage] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [comments,setComments] = useState("");
    const[adminReqCus, setReqAdmin] = useState("");
    
    useEffect((id) =>{
        function fetchAdminReq(){
            axios.get(`http://localhost:5000/customizedReq/get/${id}`)
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

        
    },[]);
    
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
        <ul>
            {[adminReqCus].map(reqC => (

        <div className="container"> <HeaderCom/>
            <br/>
            <div className= "it19140162-sub1" key = {reqC._id}>
                <p className = "it19140162-topic1">Edit Customized Requests</p><br/><br/><br/><br/><br/>
            </div><br/><br/>
            <div className = "it19140162-mainDiv">        
                
                <form className="shadow p-3 mb-5 bg-white rounded" onSubmit={sendData}>  

                    <div className="form-group">
                        <label for="it19140162-name">Name</label>
                        <input type="text" className="form-control" id="it19140162-name" placeholder= {reqC.name}
                        
                            onChange={(e) => {
                                setName(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-email">Email address</label>
                        <input type="email" className="form-control" id="it19140162-email" placeholder={reqC.email}
                        
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    
                    <div className="form-group">
                        <label for="it19140162-phone">Phone</label>
                        <input type="text" className="form-control" id="it19140162-phone" placeholder={reqC.phone}
                        
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

                    <div className="form-group"> <br/><br/>
                        <label for="it19140162-plan">Edit Your Plan</label>
                        <input type="file" className="form-control-file" id="it19140162-image"/> 
                    </div>

                    <div>
                        <button type="submit" className="btn btn-success">SAVE CHANGES</button>
                    </div>
        </form>
                
                
                </div><br/>
            </div>          
      

    ))} </ul> )

}   