import React from 'react';
import './userHistory.css';


export default function userHistory(){
    
        return (

          <body className="DNbodyH">
                <form>
                <div className=" container-fluid my-5 ">
        <div className="row justify-content-center ">
         <div className="col-xl-10">
          <div className="card shadow-lg ">
                <div className="row p-2 mt-3 justify-content-between mx-sm-2">
                <div className="col">
                {/* Logo */}
            {/* <div className="row justify-content-start ">
              <div className="col"> <img className="irc_mi img-fluid cursor-pointer " src="https://i.imgur.com/jFQo2lD.png" width={70} height={70} /> </div>
            </div> */}
          </div>
        </div>
        
        <div className="row justify-content-around">
         
          <div className="col-md-5">
            <div className="card border-0 ">
              <div className="card-header DNcard-2">
                <h3 className="myHistory">My History</h3>
                <hr className="my-2" />
              </div>
              <div className="card-body pt-0">
                <hr className="my-2" />
                <div className="row ">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
</body>      
        );
}