import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
//   postarray:any=[]
//  constructor(act:ActivatedRoute,foodserv:FoodService){
//   act.params.subscribe((params)=>{
//     if(params.min && params.max){
//       this.postarray=foodserv.filterprice(params.min,params.max)
//       console.log(this.postarray);
      
//     }else{
//       this.postarray=foodserv.getall();
//     }
//   })
//  }

}
