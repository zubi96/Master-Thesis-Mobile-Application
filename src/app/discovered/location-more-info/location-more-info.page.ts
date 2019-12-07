import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Location } from '../../_models/location';

@Component({
  selector: 'app-location-more-info',
  templateUrl: './location-more-info.page.html',
  styleUrls: ['./location-more-info.page.scss'],
})
export class LocationMoreInfoPage implements OnInit {
  @Input() location: Location;
  mainPhotoUrl: string;
  slideOptions: any;

  constructor(private modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    this.configureInitialState();
  }

  ionViewDidEnter() {
    this.configureInitialState();
  }

  configureInitialState() {
    this.location = this.navParams.get('location');
    this.slideOptions = {
      initialSlide: 0,
      speed: 400
    };
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
