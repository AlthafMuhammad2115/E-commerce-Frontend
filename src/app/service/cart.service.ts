import { Injectable } from '@angular/core';
import { BehaviorSubject, count } from 'rxjs';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { SETCART_URL, DELETEALLFROMCART_URL, DELETEFROMCART_URL, GETCART_URL } from '../urls/urls';
import { cart } from '../models/cart';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  constructor(private serv:ProductService,private toast:ToastrService,private http:HttpClient,private userserv:UserService) { }
  public cartitemlist:any=[];
  public productlist=new BehaviorSubject<any>([]);
  public routelist=new BehaviorSubject<any>([]);

  getproduct(){
    return this.http.get<any>(`${GETCART_URL}${this.userserv.getUserFromLocalStorage('user').userId}`);
  }
  addtocart(product:cart){      
      return this.http.post(SETCART_URL,product).subscribe(res=>{
      this.toast.success(`${product.name} added to cart`,'Successfully Added')

      })
  }
  removeallfromcart(){
    return this.http.delete(`${DELETEALLFROMCART_URL}${this.userserv.getUserFromLocalStorage('user').userId}`)
  }
  removefromcart(productId:any){
    return this.http.patch(`${DELETEFROMCART_URL}${this.userserv.getUserFromLocalStorage('user').userId}`,productId)
  }

  public totalprice=new BehaviorSubject<number>(0);
  
}
