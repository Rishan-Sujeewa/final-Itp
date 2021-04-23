import React,{useState} from 'react';
import './Checkout_DN.css';
import axios from 'axios';

export default function Checkout(){

        const [name,setName] = useState("");
        const [deliveryAddress, setDeliveryAddress] = useState("");
        const [phNo, setPhNo] = useState("");

        
        function checkout(e){
                e.preventDefault();

                const newCheckout ={
                        name,
                        deliveryAddress,
                        phNo  
                }

                axios.post("http://localhost:5000/api/cart/checkout", newCheckout).then(()=>{
                        alert("You placed order, Successfully");
                }).catch((err)=>{
                        alert(err);
                })
        }

    
        return (

          <body className="DNbodyC">
                <form onSubmit={checkout}>
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
        <div className="row mx-auto justify-content-center text-center">
          <div className="col-12 mt-3 ">
            <nav aria-label="DNbreadcrumb" className="second ">
              <ol className="breadcrumb indigo lighten-6 first ">
                <li className="breadcrumb-item font-weight-bold "><a className="DNa" href="#"><span className="mr-md-3 mr-1">BACK TO SHOP</span></a><i className="fa fa-angle-double-right " aria-hidden="true" /></li>
                <li className="breadcrumb-item font-weight-bold"><a className="DNa" href="/cart"><span className="mr-md-3 mr-1">SHOPPING CART</span></a><i className="fa fa-angle-double-right text-uppercase " aria-hidden="true" /></li>
                <li className="breadcrumb-item font-weight-bold"><a className="DNa active-2" href="./checkout"><span className="mr-md-3 mr-1">CHECKOUT</span></a></li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-5">
            <div className="card border-0">
              <div className="card-header pb-0">
                <h2 className="card-title space ">Checkout</h2>
                <p className="card-text text-muted mt-4 space">ORDER CONFIRMATION DETAILS</p>
                <hr className="my-0" />
              </div>
              <div className="card-body">

                <div className="form-group"> <label  className="small text-muted mb-1">ENTER YOUR NAME</label> <input type="text" className="form-control form-control-sm" name="NAME" id="name" aria-describedby="helpId" placeholder="Enter your name" required onChange={(e)=>{
                                        setName(e.target.value);
                                    }}/> </div>

                <div className="form-group"> <label  className="small text-muted mb-1">DELIVERY ADDRESS</label> <input type="text" className="form-control form-control-sm" name="NAME" id="deliveryAddress" aria-describedby="helpId" placeholder="Enter your delivery address" required onChange={(e)=>{
                                        setDeliveryAddress(e.target.value);
                                    }}/> </div>

                <div className="form-group"> <label  className="small text-muted mb-1">PHONE NUMBER</label> <input type="text" className="form-control form-control-sm" name="NAME" id="NAME" aria-describedby="helpId" placeholder="Enter your phone number / Ex: 781234567" required onChange={(e)=>{
                                        setPhNo(e.target.value);
                                    }}/> </div>
                 
                <div className="row mb-md-5">
                  <div className="col"> <button type="submit" name id className="btn btn-lg btn-block ">PLACE THE ORDER</button> </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card border-0 ">
              <div className="card-header DNcard-2">
                <p className="card-text text-muted mt-md-4 mb-2 space">YOUR CART</p>
                <hr className="my-2" />
              </div>
              <div className="card-body pt-0">
                <hr className="my-2" />
                <div className="row ">
                  <div className="col">
                    <div className="row justify-content-between">
                      <div className="col-4">
                        <p className="mb-1"><b>Subtotal</b></p>
                      </div>
                      <div className="flex-sm-col col-auto">
                        <p className="mb-1"><b>Rs.0</b></p>
                      </div>
                    </div>
                    
                    <div className="row justify-content-between">
                      <div className="col-4">
                        <p><b>Total</b></p>
                      </div>
                      <div className="flex-sm-col col-auto">
                        <p className="mb-1"><b>Rs.0</b></p>
                      </div>
                    </div>
                    <hr className="my-0" />
                  </div>
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