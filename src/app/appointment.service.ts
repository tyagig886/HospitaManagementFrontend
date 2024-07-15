import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpclient:HttpClient) { }
  private baseUrl="http://localhost:8080/api/v2/appointments"

  getAllAppointments():Observable<Appointment[]>{

  return this.httpclient.get<Appointment[]>(`${this.baseUrl}`)
  }
 // private baseUrll="http://localhost:8080/api/v2/appointments"

  createAppointment(appointment:Appointment):Observable<Appointment>{
    return this.httpclient.post<Appointment>(`${this.baseUrl}`,appointment)
  }

  //private baseUrlll="http://localhost:8080/api/v2/appointments/{id}"

  deleteAppointment(id:number):Observable<object>{
    return this.httpclient.delete(`${this.baseUrl}/${id}`);
  }
}
