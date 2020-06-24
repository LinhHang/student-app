import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserSignInComponent} from './user/user-sign-in/user-sign-in.component';
import {MenuComponent} from './shared/menu/menu.component';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {StudentInfoComponent} from './student-info/student-info.component';
import {SubjectListComponent} from './subject/subject-list/subject-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: UserSignInComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'student/:id',
    component: StudentInfoComponent
  },
  {
    path: 'students',
    component: StudentInfoComponent
  },
  {
    path: 'subjects',
    component: SubjectListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
