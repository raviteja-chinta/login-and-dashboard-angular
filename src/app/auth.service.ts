import { Injectable } from '@angular/core';
import { User } from './user';
import  *  as  cred  from  './admin.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(userInfo: User){
    var bool = false;
    if (cred.email.toLowerCase() == userInfo.email.toLowerCase() && 
    cred.password.toLowerCase() == userInfo.password.toLowerCase()) {
      localStorage.setItem('ACCESS_TOKEN', "access_token");
    } else{
      console.log("false");
      alert("Invalid Email or Password!");
    }
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}