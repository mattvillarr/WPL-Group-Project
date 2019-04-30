import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginComponent } from './login/login.component';
import { AdminLandingPageComponent } from './admin/admin-landing-page/admin-landing-page.component';
import { UserLandingPageComponent } from './user/user-landing-page/user-landing-page.component';
import { SearchPageComponent } from './user/search-page/search-page.component';
import { CheckoutPageComponent } from './user/checkout-page/checkout-page.component';
import { ItemPageComponent } from './user/search-page/item-page/item-page.component';
import { RegisterComponent } from './login/register/register.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartComponent } from './user/shopping-cart/shopping-cart.component';
import { ProfilePageComponent } from './user/profile-page/profile-page.component';
import { NewItemComponent } from './admin/new-item/new-item.component';

import {ValidateService} from './services/validate.service';
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginComponent,
    AdminLandingPageComponent,
    UserLandingPageComponent,
    SearchPageComponent,
    CheckoutPageComponent,
    ItemPageComponent,
    RegisterComponent,
    HeaderComponent,
    ShoppingCartComponent,
    ProfilePageComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
