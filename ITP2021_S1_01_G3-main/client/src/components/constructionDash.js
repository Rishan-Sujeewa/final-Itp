import React, {useState, Component, useEffect} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import img1 from '../images/1.0.jpg'
import img2 from '../images/2.0.jpg'
import img3 from '../images/3.0.jpg'
import img4 from '../images/4.0.jpg'
import img5 from '../images/5.0.jpg'
import img6 from '../images/6.0.jpg'

export default function ConstructionDasdhboard(){

    const [construction, setConstructions] = useState([]);    
    useEffect(() => {
        function getConst(){

            axios.get("http://localhost:8070/systemizedDesig/")
            .then(res => {
               setConstructions(res.data); 
               
               console.log('data is retreived');
               
            }) 
            .catch((err)=>{
                console.log('error in fetching');
                console.log(err);
            })
        }
        getConst();
    }, [])
     
    
         return(
    
            <div className="container">
    
                    <div className= "sub1">
                        <p className = "topic1">Get Ready To Discover Your Dream Home..</p>  
                    <Link to ="/userDashCons">
                        <button type= "submit" id = "userDashCons" className = "btn btn-success" >My Constructions</button>
                    </Link>
                    <br/><br/><br/> <br/><br/><br/>
                        
                    </div><br/>
    
                <div className="mainDiv2">
    
                    <div className="row1md2">
    
                        <div className="col1r2">
    
                            <div className="card">
                            <Link to ="/AddSystemizedReq">
                                    <img className="card-img-top" src={img1} alt="Card image cap"/>
                            </Link>
                                <div className="card-body">
                                    <p className="card-text"><b>House Design SP2134</b><br/>Land Area:16p <br/>Building Area:3000sq.ft<br/>BedRooms:5<br/>Bathrooms:3</p>
                                </div>
                            </div>
    
                        </div>
    
                        <div className="col1r2">
    
                            <div className="card">
                                    <img className="card-img-top" src={img2} alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text"><b>House Design SP0085</b><br/>Land Area:40p <br/>Building Area:5200sq.ft<br/>BedRooms:6<br/>Bathrooms:6</p>
                                </div>
                            </div>
    
                        </div>
    
                        <div className="col1r2">
    
                            <div className="card">
                                    <img className="card-img-top" src={img3} alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text"><b>House Design SP1234</b><br/>Land Area:7.5p <br/>Building Area:947sq.ft<br/>BedRooms:2<br/>Bathrooms:1</p>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
    
                    <div className="row1md2">
    
                        <div className="col1r2">
    
                            <div className="card">
                            <Link to ="/AddSystemizedReq">
                                    <img className="card-img-top" src={img4} alt="Card image cap"/>
                            </Link>
                                <div className="card-body">
                                    <p className="card-text"><b>House Design SP5674</b><br/>Land Area:80p <br/>Building Area:4000sq.ft<br/>BedRooms:5<br/>Bathrooms:4</p>
                                </div>
                            </div>
    
                        </div>
    
                        <div className="col1r2">
    
                            <div className="card">
                                    <img className="card-img-top" src={img5} alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text"><b>House Design SP9700</b><br/>Land Area:14p <br/>Building Area:2139sq.ft<br/>BedRooms:4<br/>Bathrooms:2</p>
                                </div>
                            </div>
    
                        </div>
    
                        <div className="col1r2">
    
                            <div className="card">
                                    <img className="card-img-top" src={img6} alt="Card image cap"/>
                                <div className="card-body">
                                    <p className="card-text"><b>House Design SP0456</b><br/>Land Area:12p <br/>Building Area:2675sq.ft<br/>BedRooms:5<br/>Bathrooms:3</p>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
    
    
                </div>
    
            </div>
    
        )
       
     }
    
