import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfeedService {

  constructor(private http: HttpClient) { }

  send(values: { text: string; }){
    return this.http.post(`${environment.serverURL}/api/feedback`, values).subscribe(
      data  => {
        console.log("POST Request is successful ", data);
      },
      error  => {
        console.log("Error", error);
      });
    }
}
