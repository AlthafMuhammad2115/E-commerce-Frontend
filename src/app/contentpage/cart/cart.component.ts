import { Component,Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private serv:ProductService,private cartserv:CartService){};

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
  public postarray:any=[];
  public len:number=0;
  public num:number=1;
  subtotal:number=0;
  ngOnInit(){
    this.cartserv.getproduct().subscribe(res=>{
      this.postarray=res;
      this.len=res.length;

    })
    this.cartserv.totalprice.subscribe(res=>{
      this.subtotal=res;
    })
  }

  removefromcart(item:any){
    this.cartserv.removefromcart(item);
  }

  
  incriment(item:any){
    this.cartserv.incriment(item);
    
  }
  decriment(item:any){
    this.cartserv.decriment(item)
    

  }

  

  
}
