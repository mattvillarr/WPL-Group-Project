import { Inject, Injectable } from '@angular/core';

import { inCart } from '../user/item-in-cart.model';

const USER_CREDENTIAL = 'user_type';
const UID = 'uid';

@Injectable({providedIn: 'root'})
export class SessionStorageService {
  
  constructor(){ }

  addToCart(item: inCart) {
    let id = String(item['id']);
    localStorage.setItem(id, JSON.stringify(item));
    console.log(localStorage);
  }

  removeFromCart(id) {
    localStorage.removeItem(id);
  }

  updateQty(id, qty){
    let val = JSON.parse(localStorage.getItem(id));
    val['quantity'] = qty;
    console.log(val);
    localStorage.setItem(id, JSON.stringify(val));
  }

  clearCart() {
    let userType = localStorage.get(USER_CREDENTIAL);
    let uid = localStorage.get(UID)
    localStorage.clear();
    localStorage.setItem(USER_CREDENTIAL, userType);
    localStorage.setItem(UID, uid);
  }

  getAllFromCart() {
    let allInCart = [];
    for ( let i = 0, len = localStorage.length; i < len; i++ ) {
      let key = localStorage.key(i);
      if(key != USER_CREDENTIAL && key != UID) {
        let val = JSON.parse(localStorage.getItem(key));
        //console.log("val", val);
        allInCart.push(val);
      }
    }
    
    console.log(allInCart);
    return allInCart; 
  }

  calculateSubtotal() {
    let items = this.getAllFromCart();
    let subtotal = 0;
    for(let i of items) {
      let price = Number(i['price'])
      console.log(i['quantity']);
      subtotal += (price * Number(i['quantity']));
    }
    console.log(subtotal);
    return subtotal;
  }

  getUserId() {
    return JSON.parse(localStorage.getItem(UID));
  }

  getUserCred() {
    //localStorage.setItem(USER_CREDENTIAL, 'admin');
    return localStorage.getItem(USER_CREDENTIAL);
  }
}
