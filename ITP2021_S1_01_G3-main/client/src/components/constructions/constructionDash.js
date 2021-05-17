import React, { Component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import img1 from '../../images/1.0.jpg'
import img2 from '../../images/2.0.jpg'
import img3 from '../../images/3.0.jpg'
import img4 from '../../images/4.0.jpg'
import img5 from '../../images/5.0.jpg'
import img6 from '../../images/6.0.jpg'
import './../../css/IT19140162.css';
import  HeaderCom from './header';

class ConstructionDasdhboard extends Component{

    

    //const [construction, setConstructions] = useState([]);    
    //class componentwala hooks use karanna ba, a nisa useState pawichchi karanna ba
    
    constructor(props){
        super(props);
        this.state = {
            design:[]
        }
    }
    
    componentDidMount(){

        axios.get("http://localhost:5000/systemizedDesig/")
            .then(res => {
               console.log(res.data); 
               this.setState({design:res.data});
               console.log('data is retreived');
               
            }) 
            .catch((err)=>{
                console.log('error in fetching');
                console.log(err);
            })

    }
       
     
    render(){
        
        const{design} = this.state; //destructuring. this.state eka athule thiyena design kiyana array eka aragena save karagaththa
        
         return(
    
            <div> <HeaderCom/> 

                    <div className= "it19140162-sub1">
                    <br/><p className = "it19140162-topic1">Get Ready To Discover Your Dream Home..</p>  
                    
                    <br/><br/><br/> <br/><br/><br/>
                        
                    </div>
            <div className="container">
                    
                    <br/>
           

                <div className="it19140162-mainDiv2">
                    
                <div className="it19140162-row1md2">
                {design.map(getD=>(
                    <div className="it19140162-col1r2"  key={getD._id}>
                    <Link to ={`/AddSystemizedReq/${getD._id}`}>
                        <div className="card" id="it19140162-card">
                        
                                <img className="card-img-top" src={img1} alt="Card image cap"/>
                        
                            <div className="card-body">
                                <p className="card-text"><b>House Design {getD.designNum}</b><br/>Land Area: {getD.landArea} <br/>Building Area: {getD.buildingArea}sq.ft<br/>BedRooms:{getD.bedRooms}<br/>Bathrooms:{getD.bathRooms}</p>
                            </div>
                        </div></Link>
                       
                    </div>

                ))}
                </div>


                </div>

            
                
    
            </div>
            </div>
        )
       
     }}
    
     export default ConstructionDasdhboard;