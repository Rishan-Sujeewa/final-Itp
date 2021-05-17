const router = require('express').Router();

let checkout = require('../models/order');

//place the new order
router.route('/cart/checkout').post((req, res)=>{

    const cart = req.body.cart;
    //const cus_id = req.body.userId;
    //const cartItems = req.body.cartItems;
    //const product = req.body.product;
    //const totalQuantity = req.body.totalQuantity;
    //const totalPrice = req.body.totalPrice;
    const name = req.body.name;
    const deliveryAddress = req.body.deliveryAddress;
    const phNo = Number(req.body.phNo);

    const newCheckout = new checkout({

        cart,
        //cus_id,
        //cartItems,
        //product,
        //totalQuantity,
        //totalPrice,
        name,
        deliveryAddress,
        phNo,
    })

    newCheckout.save().then(()=>{
        res.json("Order placed Successfully!");

    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;