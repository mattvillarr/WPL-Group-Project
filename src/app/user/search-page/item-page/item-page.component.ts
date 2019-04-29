import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

import { inCart } from '../../item-in-cart.model';
import { SessionStorageService } from '../../../services/session-storage.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

  idParam = String;
  item: any;
  amount = [1, 2, 3, 4, 5];

  itemInCart: inCart[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, 
    private sessionStorageService: SessionStorageService) { 
    this.idParam = this.route.snapshot.params.id;
    console.log(this.idParam);
  }

  ngOnInit() {
    // let itd = String(this.idParam);
    let itemId = "http://localhost:2345/products/" + this.idParam;
    this.http.get(itemId)
      .subscribe(response => {
        this.item = response;
      });
  }

  onAdd(form: NgForm) {
    if(form.invalid) {
      return;
    }
    //let sTerm = {'query': form.value.quantity};
    //let qty = form.value.quantity;
    //console.log(qty);

    const cart: inCart = {
      id: String(this.idParam),
      quantity: form.value.quantity
    }
    this.sessionStorageService.addToCart(cart);
    this.itemInCart.push(cart);
    console.log(this.itemInCart);
    this.router.navigate(['/search']);
  }

}
