import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  constructor( private service:ProductService,private http:HttpClient){
    
  }

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
