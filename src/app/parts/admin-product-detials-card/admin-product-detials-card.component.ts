import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-product-detials-card',
  templateUrl: './admin-product-detials-card.component.html',
  styleUrls: ['./admin-product-detials-card.component.css']
})
export class AdminProductDetialsCardComponent {
  public productdetial:any;
  toggle!:boolean;
  constructor(private adminserv:AdminService){
    adminserv.getinfo().subscribe(res=>{
      this.productdetial=res;
      console.log(res);
      
    })
    this.adminserv.gettogglestate().subscribe(res=>{
      this.toggle=res;
    })
  }

  invisible(){
    this.adminserv.invisible();
  }

  



}
