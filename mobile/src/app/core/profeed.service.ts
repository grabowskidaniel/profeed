import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserDTO } from '@profeed/domain/user-dto';
import { UserListDTO } from '@profeed/domain/user-list-dto';


@Injectable({
  providedIn: 'root'
})
export class ProfeedService {

  constructor(private http: HttpClient) { }

  sendFeedback(values: { text: string; }){
    return this.http.post(`${environment.serverURL}/api/feedback`, values).subscribe(
      data  => {
        console.log("POST Request is successful ", data);
      },
      error  => {
        console.log("Error", error);
      });
  }

  getUsers(){
    return this.http.get<Array<UserDTO>>(`${environment.serverURL}/api/user`);
  }
}
