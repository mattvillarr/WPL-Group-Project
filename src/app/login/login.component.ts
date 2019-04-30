import { Component, OnInit } from '@angular/core';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:any

  constructor() { 
    this.username = ''
  }

  ngOnInit() {
  }

  func() {
    
    console.log(this.username)
  }

}
