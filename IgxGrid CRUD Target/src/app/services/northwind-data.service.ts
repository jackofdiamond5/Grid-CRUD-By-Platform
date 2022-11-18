import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NorthwindDataService {
  constructor(private http: HttpClient) { }
  
  private readonly API_ENDPOINT = 'https://localhost:7244';
  
  /* Customers */

  // create
  public addCustomer(data: string) {
    return this.http.post(`${this.API_ENDPOINT}/Customer`, data)
  }

  // read
  public getCustomerData(): Observable<any> {
    return this.http.get(`${this.API_ENDPOINT}/Customer`);
  }

  // update
  public updateCustomer(data: any) {
    return this.http.put(`${this.API_ENDPOINT}/Customer/`, data);
  }

  // delete
  public deleteCustomer(id: string) {
    return this.http.delete(`${this.API_ENDPOINT}/Customer/${id}`);
  }


  /* Employees */

  // create
  public addEmployee(data: string) {
    return this.http.post(`${this.API_ENDPOINT}/Employee`, data)
  }

  // read
  public getEmployeeData(): Observable<any> {
    return this.http.get(`${this.API_ENDPOINT}/Employee`);
  }

  // update
  public updateEmployee(data: any) {
    return this.http.put(`${this.API_ENDPOINT}/Employee/`, data);
  }

  // delete
  public deleteEmployee(id: string) {
    return this.http.delete(`${this.API_ENDPOINT}/Employee/${id}`);
  }
}
