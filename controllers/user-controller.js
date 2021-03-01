 const User = require('../models/user-model');
 
 
 const getUser = (req,res,next)=>{
   res.json({
       users: dummy_users
   });
 };
 
 const signUser = (req,res,next)=>{
    let { name, email, password, places } = req.body;

  let existingUser = User.findOne({ email });
     
       if(existingUser){
           res.send(422);
       }
 
    let createdUser =  new User({
        name,
        email,
        image,
        password,
        places
    });
     
      createdUser.save();
      
      res.statust(201).json({created: "success"});
 };
 
 const logUser = (req,res,next)=>{
     const {email,password} = req.body;
 
     const identuser = dummy_users.find(u => u.email === email);
       if(!identuser || identuser.password != password){
           res.json({error:false}).status(401);
      }
 
      res.json({message:"logged in"});
 };
 
 exports.getUser = getUser;
 exports.signUser = signUser;
 exports.logUser = logUser;