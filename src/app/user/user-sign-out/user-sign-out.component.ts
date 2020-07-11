import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CookieService} from '../../shared/service/cookie.service';

@Component({
  templateUrl: './user-sign-out.component.html'
})
export class UserSignOutComponent implements OnInit{
  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {}
  ngOnInit(): void {
    this.cookieService.remove('token');
    this.cookieService.remove('user');

    this.router.navigateByUrl('/sign-in');
  }
}
