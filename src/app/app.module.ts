import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent
   ],
   entryComponents: [],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      JwtModule.forRoot({
         config: {
           tokenGetter,
           whitelistedDomains: ['localhost:5000'],
           blacklistedRoutes: ['localhost:5000/mobileauth']
         }
       }),
   ],
   providers: [
      ErrorInterceptorProvider,
      StatusBar,
      SplashScreen,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
