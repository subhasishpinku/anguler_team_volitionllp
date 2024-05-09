// loading express module :
const express=require('express');

// cosuming userRouter service :
const userRouter=require('./route/user.route');
// load cors library :
const cors=require('cors');

// Define port ;
const port=3000;

//create a instance of a express :
const app=express();
// Let the server cors free :
app.use(cors());

// Let express to accepts incoming post data :
app.use(express.urlencoded({extended:true}));  //for webclient :
app.use(express.json());                       // mobile client  

//Let express to user foodRouter:
app.use('/api',userRouter);

// create a basic landing page :
app.get('/',(req,res)=>{
       res.send('<h1> Welcome to Node.Js+Express+MYSql   </h1>');
});


// Binding the port:
app.listen(port,()=>{
       console.log(`Server has sarted at ${port}`);
});