import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private serv:ProductService) { }

  postarray:any=this.serv.postarray;
  getall(){
    return this.postarray;
    
  }
  searchproduct(searchTerm: string) {
    return this.getall().filter((item: any) => {
      return item.foodName.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
  
  filterprice(min:number,max:number){
    return this.getall().filter((price:any)=>{
      const range= price.foodPrice<max && price.foodPrice>min;
      console.log(range);
      return range;
      
    })
  }
}
