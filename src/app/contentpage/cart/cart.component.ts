import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private serv:ProductService,private cartserv:CartService,private toast:ToastrService,private userserv:UserService,private route:Router){};

  // item:any=this.serv.postarray;
  // getproductlist:any=[];
  // count:number=0;
  // total:number=0;
  // public totalprice=new BehaviorSubject<any>(23);
  

  // ngOnInit(){
  //   this.cartserv.getproduct().subscribe((res)=>{
  //     this.getproductlist=res;
  //     this.count=res.length;

  //   })
  //   this.cartserv.gettotalprice().subscribe(res=>{
  //     this.total=res;
  // })
    
  // }

  // removefromcart(item:any){
  //   this.cartserv.removefromcart(item);
  // }

  // removeallfromcart(){
  //   this.cartserv.removeallfromcart();
  // }

  // getprice(){
   
  // }

  public userCart: any;
  public postarray:any=[];
  public len:number=0;
  public num:number=1;
  subtotal:number=0;
  ngOnInit(){
    this.cartserv.getproduct().subscribe(res=>{
      this.userCart=res;
      this.postarray=this.userCart.products;
      this.len=this.postarray.length;
      console.log(this.postarray);
      
    })
    this.cartserv.totalprice.subscribe(res=>{
      this.subtotal=res;
    })
  }

  removefromcart(item:any){
    let product={
      productId:item.productId
    }
    
    this.cartserv.removefromcart(product).subscribe(res=>{
      this.userCart=res;
      this.postarray=this.userCart.products;
      this.len=this.postarray.length;
      this.toast.success(item.name+' Removed')

    });
  }
  removeallfromcart(){
    this.cartserv.removeallfromcart().subscribe((res)=>{
      this.userCart=res;
      this.postarray=this.userCart.products;
      this.len=this.postarray.length;
      this.toast.success('Removed All Items')
    })
  }

  clicked(item:any){
    // this.submit=true;
    if(this.userserv.IsLogged)
      this.route.navigateByUrl('/Men/'+item.productId);
    else if(!this.userserv.IsLogged)
      this.route.navigateByUrl('login')
   }
  
  // incriment(item:any){
  //   this.cartserv.incriment(item);
    
  // }
  // decriment(item:any){
  //   this.cartserv.decriment(item)
    

  // }

  
  
  
}
