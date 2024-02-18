import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  constructor() { }
  public Men=[
    {
      img:"../../../assets/jeans.png",
      name:"Jeans"
    },
    {
      img:"../../../assets/hoodie.png",
      name:"Hoodies"
    },
    {
      img:"../../../assets/t-shirt.png",
      name:"T-shirts"
    },
    {
      img:"../../../assets/shirt.png",
      name:"Shirts"
    },
    {
      img:"../../../assets/trouser.png",
      name:"Trousers"
    },
    {
      img:"../../../assets/cottonpant.png",
      name:"Pants"
    },
  ]
  public person=[
    {
      img:"../../../assets/men.png",
      name:"Men"
    },
    {
      img:"../../../assets/women.png",
      name:"Women"
    },
    {
      img:"../../../assets/kids.png",
      name:"Kids"
    },
    {
      img:"../../../assets/beauty.png",
      name:"Beauty"
    }
  ]
}
