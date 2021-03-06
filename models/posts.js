const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    holdername:{
        type:String,
        required:true
    },
    cvv:{
        type:String,
        required:true
    },
    card:{
        type:String,
        required:true
    },
    cardname:{
        type:String,
        required:true
    },
    expiredate:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    }



});

module.exports = mongoose.model('Posts',postSchema)