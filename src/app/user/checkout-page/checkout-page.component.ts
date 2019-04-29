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
    if(form.invalid) {
      return;
    }

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
      let uid = this.sessionStorageService.getUserId();
      let order = { 
        quantity: item['quantity'],
        user: uid,
        product: item['id']
      }
      itemIds.push(order);
    }

    for(let id of itemIds) {

      this.http.post("http://localhost:2345/orders/create", id)
      .subscribe(response => {
        console.log("order has been posted!");
        console.log(response);
      });
    }
    this.router.navigate(['/']);
  }
}
