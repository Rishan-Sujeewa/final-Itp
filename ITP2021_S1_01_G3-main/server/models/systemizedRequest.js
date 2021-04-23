const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const systemizedSchema = new Schema({

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
})

const Systemized = mongoose.model("systemizedRequests",systemizedSchema);

module.exports = Systemized;