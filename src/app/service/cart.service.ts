import { Injectable } from '@angular/core';
import { BehaviorSubject, count } from 'rxjs';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { CART_URL, DELETEALLFROMCART_URL, DELETEFROMCART_URL, GETCART_URL } from '../urls/urls';
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


  
  // setproduct(product:any){
  //   this.cartitemlist.push(...product);
  //   this.productlist.next(product);
    
  // }


  // addtocart(product:any){
    
  //   let flag:number=this.cartitemlist.find((a:any,index:number)=>{
      
  //     let temp=a.id==product.id;
  //     return temp;
      

  //   })
  //   if(!flag){
  //   this.cartitemlist.push(product);
  //   this.productlist.next(this.cartitemlist);
  //   }else{

  //     product.count++;

  //   }
  //   this.toast.success(product.name+" added to cart","Successfully added", {
  //     positionClass: 'toast-bottom-right', 
  //     timeOut:1000
  //   })

  

  //   this.subtotal(product);
  //   this.gettotalprice();
  //   // this.toast.success("Succes","Item Addd to cart");
    
  // }

  getproduct(){
    return this.http.get<any>(`${GETCART_URL}${this.userserv.getUserFromLocalStorage('user').userId}`);
  }
  addtocart(product:cart){      
      return this.http.post(CART_URL,product).subscribe(res=>{
      this.toast.success(`${product.name} added to cart`,'Successfully Added')

      })
  }
  removeallfromcart(){
    return this.http.delete(`${DELETEALLFROMCART_URL}${this.userserv.getUserFromLocalStorage('user').userId}`)
  }
  removefromcart(productId:any){
    return this.http.patch(`${DELETEFROMCART_URL}${this.userserv.getUserFromLocalStorage('user').userId}`,productId)
  }
  // incriment(item:any){
  //   item.count++;
  //   this.subtotal(item);
  //   this.gettotalprice();
  //   return item.count;
  // }
  // decriment(item:any){
  //   if(item.count>=2){
  //     item.count--;
  //   }
  //   this.subtotal(item);
  //   this.gettotalprice();
  //   return item.count;
    
  // }
  // subtotal(item:any){
  //   item.subtotal=item.count*item.foodPrice;
  // }
  // addtocart(product:any){
  //   this.cartitemlist.push(product);

  //   this.productlist.next(this.cartitemlist);
  //   console.log(this.cartitemlist);
  //   this.gettotalprice();

  // }

  public totalprice=new BehaviorSubject<number>(0);
  // gettotalprice(){
  // let total=0;

  //   this.cartitemlist.forEach((a:any)=>{
  //     this.total+=a.subtotal;

  //   })
  //   this.totalprice.next(this.total);
  //   this.total=0;
  //   return this.totalprice.asObservable();
    
  // }
  // gettotalprice(){
  //   let total=0;
  //   this.cartitemlist.forEach((a:any) => {
  //     total+=a.subtotal;
  //   });
  //   this.totalprice.next(total);
  //   total=0;
  //   return this.totalprice.asObservable();
  // }

 

  // removefromcart(product:any){
  //   this.cartitemlist.map((a:any,index:any)=>{
  //     if(product.id===a.id){
  //       this.cartitemlist.splice(index,1);
  //       this.productlist.next(this.cartitemlist);
  //       console.log(this.cartitemlist);
  //   this.toast.error(product.name+" removed from the cart","Successfully removed", {
  //     positionClass: 'toast-bottom-right', 
  //     timeOut:1000
  //   })


  //     }
  //   })
  //   this.gettotalprice();
  // }
  // removeallfromcart(){
  //   this.cartitemlist=[];
  //   this.productlist.next(this.cartitemlist);
  //   this.gettotalprice();

  // }

  

}
