import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  items = [];

  ngOnInit() {
    this.http.post("http://localhost:2345/products/search", " ")
    .subscribe(response => {
      console.log("Initialized search");
      console.log(response);
    });
  }

  onSearch(form: NgForm) {
    if(form.invalid) {
      return;
    }
    this.http.post("http://localhost:2345/products/search", form.value.search)
    .subscribe(response => {
      console.log("Results for " + form.value.search);
    });
    form.resetForm();
  }

}
