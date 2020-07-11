import {Component, OnInit} from '@angular/core';
import {ScoreService} from '../../shared/service/score.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  templateUrl: './subject-scores.component.html',
  styleUrls: ['./subject-scores.component.scss']
})
export class SubjectScoresComponent implements OnInit {
  public subjectScores: Array<any>;
  public subjectId: number;
  public students: Array<any> = [];
  public totalPages: number;
  public page: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private scoreService: ScoreService
  ) {}
  ngOnInit(): void {
    this.page = 1;
    this.subjectId = +this.activatedRoute.snapshot.paramMap.get('subjectId');
    this.scoreService.getScoresBySubjectId(this.subjectId).subscribe((response: any) => {
      this.subjectScores = response.content;
      this.totalPages = response.totalPages;
      console.log('tt', this.totalPages);
      this.subjectScores.forEach((subjectScore) => {
        this.students.push(subjectScore.student);
      });
    });
  }

  public getFullName(student: any): string {
    return student.firstName + '' + student.lastName;
  }
}
