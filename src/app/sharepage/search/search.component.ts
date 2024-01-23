import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { FoodService } from 'src/app/service/food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  postarray:any=[]
  constructor(private product:ProductService,act:ActivatedRoute, foodserv:FoodService){
    
    act.params.subscribe((params) => {
      
      if (params.searchTerm) {
        this.postarray = foodserv.searchproduct(params.searchTerm);
        console.log(this.postarray);
        
      } else {
        this.postarray = foodserv.getall();
        console.log(this.postarray);
      }
    });
    
  }
  
}
