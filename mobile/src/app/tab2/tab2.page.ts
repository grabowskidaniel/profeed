import { Component } from '@angular/core';
import { ProfeedService } from '@profeed/core/profeed.service';
import { FeedbackDTO } from '@profeed/domain/feedback-dto';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public feedbackRecebidosList: Array<FeedbackDTO> = [];

  constructor(private profeedService:ProfeedService) {

    this.profeedService.getFeedBacksRecebidos().subscribe(data =>{
      console.log("POST Request is successful ", data);
      this.feedbackRecebidosList = data.map((element)=> new FeedbackDTO(element.id, element.nameFrom, null, element.photoUrlFrom, null, element.text));
      console.log(this.feedbackRecebidosList);
    },
    error  => {
      console.log("Error", error);
    })
  }

  // ngOnInit() {
  // }
}
