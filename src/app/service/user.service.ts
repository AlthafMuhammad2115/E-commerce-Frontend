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
  // public users:Iregister[]=[{ 
  //   username:'Althaa',
  //   email:'Althaa@gmail.com',
  //   password:'Althaa123'
  //   }]

  constructor(private http:HttpClient,private toast:ToastrService) {
  }
  
  // signup(user:Iregister){
  //   this.users.push(user);
  //   this.usersubject.next(user);
  //   return this.usersubject.asObservable()
  // }


  public IsLogged:boolean=false;

  // login(user:Iuser){
  //   this.IsLogged=this.users.some((value:Iregister,index:number,array:Iregister[])=>array[index].email==user.email && array[index].password==user.password);
  //   console.log(this.IsLogged);
    
  //   if(this.IsLogged){
  //     this.toast.success('Successfully Logged In','')
  //   }
  // }

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
      console.log('IsLogged:',this.IsLogged);
      return JSON.parse(user)
    }
  }

  removeUserFromLocalStorage(key:any){
    localStorage.removeItem(key)
    this.IsLogged=false;
  }



  

}
