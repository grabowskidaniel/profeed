import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { catchError, retry } from 'rxjs/operators';
import {ProfeedService} from '../core/profeed.service';

@Component({
  selector: 'app-fb-modal',
  templateUrl: './fb-modal.component.html',
  styleUrls: ['./fb-modal.component.scss'],
})
export class FbModalComponent implements OnInit {

  constructor(public modalController: ModalController, 
    private readonly httpClient: HttpClient,
    private profeedService: ProfeedService) { }

  ngOnInit() {}
  
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  send(){
    console.log("enviar");

    this.profeedService.send({
      text: 'admin'
    });

    this.dismiss();
  }


}
