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
import { SelectedItemComponent } from './user/selected-item/selected-item.component';
import { CheckoutPageComponent } from './user/checkout-page/checkout-page.component';
import { ItemPageComponent } from './user/search-page/item-page/item-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginComponent,
    AdminLandingPageComponent,
    UserLandingPageComponent,
    SearchPageComponent,
<<<<<<< Updated upstream
    ShoppingCartComponent,
    CheckoutPageComponent,
    ItemPageComponent
=======
<<<<<<< HEAD
    SelectedItemComponent,
    CheckoutPageComponent
=======
    ShoppingCartComponent,
    CheckoutPageComponent,
    ItemPageComponent
>>>>>>> ed7b63692642aa9513b9d0cf878c2a576409ebd8
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
