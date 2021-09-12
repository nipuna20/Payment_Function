const mongoose = require('mongoose');

const refundSchema = new mongoose.Schema({


    firstn:{
        type:String,
        required:true
    },
    lastn:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    card:{
        type:String,
        required:true
    },
    expiredate:{
        type:String,
        required:true
    },
    Cvv:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    }
    



});

module.exports = mongoose.model('refund',refundSchema)