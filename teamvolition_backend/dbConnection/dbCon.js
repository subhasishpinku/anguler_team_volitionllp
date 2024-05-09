// Loading mysql :
const mysql=require('mysql');

// seeting up connection string :
var con=mysql.createConnection({
       user:'root',
       password:'',
       database:'team_voilition',
       host:'127.0.0.1'
});

// Now test the connection :
con.connect((error)=>{
       if(error) throw error;
       else
       {
         console.log('successfully connected ..');       
       }
});

module.exports=con;
console.log('Global data base connection is ready to use');