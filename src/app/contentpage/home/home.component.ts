import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { HomeserviceService } from 'src/app/service/homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  state:any;
  constructor(private home :HomeserviceService){
    this.state=false;
  }
  
  
  public men=[
    {
      img:"../../../assets/jeans.png",
      name:"Jeans"
    },
    {
      img:"../../../assets/hoodie.png",
      name:"Hoodies"
    },
    {
      img:"../../../assets/t-shirt.png",
      name:"T-shirts"
    },
    {
      img:"../../../assets/shirt.png",
      name:"Shirts"
    },
    {
      img:"../../../assets/trouser.png",
      name:"Trousers"
    },
    {
      img:"../../../assets/cottonpant.png",
      name:"Pants"
    },
  ]
  public person=[
    {
      img:"../../../assets/men.png",
      name:"Men",
      routerLink:"/Men"
    },
    {
      img:"../../../assets/women.png",
      name:"Women",
      routerLink:"/Women"
    },
    {
      img:"../../../assets/kids.png",
      name:"Kids",
      routerLink:"/Kids"
    }
  ]
  
  
}
