import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { count } from 'rxjs';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent {
  constructor(private serv:ProductService,private ar:ActivatedRoute){
    serv.GetAll().subscribe(res=>{
      this.postarray=res;
    })
  };
  
  getproductid:any;
 menudata:any;
 postarray:any[]=[];
  ngOnInit(){
    this.getproductid=this.ar.snapshot.paramMap.get('id');

    
    if(this.getproductid){
      this.menudata= this.postarray.filter((value)=>{
        return value.id==this.getproductid;
      })
      console.log(this.menudata);
    }
    }
    
}
