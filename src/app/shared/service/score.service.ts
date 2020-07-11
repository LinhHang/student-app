import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RequestService} from './request.service';
import {Observable} from 'rxjs';

@Injectable()
export class ScoreService {
  constructor(
    private httpClient: HttpClient,
    private requestService: RequestService
  ) {}

  public getScoresBySubjectId(subjectId: number): Observable<Array<any>> {
    return this.httpClient.get<any>(
      `${this.requestService.getApiAddress()}/scores?subjectId=${subjectId}`
    );
  }

  public addScore(scoreData): Observable<any> {
    return this.httpClient.post<any>(
      `${this.requestService.getApiAddress()}/scores`,
      scoreData
    );
  }
}
