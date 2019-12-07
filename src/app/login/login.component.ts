import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { UserLogin } from '../_models/user-login';
import { UserRegister } from '../_models/user-register';
import { ToastService } from '../_services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;
  userLogin: UserLogin;
  userRegister: UserRegister;
  showLoginForm = true;
  genders = ['Male', 'Female', 'Other'];
  countries = [ 'Croatia', 'United Kingdom', 'Germany', 'Russia', 'Canada', 'China', 'France', 'Austria'];

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private toast: ToastService) { }

  ngOnInit() {
    this.createLoginForm();
    this.createSignupForm();
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
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.userLogin = Object.assign({}, this.loginForm.value);
      this.authService.login(this.userLogin).subscribe(() => {
        this.toast.showToast('Login successful');
        this.router.navigate(['']);
        this.loginForm.reset();
      }, error => {
        this.loginForm.reset();
        this.toast.showToast(error);
      });
    }
  }

  signup() {
    if (this.signupForm.valid) {
      this.userRegister = Object.assign({}, this.signupForm.value);
      this.authService.register(this.userRegister).subscribe(() => {
        this.userLogin = Object.assign({}, this.signupForm.value);
        this.authService.login(this.userLogin).subscribe(() => {
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
