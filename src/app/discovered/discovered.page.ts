import { Component, OnInit } from '@angular/core';
import { LocationService } from '../_services/location.service';
import { ToastService } from '../_services/toast.service';
import { AuthService } from '../_services/auth.service';
import { Location } from '../_models/location';

@Component({
  selector: 'app-discovered',
  templateUrl: 'discovered.page.html',
  styleUrls: ['discovered.page.scss']
})
export class DiscoveredPage implements OnInit {
  locations: Location[];

  constructor(private locationService: LocationService, private toastService: ToastService, private authService: AuthService) {}

  ngOnInit() {
    this.loadLocations();
  }

  loadLocations() {
    this.locationService.getDiscoveredLocations(+this.authService.getUserId()).subscribe((response) => {
      this.locations = response;
    }, error => {
      this.toastService.showToast(error);
    });
  }

}
