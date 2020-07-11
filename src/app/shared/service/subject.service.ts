import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {RequestService} from './request.service';

@Injectable()
export class SubjectService {
  constructor(
    private httpClient: HttpClient,
    private requestService: RequestService,
  ) {}

  public getAllSubjects(): Observable<any> {
    return this.httpClient.get<any>(
      `${this.requestService.getApiAddress()}/subjects`,
    );
  }

  public addSubject(subjectData): Observable<any> {
    return this.httpClient.post<any>(
      `${this.requestService.getApiAddress()}/subjects`,
      subjectData
    );
  }

  public getSubjectById(subjectId: number): Observable<any> {
    return this.httpClient.get<any>(
      `${this.requestService.getApiAddress()}/subjects/${subjectId}`,
    );
  }

  public updateSubject(subjectData): Observable<any> {
    return this.httpClient.put<any>(
      `${this.requestService.getApiAddress()}/subjects`,
      subjectData
    );
  }
}
