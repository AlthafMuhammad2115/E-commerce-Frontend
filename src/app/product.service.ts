import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public color:any[]=[
    "red","black","orange","blue"
  ]
  public range:any[]=[
    "200-300","300-500","500-1000","1000-2000"
  ]
  public discount:any[]=[
    "10% and above","20% and above","30% and above","40% and above","40% and above","50% and above"
  ]

  public postarray=[
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Paneer Grilled Sandwich: A mouthwatering delight, featuring succulent paneer and aromatic spices, perfectly grilled between layers of buttered bread. Irresistibly flavorful.",
      foodPrice:200,
      count:1,
      subtotal:200,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:369,
      count:1,
      subtotal:369,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"Paneer burger: A scrumptious vegetarian delight featuring a succulent paneer patty, fresh veggies, and zesty sauces, perfect for burger lovers.",
      foodPrice:149,
      count:1,
      subtotal:149,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:140,
      count:1,
      subtotal:140,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:105,
      count:1,
      subtotal:105,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:" frozen delight that marries velvety vanilla ice cream with generous chunks of Oreo cookies, creating a perfect blend of sweetness and crunch in every spoonful.",
      foodPrice:219,
      count:1,
      subtotal:219,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    },
    
  ]
}
