import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscoveredPage } from './discovered.page';
import { LocationCardComponent } from './location-card/location-card.component';
import { LocationMoreInfoPage } from './location-more-info/location-more-info.page';
import { NgxGalleryModule } from 'ngx-gallery';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export function tokenGetter() {
  return localStorage.getItem('token');
}

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
     pinch: { enable: false },
     rotate: { enable: false }
  };
}

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: DiscoveredPage }]),
    NgxGalleryModule,
  ],
  entryComponents: [LocationMoreInfoPage],
  declarations: [DiscoveredPage, LocationCardComponent, LocationMoreInfoPage],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }]
})
export class DiscoveredPageModule {}
