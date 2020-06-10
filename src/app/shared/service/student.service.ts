import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class StudentService {
  constructor(
    private httpClient: HttpClient,
    private httpBackend: HttpBackend
  ) {}

  public signIn(userData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.httpClient.post<any>(
      'student/authenticate',
      userData,
      httpOptions
    );
  }
}
