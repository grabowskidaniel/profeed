import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'tab',
    loadChildren: './pages/tabs/tabs.module#TabsPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: '' /*'sign-in'*/,
    loadChildren: './pages/sign-in/sign-in.module#SignInPageModule'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
