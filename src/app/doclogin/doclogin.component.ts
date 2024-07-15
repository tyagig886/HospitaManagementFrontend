import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  templateUrl: './doclogin.component.html',
  styleUrls: ['./doclogin.component.css']
})
export class DocloginComponent {

  username:string='';
  password:string='';

  inValidLogin=false;
constructor(private router:Router,private docauth:DocauthService){}
  checkLogin(){
    if(this.docauth.authnticate(this.username,this.password)){
      
      this.router.navigate(['docdash'])
      this.inValidLogin=false;
    }
    else{
      this.inValidLogin=true;
      alert("Wrong Creditionls ")
      this.router.navigate(['home'])
    }
  }
}
