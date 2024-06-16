import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrdersService } from 'src/app/service/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  public orderDetials:any;

  constructor(private orderserv:OrdersService){}
  
  ngOnInit(){
    this.orderserv.getOrders().subscribe((res)=>{
      this.orderDetials=res;
      console.log(this.orderDetials);
      
    })
  }

  moreDetialItem:any;
  state!:boolean
  ViewOrderDetials(item:any,index:number){
    this.state=true;
    this.moreDetialItem=item;
    
  }
  RemoveOrderDetials(){
    this.state=false;
    this.moreDetialItem=null;
  }
}
