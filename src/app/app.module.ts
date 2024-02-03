import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './sharepage/slider/slider.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { ListComponent } from './sharepage/list/list.component';
import { MenComponent } from './contentpage/men/men.component';
import { WomenComponent } from './contentpage/women/women.component';
import { KidsComponent } from './contentpage/kids/kids.component';
import { HomeComponent } from './contentpage/home/home.component';
import { BeautyComponent } from './contentpage/beauty/beauty.component';
import { PersonComponent } from './sharepage/person/person.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProductpageComponent } from './sharepage/productpage/productpage.component';
import {MatButtonModule} from '@angular/material/button';
import { CartComponent } from './contentpage/cart/cart.component';
import {MatBadgeModule} from '@angular/material/badge';
import { SearchComponent } from './sharepage/search/search.component';
import { WishlistComponent } from './contentpage/wishlist/wishlist.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './contentpage/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { RegisterComponent } from './contentpage/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavbarComponent,
    FooterComponent,
    ListComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    HomeComponent,
    BeautyComponent,
    PersonComponent,
    ProductpageComponent,
    CartComponent,
    SearchComponent,
    WishlistComponent,
    LoginComponent,
    RegisterComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatBadgeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
