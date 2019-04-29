import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const USER_CREDENTIAL = 'user_type';
const CART = 'user_cart';


@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  user = '';
  cart = []

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService){ }

  public storeItemOnLocalStorage(): void {
          
    // get array of tasks from local storage
    const currentCart = this.storage.get(CART) || [];
    // push new task to array
    currentCart.push({
        title: '',
        isChecked: false 
    });
    // insert updated array to local storage
    this.storage.set(CART, currentCart);
    console.log(this.storage.get(CART) || 'Local storage is empty');
  }

  public storeUserCredentialOnLocal(user: string): void {
    const currentUser = user;

    this.storage.set(USER_CREDENTIAL, currentUser);
    console.log(this.storage.get(USER_CREDENTIAL) || 'No user credential');
  }
}
