const express = require('express');
const placesRoute = require('./routes/places-routes');
const userRoute = require('./routes/user-routes');
const mongoose = require('mongoose');

 const app = express();

 app.use(express.json());

 app.use('/api/places',placesRoute);
 app.use('/api/users',userRoute);

 

 app.use((error,req,res,next)=>{
     if(res.headerSent){
         return next(error);
     }
     res.status(error.code || 500)
     res.json({message:error.message || 'An unknown error occured'})
 });

let port = 5000;
 mongoose.connect('mongodb+srv://lorenzo:lorenzo@lorenzo.e51hl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then(()=>{
    app.listen(port, console.log(`Server running on ${port}`));
   // console.log(`mongoDB connected: ${connection.host}`);
 }).catch( err=> {
     console.log(err);
 });
