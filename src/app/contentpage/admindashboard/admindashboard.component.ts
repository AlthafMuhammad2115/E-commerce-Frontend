import { Component,Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
})
export class AdmindashboardComponent {
  @Input() class!:string
  data: string | number = 300;
  productarray: any;
  constructor(private productserv: ProductService,private adminserv:AdminService) {
    this.productserv.GetAll().subscribe(res=>{
       this.productarray=res;
       console.log(res);
       
    })
  }
  ngOnInit(){

  }
  deleteproduct(id:any){
    this.productserv.DeleteProduct(id).subscribe(res=>{
      this.productarray=res;

    });
  }

  toggle:boolean[]=[]
  moreinfo(item:any,index:number){
    this.adminserv.visible();
    
    this.adminserv.moreinfo(item);
  }

  editableProduct(item:any){
    this.adminserv.editableProduct(item);
  }
}
