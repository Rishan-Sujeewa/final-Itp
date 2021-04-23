import React,{useState, useEffect} from 'react';
import './IT19184722OrderDash.css';
import axios from 'axios';

export default function Order(){

        const [Orders,setOrders] = useState([]);
        
        useEffect(()=>{
            function viewOrders(){
                axios.get("http://localhost:5000/api/admin/orders").then((res)=>{
                    setOrders(res.data);               
                }).catch((err)=>{
                    alert(err.message);
                })
            }
            viewOrders();

            /*function assignVehicle(){
                axios.get("http://localhost:8070/api/admin/orders/:id").then((res)=>{
                    setOrders(res.data);               
                }).catch((err)=>{
                    alert(err.message);
                })
            }
            assignVehicle();*/
        },[])

        return (
          <body className="IT19184722body">
            
            <h2 className="IT19184722DashTitle">ORDER DASHBOARD</h2>

            <br/>

            <input
              className="form-control"
              type="search"
              placeholder="Search by Customer name"
              name="searchQuery"
            />

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
                         
                    <select name="cars" id="arrangedVehicle">

                            <option>{post.arrangedVehicle}</option>
                            <option value='abc-9089'>abc-9089</option>
                            <option value='bac-5676'>bac-5676</option>
                            <option value='cde-7679'>cde-7679</option>
    
                    </select>
                </div>
                     <div className="IT19184722btn"> <button type="submit" name id className="btn btn-primary ">CONFIRM</button> </div>
              </div>
          </div>
        </div>
      </div>
    )}
    
    </form>
  </body>
  )
}