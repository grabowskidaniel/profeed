import { Component, OnInit } from '@angular/core';
import { ProfeedService } from '@profeed/core/profeed.service';
import { FeedbackDTO } from '@profeed/domain/feedback-dto';

@Component({
  selector: 'app-sent',
  templateUrl: 'sent.page.html',
  styleUrls: ['sent.page.scss']
})
export class SentPage implements OnInit {
  public feedbackEnviadosList: Array<FeedbackDTO> = [];

  constructor(private profeedService: ProfeedService) {}

  ngOnInit() {
    this.profeedService.getFeedBacksEnviados().subscribe(
      data => {
        // console.log("POST Request is successful ", data);
        this.feedbackEnviadosList = data.map(
          element =>
            new FeedbackDTO(
              element.id,
              null,
              element.nameTo,
              null,
              element.photoUrlTo,
              element.text
            )
        );
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  ionViewWillEnter() {
    this.ngOnInit();
  }
}
