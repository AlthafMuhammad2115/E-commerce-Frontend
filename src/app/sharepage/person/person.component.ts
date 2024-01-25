import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { FoodService } from 'src/app/service/food.service';
import { WishlistService } from 'src/app/service/wishlist.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  template: `
        <button class="btn btn-dark" [routerLink]="['/'+routename,item.id]" >Buy Now</button>
        `



})
export class PersonComponent {
  constructor(
    private serv: ProductService,
    private ar: ActivatedRoute,
    private cartserv:CartService,
    private route:Router,private foodserv:FoodService,
    private wish:WishlistService,
    ) { };
  @Input() products: any[] = [];
  @Input() item:number=0;
  @Input() name: any;
  @Input() routename: any;
  @Input() prod:any;
  color: any[] = this.serv.color;
  discount: any[] = this.serv.discount;

  
  // hover over cards starts
  hover: any = [];
  enter(index: number) {

    this.hover[index] = true;
  }

  leave(index: number) {
    this.hover[index] = false;
  }

  public count = 0;
  // hover over cards ends

  // add to cart
  addtocart(item :any) {
    this.cartserv.addtocart(item);

  }

  // filter by price
  state=false;
  filter(min:number,max:number){
    this.state=!this.state;

    if(this.state){
      this.products=this.foodserv.filterprice(min,max);
      console.log(this.products);
      
    }else{
      this.products=this.foodserv.getall();
      
    }
    

  }

  // add to wishlist
  AddToWishList(item:any){
    this.wish.AddToWishList(item);
    
    
  }








}
