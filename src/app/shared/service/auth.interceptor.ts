import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserService} from './user.service';
import {Observable} from 'rxjs';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {RequestService} from './request.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private requestService: RequestService
  ) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (isNotNullOrUndefined(this.requestService.getToken())) {
      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Accept'       : 'application/json',
          'Authorization': `Bearer ${this.requestService.getToken()}`,
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
