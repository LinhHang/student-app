import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {StudentService} from './service/student.service';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RequestService} from './service/request.service';
import {CookieService} from './service/cookie.service';
import {CommonHeaderComponent} from './common-header/common-header.component';

@NgModule({
  imports: [
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
    CommonHeaderComponent,
  ],
  exports: [
    HeaderComponent,
    CommonHeaderComponent,
  ],
  providers: [
    StudentService,
    RequestService,
    CookieService,
  ]
})
export class SharedModule {
}
