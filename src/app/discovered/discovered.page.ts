import { Component, OnInit } from '@angular/core';
import { LocationService } from '../_services/location.service';
import { ToastService } from '../_services/toast.service';
import { AuthService } from '../_services/auth.service';
import { Location } from '../_models/location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discovered',
  templateUrl: 'discovered.page.html',
  styleUrls: ['discovered.page.scss']
})
export class DiscoveredPage implements OnInit {
  locations: Location[];
  locationsEmpty = true;

  constructor(private locationService: LocationService, private toastService: ToastService,
              private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loadLocations();
  }

  ionViewDidEnter() {
    this.loadLocations();
  }

  loadLocations() {
    this.locationService.getDiscoveredLocations(+this.authService.getUserId()).subscribe((response) => {
      this.locations = response.reverse();
      if (this.locations.length > 0) {
        this.locationsEmpty = false;
      } else {
        this.locationsEmpty = true;
      }
    }, error => {
      this.toastService.showToast(error);
    });
  }

  goToDiscover() {
    this.router.navigate(['/tabs/discover']);
  }

}
