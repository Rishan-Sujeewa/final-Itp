import React, {Component} from "react";
import axios from "axios";
import './../../css/IT19140162.css';
import jsPDF from 'jspdf';
import bc from '../../images/bc.png'
import Admin_dash from '../Admin_dash/home';

class viewReq extends Component{

      constructor(props){
        super(props);
        //setting up state
        this.state={            
            design: '',
            planNumber:'',
            Cname:'',
            email:'',
            phone:'',
            comments:'',
            startingDate:''
        }

    }



    
    //component eka load weddi awith thiyenna oni data danne mekata
    componentDidMount(){
        
        axios.get(`http://localhost:5000/systemizedReq/${this.props.match.params.id}`) 
            .then(res => {                
               this.setState({design:res.data.Systemized});
               this.setState({Cname : res.data.Systemized.name})
               this.setState({email: res.data.Systemized.email})
               this.setState({phone : res.data.Systemized.phone})
               this.setState({comments : res.data.Systemized.otherComments})
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

    buttonSubmit=(e)=>{
        e.preventDefault();

        const editC ={
            planNumber:this.state.design.planNumber,
            name:this.state.Cname,
            email:this.state.email,
            phone:this.state.phone,
            otherComments:this.state.comments,
            startingDate:this.state.startingDate

        }

        axios.put(`http://localhost:5000/systemizedReq/update/${this.state.design._id}`,editC).then(()=>{
            alert("Request Eddited");
            window.location = "/adminConsDash"
            
        } ).catch((err)=>{
            alert(err)
        })
    }

    



   
      render(){
        return(
            <div><Admin_dash/>
            
        <div className="container"> 
        
            <br/>
            <div className="it19140162-editCustomizedimgTopic1"><center> <p className = "it19140162-topic1AdminDash">Edit Systemized Construction Requests</p> </center> </div>
      
            <div className = "it19140162-mainDiv">        
                
                <div className = "it19140162-sub3">
                <br/><br/><br/>  <div className="it19140162-editCustomizedimgTopic1"> <img className="it19140162-insertDesignBackGround" src={bc}/>  </div>
                </div> 

                <div className = "it19140162-sub4">
                <br/><br/><br/>
                     <form className="shadow p-3 mb-5 bg-white rounded"  name = "it19140162-usereSystemizedReqForm" > 

                     <div className="form-group">

                        <h4><b></b></h4>

                     </div> 
                        
                     <div className="form-group">
                        <label for="it19140162-planNumber">Plan Number</label>
                        <input type="text" className="form-control" id="it19140162-planNumber"   name="planNumber" value={this.state.design.planNumber} readOnly/>
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-name">Name</label>
                        <input type="text" className="form-control" id="it19140162-name" placeholder="Enter your name" name="Cname" value={this.state.Cname}  
                        onChange={(e)=>{
                            this.handlerChange(e)}
                        }
                         />
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-email">Email address</label>
                        <input type="email" className="form-control" id="it19140162-email" placeholder="name@example.com" name="email" value={this.state.email} 
                        onChange={
                            this.handlerChange
                        }
                        />
                       
                    </div>
                    
                    <div className="form-group">
                        <label for="it19140162-phone">Phone</label>
                        <input type="text" className="form-control" id="it19140162-phone" placeholder="Enter your phone number" name="phone" value={this.state.phone} 
                        contentEditable ="true"
                        onChange={
                            this.handlerChange
                        }
                       />
                    </div>

                    <div className="form-group">
                        <label for="it19140162-phone">Project Starting Date</label>
                        <input type="date" className="form-control" id="it19140162-date" name="startingDate" 
                        onChange={
                            this.handlerChange
                        }
                       />
                    </div>


                    <div className="form-group">
                            <label for="it19140162-comments">Other Comments</label>
                            <textarea className="form-control" id="it19140162-comments" rows="3" name="comments" value={this.state.comments}
                               onChange={
                                  this.handlerChange
                              } >    
                              
                            </textarea>
                    </div>

                    <div>
                        <button type="submit" className="btn btn-success" onClick={this.buttonSubmit}>SAVE CHANGES</button>
                    </div>
        </form>
                </div>
                
                </div><br/>
            </div>          
      
            </div>
    )}

}
export default viewReq;