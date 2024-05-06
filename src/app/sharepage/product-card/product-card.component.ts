import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() name!:string;
  @Input() price!:number;
  @Input() count!:number;
  @Input() imgUrl!:string;
}
