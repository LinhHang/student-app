import {Injectable} from '@angular/core';
import {HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {RequestService} from './request.service';

@Injectable()
export class SubjectService {
  constructor(
    private httpClient: HttpClient,
    private requestService: RequestService,
    private httpBackend: HttpBackend
  ) {}

  public getAllSubjects() {}
  public getStudentById(studentId: number): Observable<any> {
    const httpOptions = this.generateCommonHeader();

    return this.httpClient.get<any>(
      `${this.requestService.getApiAddress()}/students/${studentId}`,
      httpOptions
    );
  }

  public generateCommonHeader(): any {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}
