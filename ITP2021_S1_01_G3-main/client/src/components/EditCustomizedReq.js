import React, {useState,useEffect} from "react";
import axios from "axios";

export default function EditCustemizedReq(){

    
    const [image,setImage] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [comments,setComments] = useState("");
    const[adminReqCus, setReqAdmin] = useState("");
    
    useEffect((id) =>{
        function fetchAdminReq(){
            axios.get(`http://localhost:8070/customizedReq/get/${id}`)
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

        <div className="container"> 
            <br/>
            <div className= "sub1" key = {reqC._id}>
                <p className = "topic1">Edit Customized Requests</p><br/><br/><br/><br/><br/>
            </div><br/><br/>
            <div className = "mainDiv">        
                
                <form onSubmit={sendData}>  

                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder= {reqC.name}
                        
                            onChange={(e) => {
                                setName(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder={reqC.email}
                        
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    
                    <div className="form-group">
                        <label for="phone">Phone</label>
                        <input type="text" className="form-control" id="phone" placeholder={reqC.phone}
                        
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

                    <div className="form-group"> <br/><br/>
                        <label for="plan">Edit Your Plan</label>
                        <input type="file" className="form-control-file" id="image"/> 
                    </div>

                    <div>
                        <button type="submit" className="btn btn-success">SAVE CHANGES</button>
                    </div>
        </form>
                
                
                </div><br/>
            </div>          
      

    ))} </ul> )

}   