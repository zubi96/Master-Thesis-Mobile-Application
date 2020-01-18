import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { ToastService } from '../_services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;
  user: User;
  showLoginForm = true;
  genders = ['Male', 'Female', 'Other'];
  countries = [ 'Croatia', 'United Kingdom', 'Germany', 'Russia'];

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private toast: ToastService) { }

  ngOnInit() {
    this.createLoginForm();
    this.createSignupForm();
  }

  ionViewWillEnter() {
    if(this.authService.loggedIn()) {
      this.router.navigate(['']);
    }
  }

  createLoginForm() {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      country: ['', Validators.required],
      gender: ['', Validators.required],
      dateofbirth: ['', Validators.required],
    });
  }

  createSignupForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.user = Object.assign({}, this.loginForm.value);
      this.authService.login(this.user).subscribe(() => {
        this.router.navigate(['']);
        this.loginForm.reset();
      }, error => {
        // this.loginForm.reset();
        this.toast.showToast(JSON.stringify(error));
        alert(JSON.stringify(error));
      });
    }
  }

  signup() {
    if (this.signupForm.valid) {
      this.user = Object.assign({}, this.signupForm.value);
      this.authService.register(this.user).subscribe(() => {
        this.user = Object.assign({}, this.signupForm.value);
        this.authService.login(this.user).subscribe(() => {
          this.toast.showToast('Login successful');
          this.router.navigate(['']);
          this.signupForm.reset();
        }, error => {
          this.loginForm.reset();
          this.toast.showToast(error);
        });
      }, error => {
        this.signupForm.reset();
        this.toast.showToast(error);
      });
    }
  }

  switchForm() {
    this.loginForm.reset();
    this.signupForm.reset();
    this.showLoginForm = !this.showLoginForm;
  }

}
