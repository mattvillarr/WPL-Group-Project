import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

import { inCart } from '../item-in-cart.model';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  itemsFromSession = [];
  subtotal = 0;

  constructor(private http: HttpClient, private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    this.itemsFromSession = this.sessionStorageService.getAllFromCart();
    this.subtotal = this.sessionStorageService.calculateSubtotal();
  }
}
