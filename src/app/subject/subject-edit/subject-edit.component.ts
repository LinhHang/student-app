import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectService} from '../../shared/service/subject.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {isNull, isNullOrUndefined} from '../../shared/service/util';

@Component({
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.scss']
})
export class SubjectEditComponent implements OnInit {
  public subjectId: number;
  public subject: any;
  public form: FormGroup;
  public isShowErrorMsg = false;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private subjectService: SubjectService
  ) {}

  ngOnInit(): void {
    this.subjectId = +this.activatedRoute.snapshot.paramMap.get('subjectId');

    this.subjectService.getSubjectById(this.subjectId).subscribe((response: any) => {
      this.subject = response;

      this.createForm();
    });
  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
      creditPoint: ['', Validators.required],
    });

    this.form.patchValue(this.subject);
  }

  public editDetails() {
    if (this.form.invalid) {
      return;
    }

    const subjectData: any = {
      id: this.subject.id,
      name: this.form.value.name,
      code: this.form.value.code,
      creditPoint: this.form.value.creditPoint
    };

    this.subjectService.updateSubject(subjectData).subscribe((response) => {
      console.log('sua thanh cong');
      this.isShowErrorMsg = false;
      this.router.navigateByUrl('/subjects');
    },
      () => {
      this.isShowErrorMsg = true;
      console.log('Them that bai');
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
}
