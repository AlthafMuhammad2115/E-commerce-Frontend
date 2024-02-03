import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import {user} from '../models/user'
import { Iuser } from '../models/Iuser';
import { HttpClient } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LOGIN_URL ,SIGNUP_URL} from '../urls/urls';
import { Iregister } from '../models/Iregister';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public usersubject=new BehaviorSubject<user>(new user())
  userobservable:Observable<user>

  constructor(private http:HttpClient,private toast:ToastrService) {
    this.userobservable=this.usersubject.asObservable()
  }

  login(userLog: Iuser) {
    console.log('hai');
    
    return this.http.post<any>(LOGIN_URL, userLog)
  }

  signup(userLog:Iregister){
    return this.http.post<any>(SIGNUP_URL,userLog).pipe(
      tap({
        next: (user) => {
          // Handle successful login
          console.log("hai",user);
          this.usersubject.next(user);
          this.toast.success(
            'Login successful',
            'Welcome'
          );
        },
        error: (errors) => {
          // Handle login failure
          this.toast.error(
            errors.error,
            'Login failed'
          );
        }
      })
    );
  }
  


  

}
