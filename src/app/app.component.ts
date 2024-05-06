import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning';
  isCheckoutPage: boolean = false;
  signup: boolean = false;
  login: boolean = false;
  admin: boolean=false;
  

  constructor(private router: Router,private userserv:UserService) {
    // Subscribe to router events to detect navigation changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the checkout component
        this.isCheckoutPage = event.url.includes('/checkout');
        this.signup = event.url.includes('/SignUp');
        this.login = event.url.includes('/login');
        this.admin = event.url.includes('/admin');
      }
    });


    this.userserv.getUserFromLocalStorage('user')
  }
 
  @HostListener('window:load')
  onLoad() {
    this.userserv.getUserFromLocalStorage('user')
    console.log('loaded')
  }
  ngOnInit(){
    // this.userserv.getUserFromLocalStorage('user')
  }

}
