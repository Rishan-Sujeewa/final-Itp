import React, {Component} from "react";
import axios from "axios";
import './../../css/IT19140162.css';
import  HeaderCom from './header';

class AddSystemizedReq extends Component{

    // const [planNumber,setPlanNumber] = useState("");
    // const [name,setName] = useState("");
    // const [email,setEmail] = useState("");
    // const [phone,setPhone] = useState("");
    // const [comments,setComments] = useState("");

    constructor(props){
        super(props);
        //setting up state
        this.state={            
            Cname:'',
            email:'',
            phone:'',
            comments:'',
            designD:''
        }

    }

    //component eka load weddi awith thiyenna oni data danne mekata
    componentDidMount(){
        
        axios.get(`http://localhost:5000/systemizedDesig/${this.props.match.params.id}`) 
            .then(res => {                
               this.setState({designD:res.data.SystemizedD});
               console.log('data is retreived');
               console.log(res);
               
            }) 
            .catch((err)=>{
                console.log('error in fetching');
                console.log(err);
            })

    }

    handlerChange = (e) =>{

        this.setState({[e.target.name] : e.target.value})

    }
    
     sendData=(e)=>{
        e.preventDefault(); 

        this.validateUserSystemizedReqForm();

        
    
        const newCRequest = {
            planNumber : this.state.designD.designNum,
            Cname : this.state.Cname,
            email : this.state.email,
            phone: this.state.phone,
            comments : this.state.comments
            
        }
        
        axios.post("http://localhost:5000/systemizedReq/addS",newCRequest).then(()=>{
            alert("req added");
            window.location = "/findHome"
            
        } ).catch((err)=>{
            alert(err)
        })
    }

     validateUserSystemizedReqForm =() => {
        var planNum = document.forms["it19140162-usereSystemizedReqForm"]["planNumber"].value;
        var Cname = document.forms["it19140162-usereSystemizedReqForm"]["Cname"].value;
        var email = document.forms["it19140162-usereSystemizedReqForm"]["email"].value;
        var phone = document.forms["it19140162-usereSystemizedReqForm"]["phone"].value;

        if (planNum == "") {
            alert("Plan Number must be filled out");
            return false;
        }
        if (Cname == "") {
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
                     <form className="shadow p-3 mb-5 bg-white rounded"  name = "it19140162-usereSystemizedReqForm"> 

                     <div className="form-group">

                        <h4><b>Make Your Request</b></h4>

                     </div> 
                        
                     <div className="form-group">
                        <label for="it19140162-planNumber">Plan Number</label>
                        <input type="text" className="form-control" id="it19140162-planNumber"  value={this.state.designD.designNum} name="planNumber" readOnly/>
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-name">Name</label>
                        <input type="text" className="form-control" id="it19140162-name" placeholder="Enter your name" name="Cname"
                        
                        onChange={
                            this.handlerChange
                        }  />
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-email">Email address</label>
                        <input type="email" className="form-control" id="it19140162-email" placeholder="name@example.com" name="email"
                        
                        onChange={
                            this.handlerChange
                        } />
                    </div>
                    
                    <div className="form-group">
                        <label for="it19140162-phone">Phone</label>
                        <input type="text" className="form-control" id="it19140162-phone" placeholder="Enter your phone number" name="phone"
                        
                        onChange={
                            this.handlerChange
                        }/>
                    </div>


                    <div className="form-group">
                            <label for="it19140162-comments">Other Comments</label>
                            <textarea className="form-control" id="it19140162-comments" rows="3" name="comments"
                            onChange={
                                this.handlerChange
                            }>      
                            </textarea>
                    </div>

                    <div>
                        <button type="submit" className="btn btn-success"  onClick={this.sendData}>SEND REQUEST</button>
                    </div>
        </form>
                </div>
                
                </div><br/>
            </div>          
      

    )}

}
export default AddSystemizedReq;