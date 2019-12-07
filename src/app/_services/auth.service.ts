import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.baseUrl + 'mobileauth/';
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getUserId() {
    return localStorage.getItem('userid');
  }

  login(model: any) {
    return this.http.post(this.apiUrl + 'login', model).pipe(
      map((response: any) => {
        const token = response.token;
        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('userid', this.jwtHelper.decodeToken(token).nameid);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.apiUrl + 'register', model);
  }

}
