import {Component, OnInit} from '@angular/core';
import {isNull, isNullOrUndefined} from '../../shared/service/util';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectService} from '../../shared/service/subject.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.scss']
})
export class SubjectAddComponent implements OnInit {
  public form: FormGroup;
  public isShowErrorMessage = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private subjectService: SubjectService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      creditPoint: ['', Validators.required],
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

  public addSubject() {
    if (this.form.invalid) {
      return;
    }

    const subjetcData: any = {
      name: this.form.value.name,
      code: this.form.value.code,
      creditPoint: this.form.value.creditPoint
    };

    this.subjectService.addSubject(subjetcData).subscribe((response: HttpResponse<any>) => {
      this.isShowErrorMessage = false;
      this.router.navigateByUrl('/subjects');
    }, () => {
      this.isShowErrorMessage = true;
      console.log('can not add subject');
    });
  }
}
