import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent {
  constructor(private service:ProductService){}
  postarray:any[]=[];
  ngOnInit(){
    this.service.GetAll().subscribe(res=>{
      this.postarray=res;
    })
   }
}
