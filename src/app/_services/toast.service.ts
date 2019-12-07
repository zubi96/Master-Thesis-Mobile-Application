import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

constructor(public toastController: ToastController) { }

  async showToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 1200,
      position: 'top'
    });
    toast.present();
  }

}
