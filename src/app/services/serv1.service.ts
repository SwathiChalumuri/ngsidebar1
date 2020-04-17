import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {

  constructor(public http: HttpClient) { }
  getTabData(){
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }
}
