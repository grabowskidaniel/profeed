import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserDTO } from '@profeed/domain/user-dto';
import { ProfeedService } from '../core/profeed.service';

@Component({
  selector: 'app-fb-modal',
  templateUrl: './fb-modal.component.html',
  styleUrls: ['./fb-modal.component.scss']
})
export class FbModalComponent implements OnInit {
  @Input() nome: string;
  @Input() userTo: UserDTO;
  public feedback: string;

  constructor(
    public modalController: ModalController,
    private readonly httpClient: HttpClient,
    private profeedService: ProfeedService
  ) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  send() {
    const feedback: any = {};
    feedback.text = this.feedback;
    feedback.userToId = this.userTo.id;

    this.profeedService.sendFeedback(feedback);

    this.dismiss();
  }
}
