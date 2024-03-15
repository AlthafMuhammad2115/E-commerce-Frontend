import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { FoodService } from 'src/app/service/food.service';
import { WishlistService } from 'src/app/service/wishlist.service';
import { UserService } from 'src/app/service/user.service';
import { cart } from 'src/app/models/cart';
import { ToastrService } from 'ngx-toastr';
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
    private userserv:UserService,
    private toast:ToastrService
    ) { };
  @Input() products: any[] = [];
  @Input() item:number=0;
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
  addtocart(item:any) {
    console.log(item.name);
    
    let cartItem={
      userId:this.userserv.getUserFromLocalStorage('user').userId,
      productId:item.id,
      quantity:1,
      name:item.name,
      price:item.price,
      imgUrl:item.imgUrl
    }
    if(!this.userserv.IsLogged)
      this.route.navigateByUrl('/login')
    else{
      this.cartserv.addtocart(cartItem)
    }

  }

  // filter by price
  state:boolean[]=[];
  filter(min:number,max:number,i:number){
    this.state[i]=!this.state[i];

    if(this.state[i]){
      this.products=this.foodserv.filterprice(min,max);
      console.log(this.products);
      
    }else{
      this.products=this.foodserv.getall();
      console.log(this.products);
      
      
    }
    

  }

  // add to wishlist
  cart:[]=[]

  AddToWishList(item:any,index:number){
    if(!this.userserv.IsLogged)
      this.route.navigateByUrl('/login')
    else
      this.wish.AddToWishList(item,this.cart,index); 
  }


  filterSlide(){
    document.getElementById('filter_slide')?.classList.toggle('filter_active')
  }




}
