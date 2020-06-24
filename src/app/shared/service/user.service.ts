import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {RequestService} from './request.service';
import {CookieService} from './cookie.service';

@Injectable()
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private requestService: RequestService,
    private httpBackend: HttpBackend,
    private cookieService: CookieService,
  ) {}

  public signIn(userData: any): Observable<any> {
    const httpOptions = this.generateCommonHeader();

    return this.httpClient.post<any>(
      `${this.requestService.getLoginAddress()}`,
      userData,
      httpOptions
    );
  }

  private generateCommonHeader(): any {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  public getUser(studentId: number): Observable<any> {
    const httpOptions = this.generateCommonHeader();

    return this.httpClient.get<any>(
      `${this.requestService.getApiAddress()}/student/${studentId}`,
      httpOptions
    );
  }

  public getGender(gender: number): string {
    return gender === 0 ? 'Male' : 'Female';
  }
}
