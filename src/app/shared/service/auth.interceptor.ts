import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserService} from './user.service';
import {Observable} from 'rxjs';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import { assign} from 'lodash'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private userService: UserService
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // req = req.clone({
    //   setHeaders: {
    //     'Content-Type' : 'application/json',
    //     'Accept'       : 'application/json',
    //     'Authorization': `Bearer ${this.userService.getToken()}`,
    //   },
    // });

    if (isNotNullOrUndefined(this.userService.getToken())) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Accept'       : 'application/json',
          'Authorization': `Bearer ${this.userService.getToken()}`,
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUT,OPTIONS',
          'Access-Control-Allow-Headers': '*'
        }
      });
    } else {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Accept'       : 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUT,OPTIONS',
          'Access-Control-Allow-Headers': '*'
        }
      });
    }

    return next.handle(req);
  }
}
