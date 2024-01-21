import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {
  

  constructor(private product:ProductService){};
  postarray:any[]=this.product.postarray;

}
