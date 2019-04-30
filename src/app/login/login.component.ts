import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';
import { NgForm } from '@angular/forms';
import {ValidateService} from '../services/validate.service';
import { HttpClient } from "@angular/common/http";

import { SessionStorageService } from '../services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;


  constructor(private http: HttpClient, private validateService : ValidateService, private router: Router, 
    private sessionStorageService: SessionStorageService) { }

  ngOnInit() {
  }

  onLogin(form : NgForm) {
    console.log(form.value.username)
    const user = {
      username : form.value.username,
      password : form.value.password
    }
    if(!this.validateService.validateLogin(user)){
      console.log("Please fill in all fields");
      return false;
    }
    if(!this.validateService.validateEmail(user.username)){
      console.log("please use a valid email");
      return false;
    }

    let success = false;
    this.http.post("http://localhost:2345/users/login", user)
    .subscribe(response => {
      console.log(response);
      if(response['status'] == 200) {
        success = true;
      }
    });
    if(success) {
      localStorage.setItem('user_type', 'user');
      localStorage.setItem('uid', '10291if1uefquiwoefio');
      this.router.navigate(['/search']);
    }
    else {
      return;
    }

    
  }
}
