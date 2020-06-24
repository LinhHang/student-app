import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from './cookie.service';

@Injectable()
export class RequestService {
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
  ) {
  }

  public getLoginAddress(): string {
    return 'http://localhost:8080/authenticate';
  }

  public getApiAddress(): string {
    return 'http://localhost:8080/api';
  }

  public getToken(): string {
    const token: string = this.cookieService.get('token');

    return token ? token : null;
  }
}
