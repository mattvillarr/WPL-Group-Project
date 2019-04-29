import { Inject, Injectable } from '@angular/core';

import { inCart } from '../user/item-in-cart.model';

interface userData {
  uid: String,
  userType: String,
  cart: inCart[]
}

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

  removeFromCart(item: inCart, id) {
    localStorage.removeItem(id);
  }

  updateQty(item: inCart, id){
    localStorage.setItem(id, JSON.stringify(item));
  }

  clearCart() {
    let userType = localStorage.get(USER_CREDENTIAL);
    let uid = localStorage.get(UID)
    localStorage.clear();
    localStorage.setItem(USER_CREDENTIAL, userType);
    localStorage.setItem(UID, uid);
  }

  getAllFromCart() {
    //let allInCart: inCart[] = [];
    let allInCart = [];
    for ( let i = 0, len = localStorage.length; i < len; i++ ) {
      let key = localStorage.key(i);
      if(key != USER_CREDENTIAL && key != UID) {
        let val = JSON.parse(localStorage.getItem(key));
        console.log("val", val);
        allInCart.push(val);
      }
    }
    
    console.log(allInCart[0]['id']);
    return allInCart; 
  }
}
