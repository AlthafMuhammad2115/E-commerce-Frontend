import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { WishlistService } from 'src/app/service/wishlist.service';
import { PersonComponent } from 'src/app/sharepage/person/person.component';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  products:any=[];
  count:number=0
  len!:any;
  constructor(private wish:WishlistService,private cartserv:CartService,private route:Router){
    this.wish.GetAll().subscribe(res=>{
      this.products=res;
      this.len=res.length;
    })
  }

  //router
  nav(){
    this.route.navigateByUrl('/men')
  }
  //remove from the list
  RemoveFromWishList(item:any){
    this.wish.RemoveFromWishList(item)
  }

  // hover over cards starts
  hover: any = [];
  enter(index: number) {

    this.hover[index] = true;
  }

  leave(index: number) {
    this.hover[index] = false;
  }
  addtocart(item:any){
    this.cartserv.addtocart(item);
  }
}
