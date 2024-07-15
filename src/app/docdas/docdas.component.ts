import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdas',
  templateUrl: './docdas.component.html',
  styleUrls: ['./docdas.component.css']
})
export class DocdasComponent {
  constructor(private patientService:PatientService,private router:Router,private docAuthService:DocauthService){}
  patients:Patient[]=[];

  ngOnInit():void{

    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    })
  }

  update(id:number){

    this.router.navigate(['/update-patient',id])
  }

  delete(id:number){
    this.patientService.delete(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
  }
  view(id:number){
    this.router.navigate(['view-patient',id]);
  }

  logout(){
    this.docAuthService.logout();
    this.router.navigate(['home']);
  }
}
