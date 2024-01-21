import { Component } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { count } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private cartserv:CartService){}

  show = false;
  onclick(){
    this.show= !this.show;
  }
  count=0;
  ngOnInit(){
    this.cartserv.getproduct().subscribe((res)=>{
      this.count=res.length;
    })
  }
}
