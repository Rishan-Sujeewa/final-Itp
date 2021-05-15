const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    cus_id:{type: String},
    fname: { type: String},
    lname:{ type: String },
    email:{ type: String},
    address:{ type: String},
    pNo:{ type: Number},
    hashedPassword: {type: String},
    systemReq : [
        {
            planNumber : {
                type:String,
                required:true
            },
        
            name : {
                type:String,
                required:true
            },
            email:{
                type:String
            },
            phone:{
                type:String,
                required:true 
            },
            otherComments:{
                type:String
            }
        }
    ],
    customizedReq:[
        {
            name : {
                type:String,
                required:true
            },
            email:{
                type:String
            },
            phone:{
                type:String,
                required:true 
            },
            otherComments:{
                type:String
            }
        }
    ]
},
{collection : "Customers"}
);

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;