import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserSignInComponent} from './user/user-sign-in/user-sign-in.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: UserSignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
