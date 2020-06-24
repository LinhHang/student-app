import {Component, OnInit} from '@angular/core';

@Component({
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  public subjects: Array<any>;
  public totalPages: number;
  public currentPage: number;
  public page: number;

  constructor() {}
  ngOnInit(): void {
    this.subjects = [
      {
        name: 'Duong loi Ho Chi Minh',
        code: 'SB001',
        credit_point: 3
      },
      {
        name: 'Giai tich 2',
        code: 'GT002',
        credit_point: 3
      },
      {
        name: 'Vat ly dai cuong 1',
        code: 'VL001',
        credit_point: 4
      }
    ];

    this.totalPages = this.subjects.length;
    this.currentPage = 1;
    this.page = 1;
  }

  public redirectCallback(page: number) {}
}
