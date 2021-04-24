const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
    EmployeeId : {
        type : String,
        required : true
    },
    FirstName : {
        type : String,
        required : true
    },
    LastName : {
        type : String,
        required : true
    },
    NIC : {
        type : String,
        required : true
    },
    position : {
        type : String,
        required : true
    },
    phoneNo : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    
    address : {
        type : String,
        required : true
    },
    branch : {
        type : String,
        required : true
    }
}, {
    collection: 'Employee'
  })

module.exports = mongoose.model('Employee', EmployeeSchema)