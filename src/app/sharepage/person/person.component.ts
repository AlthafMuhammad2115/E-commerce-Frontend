import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  template: `
        <button class="btn btn-dark" [routerLink]="['/'+routename,item.id]" >Buy Now</button>
        `



})
export class PersonComponent {
  constructor(private serv: ProductService, private ar: ActivatedRoute,private cartserv:CartService) { };
  @Input() products: any[] = [];
  @Input() name: any;
  @Input() routename: any;
  @Input() prod:any;
  color: any[] = this.serv.color;
  range: any[] = this.serv.range;
  discount: any[] = this.serv.discount;

  

  hover: any = [];
  enter(index: number) {

    this.hover[index] = true;
  }

  leave(index: number) {
    this.hover[index] = false;
  }

  public count = 0;

  addtocart(item :any) {
    this.cartserv.addtocart(item);
  }


  item = this.products.length;






}
