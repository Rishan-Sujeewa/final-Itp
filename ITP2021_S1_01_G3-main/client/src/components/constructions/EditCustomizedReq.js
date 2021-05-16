import React, {Component} from "react";
import axios from "axios";
import './../../css/IT19140162.css';
import  HeaderCom from './header';
import bc from '../../images/bc.png'

export default class EditCustemizedReq extends Component{

    constructor(props){
        super(props);
        this.state = {
            desgin : '',
            image : '',
            name : '',
            email :'',
            phone: '',
            otherComments: ''
        }
    }

    handlerChange = (e) =>{

        this.setState({[e.target.name] : e.target.value})

    }

   componentDidMount(){
       
            axios.get(`http://localhost:5000/customizedReq/get/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data.Customized); 
               this.setState({desgin : res.data.Customized});
               this.setState({name : res.data.Customized.name});
               this.setState({email : res.data.Customized.email});
               this.setState({phone : res.data.Customized.phone});
               this.setState({otherComments : res.data.Customized.otherComments});
               console.log('data is retreived');
               
            }) 
            .catch((err)=>{
                console.log('error in fetching');
                console.log(err);
            })
        }
    
        

        
    
    
    sendData = (e) => {
        e.preventDefault(); 

        const {name, email,phone} = this.state;
        alert(this.state.otherComments);
        const newCRequest = {
            
            name,
            email,
            phone,
            otherComments : this.state.otherComments
        }
        
        axios.put(`http://localhost:5000/customizedReq/update/${this.props.match.params.id}`,newCRequest).then(()=>{
            alert("req added")
            
        } ).catch((err)=>{
            alert(err)
        })
    }

render(){
    return(
        <ul>
            

        <div className="container"> <br/>

        
            <div className="it19140162-editCustomizedimgTopic1"><center><h2> <b>Edit Customized Request</b></h2>  </center></div> <br/><br/>

       
            <div className = "it19140162-mainDiv">  

            <div className = "it19140162-sub3">
                <div className="it19140162-editCustomizedimgTopic1"> <img className="it19140162-insertDesignBackGround" src={bc}/>  </div>
            </div>        
                
                <form className="shadow p-3 mb-5 bg-white rounded" >  

                    <div className="form-group">
                        <label for="it19140162-name">Name</label>
                        <input type="text" className="form-control" id="it19140162-name" name ="name"
                            value = {this.state.name}
                            onChange={(e)=>{
                                this.handlerChange(e)}
                            }
                        />
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-email">Email address</label>
                        <input type="email" className="form-control" id="it19140162-email" name = "email"
                        value = {this.state.email}
                        onChange={(e)=>{
                            this.handlerChange(e)}
                        }
                       />
                    </div>
                    
                    <div className="form-group">
                        <label for="it19140162-phone">Phone</label>
                        <input type="text" className="form-control" id="it19140162-phone" name="phone" 
                        value = {this.state.phone} onChange={(e)=>{
                            this.handlerChange(e)}
                        }
                       />
                    </div>


                    <div className="form-group">
                            <label for="it19140162-comments">Other Comments</label>
                            <textarea className="form-control" id="it19140162-comments" rows="3" value = {this.state.comments} name="otherComments"
                           
                           onChange={
                            this.handlerChange
                        }>      
                            </textarea>
                    </div>

                    <div className="form-group"> <br/>
                        <label for="it19140162-plan">Edit Your Plan</label>
                        <input type="file" className="form-control-file" id="it19140162-image"/> 
                    </div>

                    <div>
                        <button type="submit" className="btn btn-success" onClick={this.sendData}>SAVE CHANGES</button>
                    </div>
        </form>
                
                
                </div><br/>
            </div>          
      

     </ul> )}

                        }