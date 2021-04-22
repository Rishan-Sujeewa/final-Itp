const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    EmployeeId: {

        type : String,
        required : true // backend validation
    },
    ProblemTheyHave : {

        type :String,
        required : true


    },

    Solution : {

        type :String,
        required : true


    },
   


})

const employeeproblem = mongoose.model("employeeproblem",employeeSchema);

module.exports = employeeproblem;