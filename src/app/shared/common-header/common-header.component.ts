import {Component, Input} from '@angular/core';

@Component({
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss'],
  selector: 'app-common-header'
})
export class CommonHeaderComponent {
  @Input() pageTitle: string;
  constructor() {}
}
