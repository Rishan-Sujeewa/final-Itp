const router = require('express').Router();

let cart = require('../models/cart');

//insert cart
router.route('/cart').post((req, res)=>{

    //const cus_id = req.body.cus_id;
    const cartItems = req.body.cartItems;   
    const product = req.body.product;
    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);

    const newCartItems = new cart({
        //cus_id,
        cartItems,
        product,
        quantity,
        price
    })

    newCartItems.save().then(()=>{
        res.json("Goods added in to the Carts");
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;