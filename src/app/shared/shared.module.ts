import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {StudentService} from './service/student.service';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RequestService} from './service/request.service';
import {CookieService} from './service/cookie.service';
import {CommonHeaderComponent} from './common-header/common-header.component';
import {BrowserModule} from '@angular/platform-browser';
import {MenuComponent} from './menu/menu.component';
import {UserService} from './service/user.service';
import {PaginatorComponent} from './paginator/paginator.component';
import {AuthInterceptor} from './service/auth.interceptor';

@NgModule({
  imports: [
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
    BrowserModule
  ],
  declarations: [
    HeaderComponent,
    CommonHeaderComponent,
    MenuComponent,
    PaginatorComponent,
  ],
  exports: [
    HeaderComponent,
    CommonHeaderComponent,
    MenuComponent,
    PaginatorComponent,
  ],
  providers: [
    StudentService,
    RequestService,
    CookieService,
    UserService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule {
}
