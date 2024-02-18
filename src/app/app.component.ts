import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning';
  isCheckoutPage: boolean = false;

  constructor(private router: Router) {
    // Subscribe to router events to detect navigation changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the checkout component
        this.isCheckoutPage = event.url.includes('/checkout');
      }
    });

    this.router.events.subscribe(evt => {
      console.log("hai");
    
      if (evt instanceof NavigationEnd) {
        let x = document.getElementsByClassName('mat-drawer-content');
        if (x.length > 0) x[0].scrollTo(0, 0);
      }
    });
    
  }

  

}
