import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthloginService {
  constructor(private http:HttpClient) { }
  signUP(userData:any){
    return this.http.post('http://localhost:3000/api/user/signup',userData);
  }

  logIn(userData:any){
    return this.http.post('http://localhost:3000/api/user/signin',userData);
  }
}
