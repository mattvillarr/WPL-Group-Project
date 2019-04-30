import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionStorageService } from '../services/session-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  credCheck = '';

  constructor(private sessionStorageService: SessionStorageService, private router: Router) { }

  ngOnInit() {
    this.credCheck = this.sessionStorageService.getUserCred();
    console.log(this.credCheck);
  }

  logMeOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
