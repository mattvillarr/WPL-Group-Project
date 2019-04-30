import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  credCheck = '';

  constructor(private http: HttpClient, private sessionStorageService: SessionStorageService) { }

  items: any;
  categories = ['Clothing', 'Footwear', 'Jewelry ', 'Bags, Wallets & Belts', 'Beauty and Personal Care'];
  resultsPerPage = 8;

  ngOnInit() { 
    this.credCheck = this.sessionStorageService.getUserCred();

    if(this.credCheck == 'admin') {
      this.http.post("http://localhost:2345/products/find", '')
      .subscribe(response => {
        this.items = response;
        console.log(response);
      });
    }
    else {
      let search = {'query': 'pants'};
      this.http.post("http://localhost:2345/products/search", search)
      .subscribe(response => {
        this.items = response;
        console.log(response);
        console.log("Results for " + search);
      });
    }
  }

  onSearch(form: NgForm) {
    if(form.invalid) {
      return;
    }
    let sTerm = {'query': form.value.search};
    this.http.post("http://localhost:2345/products/search", sTerm)
    .subscribe(response => {
      this.items = response;
      console.log(response);
      console.log("Results for " + sTerm);
    });
    form.resetForm();
  }

  onFilter(category: String) {
    console.log(category);
    if (category == 'Jewelry') {
      category = "Jewellery " // there is a typo in db
    }
    let filtered = [];
    
    for(let i of this.items) {
      if(i['category'] == category) {
        filtered.push(i);
      }
    } 
    this.items = filtered;
  }
}
