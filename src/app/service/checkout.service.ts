import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EDITADDRESS_URL, GETADDRESS_URL, RAZORPAY_URL, RAZORPAY_VERIFICATION_URL, SETADDRESS_URL } from '../urls/urls';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient,private userserv:UserService) { }

  setAddress(address:any){
    return this.http.post<any>(`${SETADDRESS_URL}${this.userserv.getUserFromLocalStorage('user').userId}`,address);
  }
  getAddresss(){
    return this.http.get<any>(`${GETADDRESS_URL}${this.userserv.getUserFromLocalStorage('user').userId}`)
  }
  deleteAddress(addressId:any){
    return this.http.patch<any>(EDITADDRESS_URL+this.userserv.getUserFromLocalStorage('user').userId,addressId)
  }

  order(amount:any){
    return this.http.post(RAZORPAY_URL,amount)
  }

  verifyOrder(orderDetials:any){
    return this.http.post(`${RAZORPAY_VERIFICATION_URL}${this.userserv.getUserFromLocalStorage('user').userId}`,orderDetials)
  }
}
