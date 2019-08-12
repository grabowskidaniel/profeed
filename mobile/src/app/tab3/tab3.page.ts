import { Component, OnInit } from '@angular/core';
import { ProfeedService } from '@profeed/core/profeed.service';
import { FeedbackDTO } from '@profeed/domain/feedback-dto';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  public feedbackEnviadosList: Array<FeedbackDTO> = [];

  constructor(private profeedService:ProfeedService) {
    this.profeedService.getFeedBacksEnviados().subscribe(data =>{
        console.log("POST Request is successful ", data);
        this.feedbackEnviadosList = data.map((element)=> new FeedbackDTO(element.id, null, element.nameTo, null,  element.photoUrlTo, element.text));
        console.log(this.feedbackEnviadosList);
      },
      error  => {
        console.log("Error", error);
      })
  }

  ngOnInit() {
  }


}
