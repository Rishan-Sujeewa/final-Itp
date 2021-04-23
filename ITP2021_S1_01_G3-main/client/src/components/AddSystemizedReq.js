import React, {useState} from "react";
import axios from "axios";

export default function AddSystemizedReq(){

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
        
        axios.post("http://localhost:8070/systemizedReq/addS",newCRequest).then(()=>{
            alert("req added");
            window.location = "/AddSystemizedReq"
            
        } ).catch((err)=>{
            alert(err)
        })
    }


    return(
    

        <div className="container"> 
            <br/>
            <div className= "sub1">
                <p className = "topic1">Get Ready To Discover Your Dream Home..</p><br/><br/><br/><br/><br/><br/></div>
                
            <div className = "mainDiv">        
                
                <div className = "sub3">
            
                    <div className="form-group"> <br/><br/>
                        
                    </div>
                    <div className = "boarderd">
                        
                    </div>

                </div>  
                <div className = "sub4">
                     <form onSubmit={sendData}>  <br/><br/><br/><br/>

                     <div className="form-group">

                        <h4>Make Your Request</h4>

                     </div> 
                        
                     <div className="form-group">
                        <label for="planNumber">Plan Number</label>
                        <input type="text" className="form-control" id="planNumber" placeholder="SP0000"
                        
                            onChange={(e) => {
                                setPlanNumber(e.target.value);
                            }}  />
                    
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