import { Component,Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeserviceService } from 'src/app/service/homeservice.service';
@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent {

  constructor(private home:HomeserviceService){}


  @Input() image:any[]=[]
  @Input() section:any;
  @Input() routename!:string;
  @Input() state:boolean=true;
  @Input() auto:boolean=true;


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    margin:10,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay:this.auto,
    autoplayTimeout:700,
    autoplayHoverPause:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}

