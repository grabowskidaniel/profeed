import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { AuthModule } from '@profeed/core/auth/auth.module';
import { environment } from '../../../environments/environment';
import { Storage } from '@ionic/storage';

interface LoginResponse {
  username: string;
  token: string;
  userId: string;
}

@Injectable({
  providedIn: AuthModule
})
export class AuthService {

  private readonly jwtTokenName = 'jwt_token';

  private authUser = new ReplaySubject<any>(1);

  constructor(private readonly httpClient: HttpClient,
              private readonly navCtrl: NavController,
              private readonly storage: Storage,
              private readonly jwtHelper: JwtHelperService) {
  }

  async hasAccess(): Promise<boolean> {
    const jwt = await this.storage.get(this.jwtTokenName);
    if (!jwt || this.jwtHelper.isTokenExpired(jwt)) {
      await this.logout();
      return false;
    }
    return true;
  }

  login(values: { username: string; password: string; }): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(`${environment.serverURL}/auth/signin`, values)
      .pipe(tap(async (response) => {
        await this.handleJwtResponse(response.token);
        localStorage.setItem("userId", response.userId);
        return response;
      }));
  }

  async logout() {
    await this.storage.remove(this.jwtTokenName);
    this.authUser.next(null);
    await this.navCtrl.navigateRoot('sign-in', {replaceUrl: true});
  }

  private async handleJwtResponse(jwt: string): Promise<void> {
    this.storage.set(this.jwtTokenName, jwt);
    localStorage.setItem(this.jwtTokenName, jwt);
    this.authUser.next(jwt);
  }
}
