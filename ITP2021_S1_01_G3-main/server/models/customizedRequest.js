const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customizedSchema = new Schema({
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

const Customized = mongoose.model("customizedRequest",customizedSchema);

module.exports = Customized;