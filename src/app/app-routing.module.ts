import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { AdminLandingPageComponent } from './admin/admin-landing-page/admin-landing-page.component';
import { UserLandingPageComponent } from './user/user-landing-page/user-landing-page.component';
import { SearchPageComponent } from './user/search-page/search-page.component';
import { CheckoutPageComponent } from './user/checkout-page/checkout-page.component';
import { ItemPageComponent } from './user/search-page/item-page/item-page.component';
import { RegisterComponent } from './login/register/register.component';
import { ShoppingCartComponent } from './user/shopping-cart/shopping-cart.component';
import { ProfilePageComponent } from './user/profile-page/profile-page.component';
import { NewItemComponent } from './admin/new-item/new-item.component';
import {NgxPaginationModule} from 'ngx-pagination';


const routes: Routes = [
  { path: 'home', component: WelcomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin_home', component: AdminLandingPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'search', component: SearchPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'item/:id', component: ItemPageComponent },
  { path: 'new_item', component: NewItemComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
