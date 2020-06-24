import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UserSignInComponent } from './user/user-sign-in/user-sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {StudentInfoComponent} from './student-info/student-info.component';
import {AuthInterceptor} from './shared/service/auth.interceptor';
import {SubjectListComponent} from './subject/subject-list/subject-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignInComponent,
    UserProfileComponent,
    StudentInfoComponent,
    SubjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
  ],
  providers: [
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
