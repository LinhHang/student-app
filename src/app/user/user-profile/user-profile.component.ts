import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CookieService} from '../../shared/service/cookie.service';
import {isNull, isNullOrUndefined} from '../../shared/service/util';
import {UserService} from '../../shared/service/user.service';

@Component({
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public form: FormGroup;
  public loggedUser: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cookieService: CookieService,
  ) {
  }

  ngOnInit(): void {
    this.createContactForm();
  }

  private createContactForm() {
    this.loggedUser = this.cookieService.get('user');
    console.log('user', this.loggedUser);

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      id_card: ['', Validators.required],
      phone: ['', Validators.required],
      email: [{value: '', disabled: !!this.loggedUser.email}, Validators.required]
    });

    this.form.patchValue(this.loggedUser);
  }

  public hasError(field: string, validatorName?: string): boolean {
    const control: FormControl = this.form.controls[field] as FormControl;

    if (isNullOrUndefined(control)) {
      return false;
    }

    if (isNullOrUndefined(validatorName)) {
      return control.touched && !control.valid;
    }

    return control.touched && !(isNull(control.errors) || isNullOrUndefined(control.errors[validatorName]));
  }

  public editDetails(form: any) {}
}
