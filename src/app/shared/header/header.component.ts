import {Component, Input} from '@angular/core';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header-component'
})
export class HeaderComponent {
  @Input() pageTitle: string;
  @Input() title: string;
}
