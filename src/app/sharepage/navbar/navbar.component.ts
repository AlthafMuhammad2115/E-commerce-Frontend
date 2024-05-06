import { Component, Input ,Inject } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { count } from 'rxjs';
import { FoodService } from 'src/app/service/food.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { DOCUMENT } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  username: any;
  constructor(private cartserv: CartService,
    private foodserv: FoodService,
    private route: Router,
    private act: ActivatedRoute,
    private userserv:UserService,
    @Inject(DOCUMENT) private document: Document
  ) {
    act.params.subscribe(params => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    })

  

  this.IsLogged=this.userserv.IsLogged;

    if(this.userserv.getUserFromLocalStorage('user')){
      this.username=this.userserv.getUserFromLocalStorage('user').username.charAt(0);
      this.cartserv.getproduct().subscribe((res) => {

        this.count = res.products.length;
      })
    }

    
  }
  IsLogged!:boolean;

  show = false;
  onclick() {
    let x = document.querySelectorAll('.slide')
    x[0].classList.toggle('slide_on')
    document.getElementById('sidebar_toggle')?.classList.toggle('open');
    document.getElementById('sidebar')?.classList.toggle('open');
    document.getElementById('body')?.classList.toggle('open');

  }

  logout(){
    this.userserv.removeUserFromLocalStorage('user');
    this.IsLogged=this.userserv.getUserFromLocalStorage("user");
  }
  count = 0;

  public searchTerm: string = ''

  searchproduct(value: string) {
    if (value)
      this.route.navigateByUrl('/search/' + value);
    this.searchTerm = ''
  }

  hover: boolean = true;
  ishover() {
    this.hover = false;
  }
  isnothover() {
    this.hover = true;
  }

  public vis: any;


}



