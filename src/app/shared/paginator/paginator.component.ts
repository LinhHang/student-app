import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import {isUndefined} from '../service/util';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnChanges {

  @Input() totalPages: number;
  @Input() currentPage: number;
  @Input() paginatorUrl: string;
  @Output() redirectCallback: EventEmitter<any> = new EventEmitter<any>();

  public startPage: number;
  private endPage: number;
  public pages: any[];

  constructor(private router: Router) {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (!isUndefined(changes.currentPage) && changes.currentPage.isFirstChange() ||
      !isUndefined(changes.totalPages) && changes.totalPages.isFirstChange()) {
      return;
    }

    this.pages = [];

    if (this.totalPages <= 5) {
      this.startPage = 1;
      this.endPage = this.totalPages;
    } else {
      if (this.currentPage <= 2) {
        this.startPage = 1;
        this.endPage = 5;
      } else if (this.currentPage + 2 >= this.totalPages) {
        this.startPage = this.totalPages - 4;
        this.endPage = this.totalPages;
      } else {
        this.startPage = this.currentPage - 2;
        this.endPage = this.currentPage + 2;
      }
    }

    for (let pageRange = this.startPage; pageRange <= this.endPage; pageRange++) {
      this.pages.push(pageRange);
    }
  }

  public pageSwitchByValue(val, event) {
    if (!isUndefined(this.redirectCallback) && !isUndefined(this.currentPage)) {
      event.preventDefault();
      this.redirectCallback.emit({page: (this.currentPage + val)});
    } else {
      this.router.navigate([this.paginatorUrl], {queryParams: {page: this.currentPage + val}});
    }
  }

  public identify(index, page) {
    return index;
  }
}
