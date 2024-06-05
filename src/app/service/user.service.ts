import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Iuser } from '../models/Iuser';
import { HttpClient } from '@angular/common/http';
import {  ToastrService } from 'ngx-toastr';
import { LOGIN_URL ,SIGNUP_URL} from '../urls/urls';
import { Iregister } from '../models/Iregister';
import { Router } from '@angular/router';


function _window() : any {
   return window;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get nativeWindow() : any {
    return _window();
  }

  public usersubject=new BehaviorSubject<any>([])
 

  constructor(private http:HttpClient,private toast:ToastrService) {
  }
  



  public IsLogged:boolean=false;

 

  logout(){
    this.IsLogged=false;
  }


  login(userLog: any) {
    return this.http.post<any>(LOGIN_URL, userLog)
  }

  signup(userLog:Iregister){
    return this.http.post<any>(SIGNUP_URL,userLog)
  }
  
  setUserToLocalStorage(key:any,res:any){
    localStorage.setItem(key,JSON.stringify(res))
  }
  getUserFromLocalStorage(key:any){
    const user=localStorage.getItem(key)
    if(user){
      this.IsLogged=true;
      return JSON.parse(user)
    }
  }

  removeUserFromLocalStorage(key:any){
    localStorage.removeItem(key)
    this.IsLogged=false;
  }



  

}
