const mongoose = require('mongoose');

const conn = async ()=>{
    try {
        mongoose.connect("mongodb+srv://TanmoyAtlas1234:TanmoyAtlas1234@cluster0.qebswfo.mongodb.net/imgvideouploder?retryWrites=true&w=majority");
        console.log("connection successfull..");
    } catch (err) {
        console.log(err);
        console.log("no connection");
    }
}

conn();