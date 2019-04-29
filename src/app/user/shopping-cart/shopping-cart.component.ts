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

  allItems = []

  constructor(private http: HttpClient, private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    let allItems = this.sessionStorageService.getAllFromCart();
    console.log("all items = ", allItems);

  }
}
