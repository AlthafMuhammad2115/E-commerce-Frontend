import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PRODUCT_URL } from './urls/urls';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public color:any[]=[
    "red","black","orange","blue"
  ]
  public discount:any[]=[
    "10% and above","20% and above","30% and above","40% and above","40% and above","50% and above"
  ]

  GetAll(){
    return this.http.get<any>(PRODUCT_URL, { withCredentials: true })
  }
 
}
