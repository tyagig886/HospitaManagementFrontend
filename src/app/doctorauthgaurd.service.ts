import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DocauthService } from './docauth.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorauthgaurdService implements CanActivate {

  constructor(private docAuthService:DocauthService,private router:Router) { }

  canActivate(){
      if(this.docAuthService.isUserLoggedIn()){
        return true;
      }
      else{
        this.router.navigate(['doclogin'])
        return false;
      }
    }
  }