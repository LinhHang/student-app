import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserSignInComponent} from './user/user-sign-in/user-sign-in.component';
import {MenuComponent} from './shared/menu/menu.component';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {StudentInfoComponent} from './student-info/student-info.component';
import {SubjectListComponent} from './subject/subject-list/subject-list.component';
import {SubjectAddComponent} from './subject/subject-add/subject-add.component';
import {SubjectEditComponent} from './subject/subject-edit/subject-edit.component';
import {UserSignOutComponent} from './user/user-sign-out/user-sign-out.component';
import {SubjectScoresComponent} from './subject/subject-scores/subject-scores.component';
import {ScoreAddComponent} from './score/score-add.component';


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
    path: 'subjects',
    component: SubjectListComponent
  },
  {
    path: 'subjects/add',
    component: SubjectAddComponent
  },
  {
    path: 'subjects/edit/:subjectId',
    component: SubjectEditComponent
  },
  {
    path: 'subjects/:subjectId/scores',
    component: SubjectScoresComponent
  },
  {
    path: 'subject/:subjectId/score/add',
    component: ScoreAddComponent
  },
  {
    path: 'sign-out',
    component: UserSignOutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
