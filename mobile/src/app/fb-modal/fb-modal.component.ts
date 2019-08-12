import { Component, OnInit, Input } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { catchError, retry } from 'rxjs/operators';
import {ProfeedService} from '../core/profeed.service';
import { UserDTO } from '@profeed/domain/user-dto';

@Component({
  selector: 'app-fb-modal',
  templateUrl: './fb-modal.component.html',
  styleUrls: ['./fb-modal.component.scss'],
})
export class FbModalComponent implements OnInit {

  @Input() nome :string;
  @Input() userTo : UserDTO;
  public feedback: String;

  constructor(public modalController: ModalController, 
    private readonly httpClient: HttpClient,
    private profeedService: ProfeedService) { }

  ngOnInit() {  }
  
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  send(){
    console.log("enviar");

    var feedback : any = {};
    feedback.text = this.feedback;
    feedback.userToId = this.userTo.id

    this.profeedService.sendFeedback(feedback);

    this.dismiss();
  }


}
