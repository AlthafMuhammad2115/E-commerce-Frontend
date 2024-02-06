import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private toast:ToastrService) { }
  wishlistitem:any=[];
  listitem=new BehaviorSubject<any>([]);

  GetAll(){
    return this.listitem.asObservable();
  }

  AddToWishList(item:any,cart:boolean[],index:number){
    cart[index]=!cart[index]
    console.log(cart[index]);
    let flag=this.wishlistitem.find((val:any)=>{
      return val.id==item.id;
      
    })
    if(!flag){
    this.wishlistitem.push(item);
    this.listitem.next(this.wishlistitem);
      this.toast.success(`${item.name} added to wishlist`,"Successfully added",{
        positionClass: 'toast-bottom-right', 
        timeOut:1000
      })
    }
    
    
    
  }

  RemoveFromWishList(item:any){
    this.wishlistitem.map((val:any,index:number)=>{
      if(item.id===val.id){
        this.wishlistitem.splice(index,1);
        this.listitem.next(this.wishlistitem);
      }
    })
  }

}
