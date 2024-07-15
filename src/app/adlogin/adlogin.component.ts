import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-adlogin',
  templateUrl: './adlogin.component.html',
  styleUrls: ['./adlogin.component.css']
})
export class AdloginComponent {
  username:string='';
  password:string='';

  inValidLogin=false;
constructor(private router:Router,private adminAuthService:AdminauthService){}
  checkLogin(){
    if(this.adminAuthService.authnticate(this.username,this.password)){
      
      this.router.navigate(['admin'])
      this.inValidLogin=false;
    }
    else{
      this.inValidLogin=true;
      alert("Wrong Creditionls ")
      this.router.navigate(['home'])
    }
  }

}
