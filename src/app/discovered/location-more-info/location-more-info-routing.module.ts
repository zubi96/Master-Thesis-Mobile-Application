import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationMoreInfoPage } from './location-more-info.page';

const routes: Routes = [
  {
    path: '',
    component: LocationMoreInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationMoreInfoPageRoutingModule {}
