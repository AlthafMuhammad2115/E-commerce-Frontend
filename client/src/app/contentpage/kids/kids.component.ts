import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { NavbarComponent } from 'src/app/sharepage/navbar/navbar.component';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {
constructor(private product:ProductService){
}
postarray:any[]=this.product.postarray;
}
