const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const schema = mongoose.Schema;

//create cart
const cartSchema = new schema({
    /*userId: { 
        //type: ObjectId, 
        //ref: 'user',
        type: String, 
        required: true 
    },*/

    cartItems:[
        {
            product: { 
                //type: ObjectId,
                //ref: 'product', 
                type: String,
                required: true 
            },
            quantity: { 
                type: Number,
                default: 1 
            },
            price: { 
                type: Number, 
                required: true
            }
        }
    ]
},

    { timestamps: true }
);


module.exports = mongoose.model('cart', cartSchema);