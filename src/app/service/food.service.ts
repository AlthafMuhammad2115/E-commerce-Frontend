import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private serv:ProductService) {
    this.serv.GetAll().subscribe((res:any)=>{
        this.postarray=res
        
      });
   }

  ngOnInit(){
    
      
  }

  postarray:any=[];
  getall():any{
    console.log(this.postarray);
    
    return this.postarray;

  }
  searchproduct(searchTerm: string) {
    return this.getall().filter((item: any) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
  
  filterprice(min:number,max:number){
    return this.getall().filter((price:any)=>{
      const range= price.price<=max && price.price>=min;
      console.log(range);
      return range;
      
    })
  }

  
}
