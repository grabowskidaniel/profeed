import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import {FbModalComponent} from '../..//fb-modal/fb-modal.component'
import {ProfeedService} from '@profeed/core/profeed.service'
import { UserDTO } from '@profeed/domain/user-dto';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public usersList: Array<UserDTO> = [];

  constructor(public modalController:ModalController, 
    private profeedService:ProfeedService) {
  }

  ngOnInit() {
    this.profeedService.getUsers().subscribe(data =>{
        console.log("POST Request is successful ", data);
        this.usersList = data.map((element)=> new UserDTO(element.id, element.nome, element.photoUrl));
        console.log(this.usersList);
      },
      error  => {
        console.log("Error", error);
      })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FbModalComponent
    });
    return await modal.present();
  }

}
