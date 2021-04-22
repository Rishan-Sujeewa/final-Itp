const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    EmployeeId: {

        type : String,
        required : true // backend validation
    },
    FirstName : {

        type :String,
        required : true


    },

    LastName : {

        type :String,
        required : true


    },
    NIC : {

        type :String,
        required : true


    },

    position : {

        type :String,
        required : true


    },

    phoneNo : {

        type :Number,
        required : true


    },

    email : {

        type :String,
        required : true


    },

    address : {

        type :String,
        required : true


    },

    branch : {

        type :String,
        required : true


    },



})

const employee = mongoose.model("employee",employeeSchema);

module.exports = employee;