import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignInPage } from './sign-in.page';
import { SharedModule } from '@profeed/shared/shared.module';
import { ProFeedFormsModule } from '@profeed/core/forms';

const routes: Routes = [
  {
    path: '',
    component: SignInPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    ProFeedFormsModule,
  ],
  declarations: [SignInPage]
})
export class SignInPageModule {
}
