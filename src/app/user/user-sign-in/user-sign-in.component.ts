import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StudentService} from '../../shared/service/student.service';
import {isNullOrUndefined, isNull} from '../../shared/service/util';
import {CookieService} from '../../shared/service/cookie.service';

@Component({
  templateUrl: './user-sign-in.component.html',
  selector: 'app-user-sign-in',
  styleUrls: ['./user-sign-in.component.scss']

})

export class UserSignInComponent implements OnInit {
  public pageTitle: string = 'Sign in';
  public form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private cookieService: CookieService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
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

  public signIn() {
    if (this.form.invalid) {
      return;
    }

    const userData: any = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.studentService.signIn(userData).subscribe((response: any) => {
      console.log('res', response)
      if (response && response.token) {
        this.router.navigate(['/dashboard']);
      }
    });

  }
}
