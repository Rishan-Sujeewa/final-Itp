import React, {Component} from "react";
import axios from "axios";
import './../../css/IT19140162.css';
import  HeaderCom from './header';

export default class AddSystemizedReq extends Component{

    // const [planNumber,setPlanNumber] = useState("");
    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [phone,setPhone] = useState("");
    // const [comments,setComments] = useState("");

    constructor(props){
        super(props);

        this.state={
            planNumber:'',
            name:'',
            email:'',
            phone:'',
            comments:''
        }
    }
    
     sendData=(e)=>{
        e.preventDefault(); 

        validateUserSystemizedReqForm();

        
        const newCRequest = {
            planNumber,
            name,
            email,
            phone,
            comments
        }
        
        axios.post("http://localhost:5000/systemizedReq/addS",newCRequest).then(()=>{
            alert("req added");
            window.location = "/AddSystemizedReq"
            
        } ).catch((err)=>{
            alert(err)
        })
    }

     validateUserSystemizedReqForm =() => {
        var planNum = document.forms["it19140162-usereSystemizedReqForm"]["it19140162splanNum"].value;
        var name = document.forms["it19140162-usereSystemizedReqForm"]["it19140162sname"].value;
        var email = document.forms["it19140162-usereSystemizedReqForm"]["it19140162semail"].value;
        var phone = document.forms["it19140162-usereSystemizedReqForm"]["it19140162sphone"].value;

        if (planNum == "") {
            alert("Plan Number must be filled out");
            return false;
        }
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

      render(){
        return(
        <div className="container"> 
        <HeaderCom/>
            <br/>
            <div className= "it19140162-sub1">
            <br/> <p className = "it19140162-topic1">Get Ready To Discover Your Dream Home..</p><br/><br/><br/><br/><br/><br/></div>
                
            <div className = "it19140162-mainDiv">        
                
                <div className = "it19140162-sub3">
            
                    <div className="form-group"> <br/><br/>
                        
                    </div>
                    <div className = "it19140162-boarderd">
                        
                    </div>

                </div>  
                <div className = "it19140162-sub4">
                <br/><br/><br/>
                     <form className="shadow p-3 mb-5 bg-white rounded" onSubmit={sendData}  name = "it19140162-usereSystemizedReqForm"> 

                     <div className="form-group">

                        <h4><b>Make Your Request</b></h4>

                     </div> 
                        
                     <div className="form-group">
                        <label for="it19140162-planNumber">Plan Number</label>
                        <input type="text" className="form-control" id="it19140162-planNumber" placeholder="SP0000" name="it19140162splanNum"
                        
                            onChange={(e) => {
                                setPlanNumber(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-name">Name</label>
                        <input type="text" className="form-control" id="it19140162-name" placeholder="Enter your name" name="it19140162sname"
                        
                            onChange={(e) => {
                                setName(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-email">Email address</label>
                        <input type="email" className="form-control" id="it19140162-email" placeholder="name@example.com" name="it19140162semail"
                        
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </div>
                    
                    <div className="form-group">
                        <label for="it19140162-phone">Phone</label>
                        <input type="text" className="form-control" id="it19140162-phone" placeholder="Enter your phone number" name="it19140162sphone"
                        
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
      

    )}

}