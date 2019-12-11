import { Component, NgZone, OnInit } from '@angular/core';
import { LocationService } from '../_services/location.service';
import { ToastService } from '../_services/toast.service';
import { AuthService } from '../_services/auth.service';
import { Location } from '../_models/location';
import { LaunchNavigator } from '@ionic-native/launch-navigator/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-discover',
  templateUrl: 'discover.page.html',
  styleUrls: ['discover.page.scss']
})
export class DiscoverPage implements OnInit {
  mapShown = false;
  mainPhotoUrl: string;
  locations: Location[];
  allDiscovered = false;

  constructor(private locationService: LocationService, private toast: ToastService, private barcodeScanner: BarcodeScanner,
              private authService: AuthService, private launchNavigator: LaunchNavigator) {}

  ngOnInit() {
    this.loadLocations();
  }

  loadLocations() {
    this.locationService.getUndiscoveredLocations(+this.authService.getUserId()).subscribe((response) => {
      this.locations = response.reverse();
      if(this.locations.length === 0){
        this.allDiscovered = true;
      }
    }, error => {
      this.toast.showToast(error);
    });
  }

  showMap() {
    this.mapShown = true;
  }

  goThere(lat, lng) {
    this.launchNavigator.navigate([lat, lng]).then(
      success => console.log('Launched navigator'),
      error => this.toast.showToast(error)
    );
  }

  scanQrCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.handleScannedText(barcodeData.text);
    }).catch(err => {
      this.toast.showToast(err);
    });
    // this.handleScannedText('cVE5U3SqB1foiFjM19');
  }

  handleScannedText(text: string) {
    if (!text.includes('cVE5U3SqB1foiFjM')) {
      this.toast.showToast('QR Code not valid for this application');
      return;
    }

    const locationId = text.replace('cVE5U3SqB1foiFjM', '');
    this.locationService.discoverLocation(+this.authService.getUserId(), +locationId).subscribe(() => {
      // this.locations.splice(this.locations.findIndex(c => c.id === +locationId), 1);
      this.loadLocations();
      this.toast.showToast('New location discovered!');
    }, error => {
      this.toast.showToast(error);
    });
  }

}
