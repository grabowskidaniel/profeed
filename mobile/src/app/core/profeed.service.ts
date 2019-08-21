import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedbackDTO } from '@profeed/domain/feedback-dto';
import { UserDTO } from '@profeed/domain/user-dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfeedService {
  constructor(private http: HttpClient) {}

  sendFeedback(feedback) {
    return this.http
      .post(`${environment.serverURL}/api/feedback`, feedback)
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }

  getUsers() {
    return this.http.get<Array<UserDTO>>(`${environment.serverURL}/api/user`);
  }

  getFeedBacksEnviados() {
    return this.http.get<Array<FeedbackDTO>>(
      `${environment.serverURL}/api/feedback/from`
    );
  }

  getFeedBacksRecebidos() {
    return this.http.get<Array<FeedbackDTO>>(
      `${environment.serverURL}/api/feedback/to`
    );
  }
}
