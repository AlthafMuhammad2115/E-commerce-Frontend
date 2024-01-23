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
  
  

  // constructor(private product:ProductService){
    
    
  // }
  // postarray:any=this.product.postarray;
    
  postarray:any=[]
 constructor(act:ActivatedRoute,foodserv:FoodService){
  act.params.subscribe((params)=>{
    if(params.min && params.max){
      this.postarray=foodserv.filterprice(params.min,params.max)
      console.log(this.postarray);
      
    }else{
      this.postarray=foodserv.getall();
    }
  })
 }
  

}

