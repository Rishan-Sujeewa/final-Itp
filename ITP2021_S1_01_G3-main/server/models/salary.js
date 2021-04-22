const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const salarySchema = new Schema({
    salaryID : {
        type : String,
        required : true
    },
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    designation : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    workHours : {
        type : Number,
        required : true
    },
    hourlyRate : {
        type : Number,
        required : true
    },
    incentive : {
        type : Number,
        required : true
    },
    deduction : {
        type : Number,
        required : true
    },
    totalSalary : {
        type : Number,
        required : true
    },
})

const Salary = mongoose.model("Salary",salarySchema);

module.exports = Salary;