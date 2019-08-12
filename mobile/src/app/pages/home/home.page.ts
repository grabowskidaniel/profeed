import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import {FbModalComponent} from '../..//fb-modal/fb-modal.component'
import {ProfeedService} from '@profeed/core/profeed.service'
import { UserDTO } from '@profeed/domain/user-dto';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public usersList: Array<UserDTO> = [];
  isItemAvailable: boolean;
  items;

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

  async presentModal(userTo:UserDTO, nome: String) {
    const modal = await this.modalController.create({
      component: FbModalComponent,
      componentProps: {
        'userTo' : userTo,
        'nome': nome
      }
    });
    return await modal.present();
  }

  getItems(ev: any) {

    this.isItemAvailable = false;
    this.items = Array.from(document.querySelector('.myList').children);
    // set val to the value of the searchbar
    const val = ev.target.value;
    const query = ev.target.value.toLowerCase();
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.isItemAvailable = true;
      this.items = this.items.filter((item) => {
        const shouldShow = item.lastElementChild.firstElementChild.textContent.toLowerCase().indexOf(query) > -1;
        item.style.display = shouldShow ? 'block' : 'none';
      })
    }else{
      this.items.forEach(item => {
        item.style.display ='block';
      });
    }
  }
  

}
