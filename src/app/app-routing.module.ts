import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { AdminLandingPageComponent } from './admin/admin-landing-page/admin-landing-page.component';
import { UserLandingPageComponent } from './user/user-landing-page/user-landing-page.component';
import { SearchPageComponent } from './user/search-page/search-page.component';
import { ShoppingCartComponent } from './user/shopping-cart/shopping-cart.component';
import { CheckoutPageComponent } from './user/checkout-page/checkout-page.component';
import { ItemPageComponent } from './user/search-page/item-page/item-page.component';


const routes: Routes = [
  { path: 'home', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin_home', component: AdminLandingPageComponent },
  { path: 'user_home', component: UserLandingPageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'item', component: ItemPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
