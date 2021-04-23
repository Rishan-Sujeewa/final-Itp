import React, {useState} from "react";
import axios from "axios";

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
        
        axios.post("http://localhost:8070/systemizedDesig/addDesign",newSysDesigns).then(()=>{
            alert("req added")
            
        } ).catch((err)=>{
            alert(err)
        })
    }


    return(
    

        <div className="container"> 
           <br/>
            <div className = "mainDiv">  
                <p className = "topic1">Insert System Design Details</p><br/>   
                
                <div className = "sub4">
                     <form onSubmit={sendData}>  

                     <div className="form-group">
                        <label for="designNum">Design Number</label>
                        <input type="text" className="form-control" id="designNum" placeholder="SP0000"
                        
                            onChange={(e) => {
                                setDesignNum(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group">
                        <label for="landArea">Land Area</label>
                        <input type="text" className="form-control" id="landArea" 
                        
                            onChange={(e) => {
                                setLandArea(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group">
                        <label for="buildingArea">Building Area</label>
                        <input type="text" className="form-control" id="buildingArea" 
                        
                        onChange={(e) => {
                            setBuildingArea(e.target.value);
                        }} />
                    </div>
                    
                    <div className="form-group">
                        <label for="bedRooms">Bed Rooms</label>
                        <input type="text" className="form-control" id="bedRooms" 
                        
                        onChange={(e) => {
                            setBedRooms(e.target.value);
                        }} />
                    </div>

                    <div className="form-group">
                        <label for="bathRooms">Bathrooms</label>
                        <input type="text" className="form-control" id="bathRooms" 
                        
                            onChange={(e) => {
                                setBathRooms(e.target.value);
                            }}  />
                    
                    </div>

                    <div className="form-group"> 
                        <label for="bathRooms">Insert Images</label>
                        <input type="file" className="form-control-file" id="image"/> 
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