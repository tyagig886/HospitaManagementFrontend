import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { AdminauthService } from '../adminauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent {
  patients:Patient[]=[];
  constructor(private paitentService:PatientService,private adminAuthService:AdminauthService,private router:Router){}

  ngOnInit():void{
    this.getPatients();
  }
  getPatients(){
    this.paitentService.getPatientList().subscribe(data=>{

      this.patients=data;
    })

}
delete(id:number){
  this.paitentService.delete(id).subscribe(data=>{
    console.log(data);
    this.getPatients();
  })
}

logout(){
this.adminAuthService.logout();
this.router.navigate(['home'])
}
}
