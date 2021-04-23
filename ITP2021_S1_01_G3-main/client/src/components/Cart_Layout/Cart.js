import React, { Component } from 'react';
import './Cart_DN.css';

export default class Cart extends Component {
    
    render() {
        return (
          <body className="DNbody">
          <form >
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
            <nav aria-label="breadcrumb" className="second ">
              <ol className="breadcrumb indigo lighten-6 first ">
                <li className="breadcrumb-item font-weight-bold "><a className="DNa " href="#"><span className="mr-md-3 mr-1">BACK TO SHOP</span></a><i className="fa fa-angle-double-right " aria-hidden="true" /></li>
                <li className="breadcrumb-item font-weight-bold"><a className="DNa active-2" href="./cart"><span className="mr-md-3 mr-1">SHOPPING CART</span></a><i className="fa fa-angle-double-right text-uppercase " aria-hidden="true" /></li>
                <li className="breadcrumb-item font-weight-bold"><a className="DNa " href="./cart/checkout"><span className="mr-md-3 mr-1">CHECKOUT</span></a></li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-5">
            <div className="card border-0">
              <div className="card-body">
 
              <div className="card border-0 ">
              <div className="card-header card-2">
                <h2 className="cartHeadTitle">YOUR CART</h2>
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
          <div className="col-md-5">
                 </div>
              </div>
            </div>
            <div className="col"><button type="submit" name id className="btn btn-lg btn-block " >CHECKOUT</button></div>
            <br/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</form>
</body>
            

        )
    }
}
