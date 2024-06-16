import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GET_ORDERS_URL, RAZORPAY_URL, RAZORPAY_VERIFICATION_URL } from '../urls/urls';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient,private userserv:UserService) { }

  order(amount:any){
    return this.http.post(RAZORPAY_URL,amount)
  }

  verifyOrder(orderDetials:any){
    return this.http.post(`${RAZORPAY_VERIFICATION_URL}${this.userserv.getUserFromLocalStorage('user').userId}`,orderDetials)
  }
  getOrders(){
    return this.http.get(`${GET_ORDERS_URL}${this.userserv.getUserFromLocalStorage('user').userId}`);
  }
}
