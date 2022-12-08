import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StuService {

  constructor(private http: HttpClient) { }

  link1 = "http://localhost:9005/addrecord";
  link2 = "http://localhost:9005/updaterecord";
  link3 = "http://localhost:9005/deleterecord";
  link4 = "http://localhost:9005/viewrecord";

  adddata1(data: any) {
    return this.http.post(this.link1, data);
  }

  updatedata1(data: any) {
    return this.http.post(this.link2, data);
  }

  deletedata1(data: any) {
    return this.http.post(this.link3, data);
  }

  viewrecord() {
    return this.http.get(this.link4);
  }
}
