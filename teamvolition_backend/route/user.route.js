/*------------- ALL USER RELATED API END PONTS--------- */
const express=require('express');

//Loading bcryptjs :
const bcryptjs=require('bcryptjs');
// Loading jsonweToken :
const jwt=require('jsonwebtoken');

const userRouter=express.Router();

// consumimg db connection :
const con=require('../dbConnection/dbCon');
//Loading bcrypt js :
const bcrypt=require('bcryptjs');

// Create a user signup : http://localhost:3000/api/user/signup
userRouter.post('/user/signup',(req,res)=>{
       let email=req.body.email;
       let salt=bcrypt.genSaltSync(10);
       let pas1=req.body.pas1;
       let hasPass=bcrypt.hashSync(pas1,salt);

       var SQL=`insert into users(email,pas1)
          values('${email}','${hasPass}')
       `;
       // db connection :
       con.query(SQL,(error,results)=>{
              if(error){
                     res.status(200).json({'message':error.sqlMessage});
              }else{
                     //  res.status(200).json({'info':results})
                     if(results.affectedRows){
                            res.status(200).json({'message':'Success '})
                     }else
                     res.status(200).json({'message':'Something went wrong...!'});
              }
       })
});



// user signin :
userRouter.post('/user/signin',(req,res)=>{
       let email=req.body.email;
       let dbPass='';
       let pas1=req.body.pas1;
     var SQL=`select *from users where email='${email}'`;
     // data base connection :
     con.query(SQL,(error,userdata)=>{
        if(error){
              res.status(200).json({'message':error.sqlMessage});
        }else{
          if(!userdata.length){
              res.status(200).json({'message':"Email does!'s exists....!"})
          }
          else{
              // res.status(200).json(userdata);
              userdata.forEach((userInfo)=>{
                dbPass=userInfo.pas1;
                let passMatch=bcrypt.compareSync(pas1,dbPass);
                if(passMatch){
                     res.status(200).json({'message':'Successfully signin...!'})
                }
                else
                res.status(200).json({'message':'Password did not matched...!!'})
              })
          }  
        }
     });
});



module.exports=userRouter;
console.log('User router service is ready to use');