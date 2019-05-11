import { Component, OnInit } from '@angular/core';
import { Utils } from '@profeed/core/utils';
import { AuthService } from '@profeed/core/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) {
    const imageIndex = Utils.random(0, this.backgroundImages.length);
    this.backgroundImage = this.backgroundImages[imageIndex];
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit() {
  }

  signIn() {
    if (this.form.invalid) {
      return;
    }
    this.authService.login({
      username: 'admin',
      password: 'admin',
    }).subscribe((resp) => {
      console.log(resp);
    });
  }

}
