import React,{useState, useEffect} from 'react';
import {jsPDF} from 'jspdf';
import 'jspdf-autotable';
import './IT19184722OrderDash.css';
import axios from 'axios';

export default function Order(){

        let [search, setSearch] = useState("");
        let [Orders,setOrders] = useState([]);
        let [vehicleID, setVehicle] = useState("");
        
        useEffect(()=>{
            function viewOrders(){
                axios.get("http://localhost:5000/api/admin/orders").then((res)=>{
                    setOrders(res.data);               
                }).catch((err)=>{
                    alert(err.message);
                })
            }
            viewOrders();
        },[])


        //search filter
        if(search.length > 0){
          Orders = Orders.filter((i) => {
              return i.name.toLowerCase().match(search.toLowerCase());
          });
        }

        //Assign vehicle
        const getVehicle = e=>{setVehicle(e.target.value);}

        const assignVehicle = async(id,CustomerName) => {
        let assign;
     
        if(window.confirm("Are assign "+ vehicleID +" vehicle to deliver,\n \nCustomer name : " + CustomerName + "'s order\nOrder ID : "+ id +"?")){
          assign = await axios.post(`http://localhost:5000/api/admin/orders/deliver`,{id,vehicleID});
        }
        if(assign) {
            localStorage.setItem('cusDelMsg', "Assigned delivery vehicle to " + CustomerName +"'s, order successfully!");
            window.location = "/admin/orders"
        }
           
      }

      //Delete order
        const deleteOrder = async(id,CustomerName) => {
          let deletion;
     
          if(window.confirm("Are you sure about deleting " + CustomerName + "'s \nOrder ID :"+ id +" ?")){
              deletion = await axios.delete(`http://localhost:5000/api/admin/orders/delete/${id}`);
          }
          if(deletion) {
              localStorage.setItem('cusDelMsg', "Order record of " + CustomerName +", was deleted successfully!");
              window.location = "/admin/orders"
          }
           
      }


        //Generate Order report
        const pdf = () => {
          const loading = document.getElementById('loading');
          loading.style.display = "";//display loading icon
          const dwnIcon = document.getElementById('dwn-icon');
          dwnIcon.style.display = "none";//hide download icn
  
          setTimeout(() => {  
              loading.style.display = "none";
              dwnIcon.style.display = "";
          }, 1300);//display loading icon for 2 seconds  
  
          let bodyData = [];
          for(let i = 0; Orders.length > i ; i++){
              bodyData.push([Orders[i]._id, Orders[i].name,Orders[i].deliveryAddress, "0"+Orders[i].phNo, Orders[i].arrangedVehicle]);
          }//save json data to bodydata in order to print in the pdf table
  
          const doc = new jsPDF({orientation:"portrait"});
          var time = new Date().toLocaleString();
          doc.setFontSize(27);
          doc.text(`Received Order Report`, 105, 13, null, null, "center");
          doc.setFontSize(10);
          doc.text(`(Generated on ${time})`, 105, 17, null, null, "center");
          doc.setFontSize(12);
          doc.text("Thilina Hardware - No 55, Main Road, Horana", 105, 22, null, null, "center");
          
          doc.autoTable({
              theme : 'grid',
              styles: {halign:'center'},
              headStyles:{fillColor:[71, 201, 76]},
              startY:27,
              head: [['Order Id','Customer Name','Delivery Address','Phone No', 'Arranged Vehicle']],
              body: bodyData
          })
          doc.save('OrderReport.pdf');
      }


      
        return (
          <body className="IT19184722body">
            
            <h2 className="IT19184722DashTitle">ORDER DASHBOARD</h2>

            <br/>

            {/* Search filter */}
            <input id="it19951386-search-filter" className="form-control" type="text" placeholder="Search by Customer name" onChange={(e) => {setSearch(e.target.value)}} value={search}/>
            
            <br/>

            {/* Generate Order Report */}
            <div>
            <button onClick={pdf} className="btn it19951386-trans-green-btn"><svg id="dwn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
            </svg><span className="spinner-border spinner-border-sm" id="loading" role="status" aria-hidden="true" style={{display:'none'}}></span> Download</button>
            </div>
            {/* ------------------------------ */}

              <form className="IT19184722form">
                
            {Orders.map
                    (post =>
                      <div className="row justify-content-center ">
                      <div className="col-xl-10">
                
              <div className="card shadow-lg ">

                <div className="card-body">

                  <div className="card-h-label">
                    <label className="IT19184722bodyLbl"><b>Date :  {post.createdAt}</b></label>
                    
                    <hr className="my-2" />

                    <label className="IT19184722bodyLbl"><b>Order Id : {post._id}</b></label>
                    <br/>
                    <label className="IT19184722bodyLbl"><b>Cart Id : {post.cart}</b></label>
                  </div>
                <div className="card-body pt-0">
                    <hr className="my-2" />
                    
                    <br/>
                    <br/>
                    <hr className="my-0" />

                    <br/>

                    <label className="mb-1"><b>Name : {post.name}</b></label><br/>
                    <label className="mb-1"><b>Delivery Address : {post.deliveryAddress}</b></label><br/>
                    <label className="mb-1"><b>Phone Number : {post.phNo}</b></label><br/><br/>

                  
                    <label className="mb-1"><b>Assign a Vehicle : </b></label>
                         
                    <select value={vehicleID} onChange={getVehicle} name="cars" id="arrangedVehicle">

                            <option>{post.arrangedVehicle}</option>
                            <option value='Not Processed'>Not Processed</option>
                            <option value='abc-9089'>abc-9089</option>
                            <option value='bac-5676'>bac-5676</option>
                            <option value='cde-7679'>cde-7679</option>
    
                    </select>
                </div>
                  {/* Delete Orders */}
                    <button onClick={() => deleteOrder(post._id,post.name)} className="btn btn-danger it19951386-mybtn it19951386-red-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>
                    Delete</button>

                  {/* Assign vehicle */}
                    <div className="IT19184722btn">
                    <button type="submit" onClick={() => assignVehicle(post._id,post.name)} name id className="btn btn-primary ">CONFIRM</button> 
                    </div>
              </div>
          </div>
        </div>
      </div>
    )}
    
    </form>
  </body>
  )
}