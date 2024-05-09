import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User_info } from './Model/User.model';
import { AuthloginService } from './authlogin.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected property name to styleUrls
})
export class LoginComponent implements OnInit {
  public myForm:any=[];
  public show:boolean=false;
  constructor(private uservice:AuthloginService, private route:Router) {
    this.myForm=new User_info('','',);

  }
  ngOnInit(): void {
  }

  password(){
    this.show=!this.show
}
submit(userData:any){
   console.log(userData.value);
   let loginData={
    'email':this.myForm.email,
    'pas1':this.myForm.pass1
  };
  console.log(this.myForm);
  this.uservice.logIn(loginData).subscribe((res:any)=>{
    console.log(res);
    alert(res.message);
    // if(res.message=='success'){
    //   localStorage.setItem('User',res.loggedUser);
    //   localStorage.setItem('token',res.token);
    //   console.log('Userdata has been save in local storage');
    //   this.route.navigateByUrl('/todo');
    // }
  });
}
}
