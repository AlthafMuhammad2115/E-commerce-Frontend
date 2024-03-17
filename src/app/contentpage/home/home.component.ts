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
  men: { img: string; name: string; }[];
  person: { img: string; name: string; routerLink:string }[];
  constructor(private home :HomeserviceService){
    this.state=false;
    this.men=this.home.Men
   this.person=this.home.person
  }
  
}
