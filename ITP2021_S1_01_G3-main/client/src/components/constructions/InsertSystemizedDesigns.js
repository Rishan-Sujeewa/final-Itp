import React, {useState} from "react";
import axios from "axios";
import './../../css/IT19140162.css';
import {Link} from 'react-router-dom';
import bc from '../../images/bc.png'

export default function InsertSystemizedDesigns(){

    const [designNum,setDesignNum] = useState("");
    const [landArea,setLandArea] = useState("");
    const [buildingArea,setBuildingArea] = useState("");
    const [bedRooms,setBedRooms] = useState("");
    const [bathRooms,setBathRooms] = useState("");
    const [img,setImgs] = useState("");
    
    function sendData(e){
        e.preventDefault(); 

        
        const newSysDesigns = {
            designNum,
            landArea,
            buildingArea,
            bedRooms,
            bathRooms,
            img
        }
        
        axios.post("http://localhost:5000/systemizedDesig/addDesign",newSysDesigns).then(()=>{
            alert("req added")
            
        } ).catch((err)=>{
            alert(err)
        })
    }


    return(
    

        <div className="container"> 
           <br/>
            <div className = "it19140162-mainDiv">  
            <div className="it19140162-insertDesignTopic">
                <div className="it19140162-insertDesignTopic1"><p className = "it19140162-topic1">Insert System Design Details</p></div> 
                <div className="it19140162-insertDesignTopic1"><img className="it19140162-insertDesignBackGround" src={bc}></img> </div>
            </div>   
                <div className = "it19140162-sub4">
                     <form className="shadow p-3 mb-5 bg-white rounded" onSubmit={sendData}>  

                     <div className="form-group">
                        <label for="it19140162-designNum">Design Number</label>
                        <input type="text" className="form-control" id="it19140162-designNum" placeholder="SP0000"
                        
                            onChange={(e) => {
                                setDesignNum(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-landArea">Land Area</label>
                        <input type="text" className="form-control" id="it19140162-landArea" 
                        
                            onChange={(e) => {
                                setLandArea(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group">
                        <label for="it19140162-buildingArea">Building Area</label>
                        <input type="text" className="form-control" id="it19140162-buildingArea" 
                        
                        onChange={(e) => {
                            setBuildingArea(e.target.value);
                        }} />
                    </div>
                    
                    <div className="form-group">
                        <label for="it19140162-bedRooms">Bed Rooms</label>
                        <input type="text" className="form-control" id="it19140162-bedRooms" 
                        
                        onChange={(e) => {
                            setBedRooms(e.target.value);
                        }} />
                    </div>

                    <div className="form-group">
                        <label for="it19140162-bathRooms">Bathrooms</label>
                        <input type="text" className="form-control" id="it19140162-bathRooms" 
                        
                            onChange={(e) => {
                                setBathRooms(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group"> 
                        <label for="it19140162-bathRooms">Insert Images</label>
                        <input type="file" className="form-control-file" id="it19140162-image"/> 
                    </div>
                    <br/>
                    <div>
                        <button type="submit" className="btn btn-success">INSERT DETAILS</button>
                    </div>
        </form>
                </div>
                
                </div><br/>
            </div>          
      

    )

}