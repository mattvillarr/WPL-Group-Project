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

  credCheck = '';
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
    this.credCheck = this.sessionStorageService.getUserCred();
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
      quantity: form.value.quantity,
      image: this.item.image,
      price: this.item.price,
      name: this.item.name
    }
    this.sessionStorageService.addToCart(cart);
    this.itemInCart.push(cart);
    console.log(this.itemInCart);
    this.router.navigate(['/search']);
  }

  onUpdate(form: NgForm) {
    if(form.invalid) {
      return;
    }
    let update = {
      'name': form.value.name,
      'price': form.value.price,
      'category': form.value.category,
      'image': form.value.image,
      'description': form.value.desc
    };
    this.http.patch("http://localhost:2345/products/" + this.idParam + "/update", update)
    .subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['/search']);
  }

  onDelete() {
    this.http.delete("http://localhost:2345/products/" + this.idParam + "/delete")
    .subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['/search']);
  }

}
