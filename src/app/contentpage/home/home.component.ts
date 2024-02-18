import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { HomeserviceService } from 'src/app/service/homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  state:any;
  constructor( private service:ProductService,private http:HttpClient,private home :HomeserviceService){
    this.state=false;
  }

  public men=this.home.Men
  public person=this.home.person

  
  ngOnInit(): void {

   this.service.GetAll().subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }
  
  
  
}
