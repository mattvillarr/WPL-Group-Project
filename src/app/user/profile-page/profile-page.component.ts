import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { SessionStorageService } from '../../services/session-storage.service';

import { getRandomString } from 'selenium-webdriver/safari';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  uid = '';
  items: any;

  constructor(private http: HttpClient, private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    this.uid = localStorage.getItem('uid');
    this.http.post("http://localhost:2345/orders/find", {userId: this.uid})
    .subscribe(response => {
      console.log("Got response 1")
      console.log("Looping")
      let that = this
      this.items = []
      response['orders'].forEach(function(x) {
        console.log("in loop 1")
        console.log(x)
        that.http.get("http://localhost:2345/products/" + x['product'])
        .subscribe(response => {
          console.log(response);
          that.items.push(response);
          console.log(that.items)
        });
      })
    })
  }

rating(form: NgForm, id){
    console.log(id['_id']);
    console.log(form.value.stars);
    this.http.patch("http://localhost:2345/products/"+id['_id']+"/set_rating", {ratings: form.value.stars}).subscribe(response => {
      this.items = response;
      console.log(response);
    });
}






}

