import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscoverPage } from './discover.page';
import { AgmCoreModule } from '@agm/core';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: DiscoverPage }]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBKVKCetNWpubLKp_25s8spY91jcbbcmQ4'
    }),
  ],
  declarations: [DiscoverPage],
  providers: [LaunchNavigator, BarcodeScanner]
})
export class DiscoverPageModule {}
