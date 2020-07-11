import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {RequestService} from './request.service';
import {UserService} from './user.service';

@Injectable()
export class StudentService {
  constructor(
    private httpClient: HttpClient,
    private requestService: RequestService,
  ) {}

  public getStudentById(studentId: number): Observable<any> {
    return this.httpClient.get<any>(
      `${this.requestService.getApiAddress()}/students/${studentId}`,
    );
  }
}
