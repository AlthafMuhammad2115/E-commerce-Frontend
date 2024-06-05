import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DELETEPRODUCT_URL, EDITPRODUCT_URL, GETPRODUCT_URL, SETPRODUCT_URL } from './urls/urls';
import { BehaviorSubject } from 'rxjs';

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

  // get all by get method

  GetAll(){
    return this.http.get<any>(GETPRODUCT_URL)
  }
  DeleteProduct(id:any){
    return this.http.delete(`${DELETEPRODUCT_URL}${id}`);
  }
  public options = {
    headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
    })
}
  SetProduct(product:any){
    return this.http.post(SETPRODUCT_URL,product)
  }

  EditProducts(id:any,item:any){
    return this.http.patch<any>(`${EDITPRODUCT_URL}${id}`,item)
  }
 
}
