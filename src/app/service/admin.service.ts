import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ADMINLOGIN_URL } from '../urls/urls';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  isAdminLogged:boolean=false;
  AdminLogIn(user:any){
    return this.http.post<any>(ADMINLOGIN_URL,user);
  }

}
