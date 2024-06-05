import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ADMINLOGIN_URL } from '../urls/urls';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  isAdminLogged:boolean=false;
  AdminLogIn(user:any){
    return this.http.post<any>(ADMINLOGIN_URL,user);
  }

  productDetials=new BehaviorSubject<any>({});
  toggle =new BehaviorSubject<boolean>(false)

  visible(){
    this.toggle.next(true);
  }

  invisible(){
    this.toggle.next(false);
  }

  gettogglestate(){
    return this.toggle.asObservable()
  }

  moreinfo(item:any){
    this.productDetials.next(item);
  }
  getinfo(){
    return this.productDetials.asObservable();
  }

  editableProduct(item:any){
    this.productDetials.next(item)
  }
}
