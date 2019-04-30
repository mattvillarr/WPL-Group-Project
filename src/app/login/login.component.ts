import { Component, OnInit } from '@angular/core';
import { appInitializerFactory } from '@angular/platform-browser/src/browser/server-transition';
import { NgForm } from '@angular/forms';
import {ValidateService} from '../services/validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;


  constructor(private validateService : ValidateService) { 
    // this.username = ''
  }

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
    
  }

}
