import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authnticate(username2:string,password2:string){

    if(username2=='aadi'&&password2=='aadi123'){
      sessionStorage.setItem('username2',username2);
      return true;
    }
    else{

      return false;
    }
  }
  isUserLoggedIn(){
    console.log("user login ho gya hai");
  let user=  sessionStorage.getItem('username2');
    
  return !(user==null)
}

logout(){
  console.log("user logout ho gya");
  sessionStorage.removeItem('username2');
}
}
