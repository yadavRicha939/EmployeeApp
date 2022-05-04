import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private obj:HttpClient,
    private http: HttpClient
    ) { }

  saveEmployee(empDetail:any[]){
    this.http.post('https://employee-registration-223e6-default-rtdb.firebaseio.com/empDetail.json',empDetail)
  }
}
