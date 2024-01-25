import { Component } from '@angular/core';
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
    this.show = !this.show;
  }
  count = 0;
  ngOnInit() {
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

}
