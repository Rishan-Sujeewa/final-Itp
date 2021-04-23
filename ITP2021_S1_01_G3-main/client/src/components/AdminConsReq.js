import React, {useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import img1 from '../images/edit.png';
import img2 from '../images/delete.png';

export default function AdminConstruction(){

    return(


        <div className="container">

                <div className= "sub1">
                    <p className = "topic1">Construction Requests</p>
                </div>

                <br/><br/>
                <div className="mainDiv3">

                    <h4>Systemized Requests</h4><br/>

                    <div className="row1col11">
 
                        <div className="row1colone"> <p>Request Number </p>   </div>
                        <div className="row1colone"> <Link to ="/editSreq"><img className="imgd" src={img1} />  </Link>   </div>
                        <div className="row1colone"> <img className="imgd" src={img2} /> </div>

                    </div> 

                    <div className="row1col11">

                        <h4>Customized Requests</h4><br/>
                        <div className="row1colone"> <p>Request Number </p>   </div>
                        <div className="row1colone"> <Link to ="/editCreq"><img className="imgd" src={img1} />  </Link>   </div>
                        <div className="row1colone"> <img className="imgd" src={img2} /> </div>

                    </div>

                </div>


        </div>

    )

};