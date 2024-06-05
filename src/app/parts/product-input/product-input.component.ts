import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-product-input',
  templateUrl: './product-input.component.html',
  styleUrls: ['./product-input.component.css']
})
export class ProductInputComponent {
  @Input() label_name!:string;
  @Input() placeholder!:string;
  @Input() type!:string;
  @Input() form_name!:string;
}
