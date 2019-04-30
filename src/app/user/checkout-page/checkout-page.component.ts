import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

import { inCart } from '../item-in-cart.model';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  itemsFromSession = [];
  subtotal = 0;

  constructor(private http: HttpClient,  private router: Router, 
    private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    this.itemsFromSession = this.sessionStorageService.getAllFromCart();
    this.subtotal = this.sessionStorageService.calculateSubtotal();
  }

  onCheckout(form: NgForm) {
    console.log("1")
    if(form.invalid) {
      console.log("2")
      return;
    }
    console.log("3")

    let userInfo = {
      email: form.value.email,
      fname: form.value.fname,
      lname: form.value.lname,
      address: form.value.address + form.value.address2,
      city: form.value.city,
      state: form.value.state,
      zip: form.value.state,
      tel: form.value.tel
    };

    let itemIds = [];
    for(let item of this.itemsFromSession) {

      console.log("1111")
    console.log(item)
      let uid = this.sessionStorageService.getUserId();
      console.log(uid)
      let order = { 
        quantity: item['quantity'],
        userId: uid,
        productId: item['id']
      }

    console.log("5")
    
    console.log(order)
      itemIds.push(order);
    }
    console.log("4")

    for(let id of itemIds) {
      console.log(id)

      this.http.post("http://localhost:2345/orders/create", id)
      .subscribe(response => {
        console.log("order has been posted!");
        console.log(response);
      });
    }
    this.sessionStorageService.clearCart();
    this.router.navigate(['/search']);
  }
}
