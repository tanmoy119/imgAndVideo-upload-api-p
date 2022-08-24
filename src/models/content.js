const mongoose = require('mongoose');


const contentSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique: true
    },
    description:{
        type:String
    }, 
    thumbnail:{
        type:String
    },
    video:{
        type:String
    } 

 });








 const content = new mongoose.model('content', contentSchema);

 module.exports = content;