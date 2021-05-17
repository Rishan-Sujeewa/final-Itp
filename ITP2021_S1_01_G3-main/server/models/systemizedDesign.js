const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const systemizedDesignSchema = new Schema({

    designNum : {
        type:String,
        required:true
    },

    landArea : {
        type:String,
        required:true
    },

    buildingArea:{
        type:String,
        required:true
    },

    bedRooms:{
        type:String,
        required:true 
    },

    bathRooms:{
        type:String,
        required:true
    },

    // productImage:{
    //     type:String,
    //     required:true
    // }
})

const SystemizedD = mongoose.model("systemizedDesign",systemizedDesignSchema);

module.exports = SystemizedD;