import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { SessionStorageService } from '../../services/session-storage.service';

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
    this.http.post("http://localhost:2345/orders/find", this.uid)
    .subscribe(response => {
      this.items = response;
      console.log(response);
    });
  }

}
