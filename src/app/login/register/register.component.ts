import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { PasswordStrengthValidator } from "../password-strength.validators"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6), PasswordStrengthValidator]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    //console.log("Inside onsubmit");
    //console.log(this.registerForm.status);
    //console.log(this.registerForm.valid);
    //console.log(this.registerForm.invalid);
    this.submitted = true;

    if (this.registerForm.invalid) {
      //console.log("inside if");

      return;
    }

    else {
    //console.log(this.registerForm.status);
    //console.log("efjenfjn");
    const regData = {username: this.registerForm.value.userName, email: this.registerForm.value.email, password: this.registerForm.value.password};
    this.http
      .post("http://localhost:2345/users/signup", regData)
        .subscribe(response => {
          console.log("Successfully done");
          console.log(response);
          this.router.navigate(['/login']);
      });
    }
  }
}