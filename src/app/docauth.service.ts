import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authnticate(username:string,password:string){

    if(username=='aadi'&&password=='aadi123'){
      sessionStorage.setItem('username',username);
      return true;
    }
    else{

      return false;
    }
  }

  isUserLoggedIn(){
    console.log("doctor login ho gya hai");
  let user=  sessionStorage.getItem('username');
    
  return !(user==null)
}

logout(){
  console.log("doctor logout ho gya");
  sessionStorage.removeItem('username');
}
}
