import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../../_models/location';
import { ModalController } from '@ionic/angular';
import { LocationMoreInfoPage } from '../location-more-info/location-more-info.page';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { ToastService } from 'src/app/_services/toast.service';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent implements OnInit {
  @Input() location: Location;
  mainPhotoUrl: string;

  constructor(private modalController: ModalController, private launchNavigator: LaunchNavigator, private toast: ToastService) { }

  ngOnInit() {
    if (this.location.photos.length > 0) {
      this.mainPhotoUrl = this.location.photos[0].url;
    }
  }

  goThere() {
    this.launchNavigator.navigate([this.location.lat, this.location.lng]).then(
      success => console.log('Launched navigator'),
      error => this.toast.showToast(error)
    );
  }

  async moreInfo() {
    const modal = await this.modalController.create({
      component: LocationMoreInfoPage,
      componentProps: {
        location: this.location
      }
    });
    return await modal.present();
  }

}
