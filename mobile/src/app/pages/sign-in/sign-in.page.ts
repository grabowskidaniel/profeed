import { Component, OnInit } from '@angular/core';
import { Utils } from '@profeed/core/utils';
import { AuthService } from '@profeed/core/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  backgroundImages = [
    'assets/img/login-bg.jpg',
    'assets/img/login-bg-2.jpg'
  ];
  backgroundImage: string;

  constructor(private authService: AuthService) {
    const imageIndex = Utils.random(0, this.backgroundImages.length);
    this.backgroundImage = this.backgroundImages[imageIndex];
  }

  ngOnInit() {
  }

  signIn() {
    this.authService.login({
      username: 'admin',
      password: 'admin',
    }).subscribe((resp) => {
      console.log(resp);
    });
  }

}
