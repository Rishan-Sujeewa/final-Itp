import React, {useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import img1 from '../../images/edit.png';
import img2 from '../../images/delete.png';
import './../../css/IT19140162.css';
import Admin_dash from '../Admin_dash/home';

export default function AdminConstruction(){

    return(

        
            
        <div> <Admin_dash/> 

        <div className="container">
       

                <div className= "it19140162-sub1">
                    <p className = "it19140162-topic1">Construction Requests</p>
                </div>

                <br/><br/>
                <div className="it19140162-mainDiv3">

                    <h4>Systemized Requests</h4><br/>

                    <div className="it19140162-row1col11">
 
                        <div className="it19140162-row1colone"> <p>Request Number </p>   </div>
                        <div className="it19140162-row1colone"> <Link to ="/editSreq"><img className="it19140162-imgd" src={img1} />  </Link>   </div>
                        <div className="it19140162-row1colone"> <img className="it19140162-imgd" src={img2} /> </div>

                    </div> 
                </div>
                <div className="it19140162-mainDiv3">
                <h4>Customized Requests</h4><br/>
                    <div className="it19140162-row1col11">

                       
                        <div className="it19140162-row1colone"> <p>Request Number </p>   </div>
                        <div className="it19140162-row1colone"> <Link to ="/editCreq"><img className="it19140162-imgd" src={img1} />  </Link>   </div>
                        <div className="it19140162-row1colone"> <img className="it19140162-imgd" src={img2} /> </div>

                    </div>

                </div>


        </div>

        </div>
    )
};