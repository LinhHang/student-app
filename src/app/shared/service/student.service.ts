import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {RequestService} from './request.service';
import {UserService} from './user.service';
import {isString} from './util';

@Injectable()
export class StudentService {
  constructor(
    private httpClient: HttpClient,
    private requestService: RequestService,
    private userService: UserService,
    private httpBackend: HttpBackend
  ) {}

  public getStudentById(studentId: number): Observable<any> {
    const httpOptions = this.generateCommonHeader();

    return this.httpClient.get<any>(
      `${this.requestService.getApiAddress()}/students`,
      httpOptions
    );
  }

  public generateCommonHeader(): any {
    if (isString(this.userService.getToken())) {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${this.userService.getToken()}`,
          'Access-Control-Allow-Origin': 'http://localhost:4200',
          'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUT,OPTIONS',
          'Access-Control-Allow-Headers': '*'
        })
      };
    }
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,POST,DELETE,PUT,OPTIONS',
      'Access-Control-Allow-Headers': '*'
    });
  }
}
