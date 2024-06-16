import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { count } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { CartService } from 'src/app/service/cart.service';
import { FoodService } from 'src/app/service/food.service';
import { WishlistService } from 'src/app/service/wishlist.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent {
  getproductid: any;
  menudata: any;
  postarray: any[] = [];
  value!: number;
  size:any;
  count:number=3
  off:number=30
  panelOpenState = false;
style: any;
ishover:boolean=false;
  constructor(private userserv:UserService,
    private serv: ProductService,
    private ar: ActivatedRoute,
    private cartserv:CartService,
    private wishserv:WishlistService,
    private route:Router) {

    this.serv.GetAll().subscribe(res => {
      this.postarray = res;

      this.getproductid = this.ar.snapshot.paramMap.get('id');
      if (this.getproductid) {
        this.menudata = this.postarray.filter((value) => {
          return value.id == this.getproductid;
        })
      }
      
    })



  }
  
  AddToCart(item:any) {
    if(!this.userserv.IsLogged)
      this.route.navigateByUrl('/login')
    else{
      let cartItem={
        userId:this.userserv.getUserFromLocalStorage('user').userId,
        productId:item.id,
        quantity:1,
        name:item.name,
        price:item.price,
        imgUrl:item.imgUrl
      }
      this.cartserv.addtocart(cartItem)
    }

  }

  // AddToCart(item:any){
  //   if(!this.userserv.IsLogged)
  //     this.route.navigateByUrl('/login')
  //   else
  //   this.cartserv.addtocart(item);
  // }
  
  isHover() {
    this.ishover = true;
    console.log(this.ishover);

  }

  isNotHover(){
    this.ishover = false;

    console.log(this.ishover);
    
  }
  cart:boolean[]=[]
  addtowishlist(item:any,i:number){
    if(!this.userserv.IsLogged)
      this.route.navigateByUrl('/login')
    else
      this.wishserv.AddToWishList(item,this.cart,i)
  }
  submit=false;
 clicked(item:any){
  this.submit=true;
  if(this.size!=0 && this.userserv.IsLogged)
    this.route.navigateByUrl('/'+item.id+'/checkout');
  else if(!this.userserv.IsLogged)
    this.route.navigateByUrl('login')

    
 }
  
  
log(){
  console.log(this.size);
  
}
};



