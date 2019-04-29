import { Component, OnInit } from '@angular/core';

import { SessionStorageService } from '../services/session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  credCheck = '';

  constructor(private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
    this.credCheck = this.sessionStorageService.getUserCred();
    console.log(this.credCheck);
  }

  logMeOut() {

  }
}
