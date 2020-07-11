import {Component, OnInit} from '@angular/core';
import {SubjectService} from '../../shared/service/subject.service';

@Component({
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  public subjects: Array<any>;
  public totalPages: number;
  public currentPage: number;
  public page: number;

  constructor(
    private subjectService: SubjectService
  ) {}
  ngOnInit(): void {
    this.subjectService.getAllSubjects().subscribe((response) => {
      this.subjects = response.content;
      this.totalPages = response.totalPages;

    });

    this.currentPage = 1;
    this.page = 1;
  }

  public deleteSubject(subject: any) {}

  public redirectCallback(page: number) {}
}
