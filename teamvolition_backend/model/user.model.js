// Loading mongoose library:
const mongoose=require('mongoose');

// Now create a user schema :
const userSchema=mongoose.Schema({
       'email':{type:String,required:true,unique:true},
       'pas1':{type:String,required:true}
},{versionKey:false});

module.exports=mongoose.model('userModel',userSchema,'users');
console.log('User model is ready to use');