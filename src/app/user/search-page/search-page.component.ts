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

  items: any;

  ngOnInit() {
   
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
    //form.resetForm();
  }

}
