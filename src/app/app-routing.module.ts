import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent } from './contentpage/men/men.component';
import { WomenComponent } from './contentpage/women/women.component';
import { KidsComponent } from './contentpage/kids/kids.component';
import { HomeComponent } from './contentpage/home/home.component';
import { ProductpageComponent } from './sharepage/productpage/productpage.component';
import { CartComponent } from './contentpage/cart/cart.component';
import { SearchComponent } from './sharepage/search/search.component';
import { WishlistComponent } from './contentpage/wishlist/wishlist.component';
import { LoginComponent } from './contentpage/login/login.component';
import { RegisterComponent } from './contentpage/register/register.component';
import { CheckoutComponent } from './sharepage/checkout/checkout.component';
import { NotfoundComponent } from './sharepage/notfound/notfound.component';
import { AdminComponent } from './contentpage/admin/admin.component';
import { AdmindashboardComponent } from './contentpage/admindashboard/admindashboard.component';
import { AddProductsComponent } from './contentpage/add-products/add-products.component';
import { ProductListComponent } from './contentpage/product-list/product-list.component';
import { OrderComponent } from './contentpage/order/order.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'search/:searchTerm',component:SearchComponent},
  {path:'Men',component:MenComponent},
  {path:'Women',component:WomenComponent},
  {path:'Kids',component:KidsComponent},
  {path:'Men/:id',component:ProductpageComponent},
  {path:'Women/:id',component:ProductpageComponent},
  {path:'Kids/:id',component:ProductpageComponent},
  {path:'Beauty/:id',component:ProductpageComponent},
  {path:'item/:id',component:ProductpageComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'login',component:LoginComponent},
  {path:'SignUp',component:RegisterComponent},
  {path:':id/checkout',component:CheckoutComponent},
  {path:'orders',component:OrderComponent},

  {path:'admin',component:AdminComponent,children:[
    {path:'addProducts',component:AddProductsComponent},
    {path:'',component:ProductListComponent},
    {path:'editProducts',component:AddProductsComponent},
  ]},
  

  {path:'**',component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
