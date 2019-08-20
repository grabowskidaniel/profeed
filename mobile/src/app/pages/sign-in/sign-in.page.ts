import { Component, OnInit } from '@angular/core';
import { Utils } from '@profeed/core/utils';
import { AuthService } from '@profeed/core/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

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
    private readonly navCtrl: NavController,
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
      username: this.form.value.username,
      password: this.form.value.password,
    }).subscribe((resp) => {
      this.navCtrl.navigateRoot('tab/tabs/home', {replaceUrl: true});
    });
  }

}
