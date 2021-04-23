import React, {useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import img1 from '../images/edit.png';
import img2 from '../images/delete.png';

export default function UserDashConstruction(){

    const [rNum,setRequestNumber] = useState("");

    function sendData(e){
        e.preventDefault(); 

        
        const newCRequest = {
            
        }
        
        axios.post("http://localhost:8070/customizedReq/add",newCRequest).then(()=>{
            alert("req added")
            
        } ).catch((err)=>{
            alert(err)
        })
    }


    return(


        <div className="container">

                <div className= "sub1">
                    <p className = "topic1">My Construction Requests</p><br/><br/><br/><br/><br/><br/>
                </div>
                <br/><br/>
                <div className="mainDiv3">

                    <h5>Systemized Requests</h5><br/>

                    <div className="row1col111">
 
                        <div className="row1colone"> <p>Request Number SP0243 </p>   </div>
                        <div className="row1colone"> <Link to ="/editSreq"><img className="imgd" src={img1} /> <p>Edit</p> </Link>   </div>
                        <div className="row1colone"> </div>

                    </div>
                    <br/>
                    
                    <div className="row1col111">  

                        <div className="row1colone"><h5>Customized Requests</h5></div> <div className="row1colone"></div> <div className="row1colone"></div>
                        <div className="row1colone"><br/></div> <div className="row1colone"><br/></div> <div className="row1colone"><br/></div>
                        <div className="row1colone"> <p>Request Number CP9033 </p>   </div>
                        <div className="row1colone"> <Link to ="/editCreq"><img className="imgd" src={img1} /> <p>Edit</p> </Link>   </div>
                        <div className="row1colone">  </div>

                    </div>

                </div>

                <br/> <br/>

                <div className="dpr">

                    <p className="printS"><b>Enter Request Number To Get A Printed Copy </b>  </p>
                    
                    <div className="prB">
                    
                    <div className="pb"><input type="text" className="rNumber" id="rNum"
                            
                            onChange={(e) => {
                                setRequestNumber(e.target.value);
                            }}  /> </div>
                        <div className="pb">
                        <Link to ="/userConsPrint">
                            <button type= "submit" id = "userConsPrint" className = "btn btn-success" >OK</button>
                        </Link> </div>

                    </div>

                </div>

        </div>

    )

};