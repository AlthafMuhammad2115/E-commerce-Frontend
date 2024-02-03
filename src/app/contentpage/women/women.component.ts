import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  constructor(private service:ProductService){}
  postarray:any[]=[];
  ngOnInit(){
    this.service.GetAll().subscribe(res=>{
      this.postarray=res;
    })
   }
}
