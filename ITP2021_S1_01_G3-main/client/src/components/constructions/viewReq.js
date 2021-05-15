import React, {Component} from "react";
import axios from "axios";
import './../../css/IT19140162.css';
import  HeaderCom from './header';

class viewReq extends Component{

      constructor(props){
        super(props);
        //setting up state
        this.state={            
            design: ''
        }

    }

    //component eka load weddi awith thiyenna oni data danne mekata
    componentDidMount(){
        
        axios.get(`http://localhost:5000/systemizedReq/${this.props.match.params.id}`) 
            .then(res => {                
               this.setState({design:res.data.Systemized});
               console.log('data is retreived');
               console.log(res);
               
            }) 
            .catch((err)=>{
                console.log('error in fetching');
                console.log(err);
            })
       

    }

   
      render(){
        return(
        <div className="container"> 
        <HeaderCom/>
            <br/>
            <div className= "it19140162-sub1">
            <br/> <p className = "it19140162-topic1">Customer Requests</p><br/><br/><br/><br/><br/><br/></div>
                
            <div className = "it19140162-mainDiv">        
                
                <div className = "it19140162-sub3">
            
                    <div className="form-group"> <br/><br/>
                        
                    </div>
                    <div className = "it19140162-boarderd">
                        
                    </div>

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
                        <input type="text" className="form-control" id="it19140162-name" placeholder="Enter your name" name="Cname" value={this.state.design.name} readOnly
                        
                         />
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-email">Email address</label>
                        <input type="email" className="form-control" id="it19140162-email" placeholder="name@example.com" name="email" value={this.state.design.email} readOnly
                        />
                       
                    </div>
                    
                    <div className="form-group">
                        <label for="it19140162-phone">Phone</label>
                        <input type="text" className="form-control" id="it19140162-phone" placeholder="Enter your phone number" name="phone" value={this.state.design.phone} readOnly
                        
                       />
                    </div>


                    <div className="form-group">
                            <label for="it19140162-comments">Other Comments</label>
                            <textarea className="form-control" id="it19140162-comments" rows="3" name="comments" value={this.state.design.otherComments} readOnly>
                                  
                            </textarea>
                    </div>

                    <div>
                        <button type="submit" className="btn btn-success" >Download</button>
                    </div>
        </form>
                </div>
                
                </div><br/>
            </div>          
      

    )}

}
export default viewReq;