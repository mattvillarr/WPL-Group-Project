import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

import { inCart } from '../../user/item-in-cart.model';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  item: any;
  amount = [1, 2, 3, 4, 5];
  credCheck = '';

  itemInCart: inCart[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, 
    private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    this.credCheck = this.sessionStorageService.getUserCred();
    console.log(this.credCheck);
  }

  onCreate(form: NgForm) {
    if(form.invalid) {
      return;
    }
    let newItem = {
      'name': form.value.name,
      'price': form.value.price,
      'category' : form.value.category,
      'image' : form.value.image,
      'description' : form.value.description,
      'rating' : 0
    }
    this.http.post("http://localhost:2345/products/create", newItem)
    .subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['/search']);
  }
}
