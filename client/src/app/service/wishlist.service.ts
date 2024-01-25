import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }
  wishlistitem:any=[];
  listitem=new BehaviorSubject<any>([]);

  GetAll(){
    return this.listitem.asObservable();
  }

  AddToWishList(item:any){
    let flag=this.wishlistitem.find((val:any)=>{
      return val.id==item.id;
      
    })
    if(!flag){
    this.wishlistitem.push(item);
    this.listitem.next(this.wishlistitem);
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
