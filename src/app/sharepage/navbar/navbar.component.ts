import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { count } from 'rxjs';
import { FoodService } from 'src/app/service/food.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private cartserv: CartService,
    private foodserv: FoodService,
    private route: Router,
    private act: ActivatedRoute
  ) {
    act.params.subscribe(params => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    })

  }

  show = false;
  onclick() {
    let x = document.querySelectorAll('.slide')
    x[0].classList.toggle('slide_on')
    document.getElementById('sidebar_toggle')?.classList.toggle('open');
    document.getElementById('sidebar')?.classList.toggle('open');
    document.getElementById('body')?.classList.toggle('open');

  }
  count = 0;
  ngOnInit(): void {
    this.cartserv.getproduct().subscribe((res) => {
      this.count = res.length;
    })


  }

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



