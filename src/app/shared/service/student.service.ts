import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {RequestService} from './request.service';

@Injectable()
export class StudentService {
  constructor(
    private httpClient: HttpClient,
    private requestService: RequestService,
    private httpBackend: HttpBackend
  ) {}

  public signIn(userData: any): Observable<any> {
    const httpOptions = this.generateCommonHeader();

    if (userData.email === 'test@gmail.com' && userData.password === '123456') {
      return of({
        token: 'testToken',
        expires: '',
        email: userData.email,
      });
    } else {
      return of(new HttpErrorResponse({ status: 500}));
    }

    // return this.httpClient.post<any>(
    //   `${this.requestService.getApiAddress()}/authenticate`,
    //   userData,
    //   httpOptions
    // );
  }

  public generateToken(): Observable<any> {
    const httpOptions = this.generateCommonHeader();

    return this.httpClient.get<any>(
      `${this.requestService.getApiAddress()}/generate`,
      httpOptions
    );
  }

  public generateCommonHeader(): any {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}
