require('dotenv').config()
const express= require('express');
const app = express();
const fileUpload = require("express-fileupload");
const indexRouter = require('./routers');
const cors = require('cors');

require("./db/conn");
 app.use(cors());
// const allowedOrigins = ["http://localhost:3000","http://localhost:5000"];

//     app.use(
//         cors({
//             origin: function(origin, callback) {
//                 if (!origin) return callback(null, true);
//                 if (allowedOrigins.indexOf(origin) === -1) {
//                     var msg =
//                         "The CORS policy for this site does not " +
//                         "allow access from the specified Origin.";
//                     return callback(new Error(msg), false);
//                 }
//                 return callback(null, true);
//             }
//         })
//     ); 


app.use(express.json());
app.use(fileUpload({
    useTempFiles:true
}));

app.use(indexRouter);



const port = process.env.PORT;




app.listen(port,()=>{
    console.log(`listen at port-${port}`);
})