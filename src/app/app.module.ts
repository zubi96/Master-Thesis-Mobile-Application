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
import { environment } from 'src/environments/environment';


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
           whitelistedDomains: ['localhost:5000', '192.168.88.130:45455', '192.168.88.130', 'http://192.168.88.130:45455'],
           blacklistedRoutes: ['localhost:5000/mobileauth', '192.168.88.130:45455/mobileauth',
                              '192.168.88.130/mobileauth', 'http://192.168.88.130:45455/mobileauth']
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
