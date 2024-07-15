import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpclient:HttpClient) { }

  private baseUrl="http://localhost:8080/api/v3/medicines"

  getMedicines():Observable<Medicine[]>{
    return this.httpclient.get<Medicine[]>(`${this.baseUrl}`);
  }

  createMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpclient.post<Medicine>(`${this.baseUrl}`,medicine);
  }

  getMedicineById(id:number):Observable<Medicine>{

    return this.httpclient.get<Medicine>(`${this.baseUrl}/${id}`);
  }

  updateMedicine(id:number,medicine:Medicine):Observable<object>{
    return this.httpclient.put<Medicine>(`${this.baseUrl}/${id}`,medicine);

  }
  delete(id:number):Observable<object>{
    return this.httpclient.delete(`${this.baseUrl}/${id}`);
  }
}
