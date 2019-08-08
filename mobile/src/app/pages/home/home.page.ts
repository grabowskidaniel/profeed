import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import {FbModalComponent} from '../..//fb-modal/fb-modal.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  employers = [
    {
      id: 1,
      name: 'Alan Albuquerque',
      photoURL: 'assets/mock/alan.jpeg'
    },
    {
      id: 2,
      name: 'Rodrigo Venturi',
      photoURL: 'assets/mock/rodrigo.jpeg'
    },
    {
      id: 3,
      name: 'Erick Oliveira',
      photoURL: 'assets/mock/erick.png'
    }
  ];

  constructor(public modalController:ModalController) {
  }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FbModalComponent
    });
    return await modal.present();
  }

}
