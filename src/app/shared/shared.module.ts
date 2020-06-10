import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {StudentService} from './service/student.service';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    StudentService,
  ]
})
export class SharedModule {
}
