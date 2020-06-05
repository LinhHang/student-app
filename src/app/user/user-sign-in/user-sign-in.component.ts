import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {StudentService} from '../../shared/service/student.service';

@Component({
  templateUrl: './user-sign-in.component.html',
  selector: 'app-user-sign-in'
})

export class UserSignInComponent implements OnInit {
  public pageTitle: string = 'Sign in';
  public form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public register() {
    if (this.form.invalid) {
      return;
    }

    const userData: any = {
      email: this.form.value.email,
      password: this.form.value.password
    };

    this.studentService.register(userData).subscribe((response: any) => {
      if (response.user) {
        this.router.navigate(['/dashboard']);
      }
    });

  }
}
