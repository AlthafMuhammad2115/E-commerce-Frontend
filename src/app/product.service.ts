import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GETPRODUCT_URL } from './urls/urls';
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

//   public products = [
//     {
//         id: 1,
//         name: 'Red Plaid Shirt',
//         shortDesc: 'Classic red plaid shirt for a casual look',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
//         size: ['S', 'M', 'L', 'XL'],
//         price: 799,
//         imgUrl: '../assets/t-shirt.png',
//         stock: 18,
//         category: 'tees',
//         trending: true,
//     },
//     {
//         id: 2,
//         name: 'Denim Jacket',
//         shortDesc: 'Stylish denim jacket with a modern fit',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
//         size: ['M', 'L', 'XL'],
//         price: 399,
//         imgUrl: '../assets/t-shirt.png',
//         stock: 0,
//         category: 'hoodies',
//         trending: false,
//     },
//     {
//         id: 3,
//         name: 'Black Leather Boots',
//         shortDesc: 'Durable black leather boots for all occasions',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
//         size: ['8', '9', '10', '11'],
//         price: 599,
//         imgUrl: '../assets/t-shirt.png',
//         stock: 0,
//         category: 'tees',
//         trending: true,
//     },
//     {
//         id: 4,
//         name: 'Green Hoodie',
//         shortDesc: 'Comfortable green hoodie for a cozy day',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
//         size: ['S', 'M', 'L'],
//         price: 699,
//         imgUrl: '../assets/t-shirt.png',
//         stock: 22,
//         category: 'hoodies',
//         trending: true,
//     },
//     {
//         id: 5,
//         name: 'Striped Polo Shirt',
//         shortDesc: 'Elegant striped polo shirt for a refined look',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
//         size: ['M', 'L', 'XL'],
//         price: 1999,
//         imgUrl: '../assets/t-shirt.png',
//         stock: 14,
//         category: 'tees',
//         trending: false,
//     },
//     {
//         id: 6,
//         name: 'Khaki Chinos',
//         shortDesc: 'Versatile khaki chinos for a polished outfit',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
//         size: ['30', '32', '34', '36'],
//         price: 1499,
//         imgUrl: '../assets/t-shirt.png',
//         stock: 25,
//         category: 'pants',
//         trending: true,
//     },
//     {
//         id: 7,
//         name: 'Blue Crewneck Sweater',
//         shortDesc: 'Warm blue crewneck sweater for chilly days',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
//         size: ['S', 'M', 'L'],
//         price: 1499,
//         imgUrl: '../assets/t-shirt.png',
//         stock: 18,
//         category: 'sweaters',
//         trending: false,
//     },
//     {
//         id: 8,
//         name: 'Printed Summer Dress',
//         shortDesc: 'Colorful printed summer dress for a vibrant look',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
//         size: ['XS', 'S', 'M'],
//         price: 499,
//         imgUrl: '../assets/t-shirt.png',
//         stock: 30,
//         category: 'tees',
//         trending: true,
//     },
//     {
//         id: 9,
//         name: 'Brown Leather Belt',
//         shortDesc: 'Classic brown leather belt to complete your outfit',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
//         size: ['32', '34', '36'],
//         price: 1199,
//         imgUrl: '../assets/t-shirt.png',
//         stock: 15,
//         category: 'pants',
//         trending: false,
//     },
//     {
//         id: 10,
//         name: 'Grey Beanie Hat',
//         shortDesc: 'Cozy grey beanie hat to keep you warm in style',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac lectus nec nisi congue posuere.',
//         size: ['One Size'],
//         price: 999,
//         imgUrl: '../assets/t-shirt.png',
//         stock: 20,
//         category: 'sweaters',
//         trending: true,
//     },
// ]

  // prod=new BehaviorSubject<any>(this.products);

  // GetAll(){
  //   return this.prod.asObservable()
  // }
 
}
