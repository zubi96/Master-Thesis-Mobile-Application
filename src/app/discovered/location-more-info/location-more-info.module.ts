import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationMoreInfoPageRoutingModule } from './location-more-info-routing.module';

import { LocationMoreInfoPage } from './location-more-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationMoreInfoPageRoutingModule
  ],
  declarations: [LocationMoreInfoPage]
})
export class LocationMoreInfoPageModule {}
