import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent {

    
 constructor(private service:ProductService){
  
 }

 ngOnInit(){
  this.service.GetAll().subscribe(res=>{
    this.postarray=res;
  })
 }
 postarray:any=[];

  

}

