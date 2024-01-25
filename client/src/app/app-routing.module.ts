import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './contentpage/men/men.component';
import { WomenComponent } from './contentpage/women/women.component';
import { KidsComponent } from './contentpage/kids/kids.component';
import { HomeComponent } from './contentpage/home/home.component';
import { BeautyComponent } from './contentpage/beauty/beauty.component';
import { ProductpageComponent } from './sharepage/productpage/productpage.component';
import { CartComponent } from './contentpage/cart/cart.component';
import { SearchComponent } from './sharepage/search/search.component';
import { WishlistComponent } from './contentpage/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchTerm',component:SearchComponent},
  {path:'Men',component:MenComponent},
  {path:'Women',component:WomenComponent},
  {path:'Kids',component:KidsComponent},
  {path:'Beauty',component:BeautyComponent},
  {path:'Men/:id',component:ProductpageComponent},
  {path:'Women/:id',component:ProductpageComponent},
  {path:'Kids/:id',component:ProductpageComponent},
  {path:'Beauty/:id',component:ProductpageComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
