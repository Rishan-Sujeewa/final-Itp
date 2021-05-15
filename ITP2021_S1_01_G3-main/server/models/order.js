const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const schema = mongoose.Schema;

//create checkout
const checkoutSchema = new schema({

    /*userId: {
        //type: ObjectId,
        //ref: "user",
        type: String, 
        required: true,
      },*/

      /*cartItems:[
        {
            product: { 
                //type: ObjectId,
                //ref: 'product', 
                type: String,
                required: true 
            },
            totalQuantity: { 
                type: Number,
                default: 1 
            },
            totalPrice: { 
                type: Number, 
                required: true
            }
        }
    ],*/

    cart:{
        type: ObjectId,
        ref: "cart"
    },

    name : {
        type: String,
        require: true
    },
    deliveryAddress: {
        type: String,
        require: true
    },
    phNo: {
        type: Number,
        require: true
    },
    //@make connectivity between Vehicle DB
    arrangedVehicle: {
        type: String,
        default: "Not Processed"
    }

},
    { timestamps: true },

);

const checkout = mongoose.model("order", checkoutSchema);

module.exports = checkout;