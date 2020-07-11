import {Component, OnInit} from '@angular/core';
import {isNull, isNullOrUndefined} from '../shared/service/util';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpResponse} from '@angular/common/http';
import {ScoreService} from '../shared/service/score.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  templateUrl: './score-add.component.html',
  styleUrls: ['./score-add.component.scss']
})
export class ScoreAddComponent implements OnInit {
  public subjectId: number;
  public form: FormGroup;
  public isShowErrorMessage: boolean = false;

  constructor(
    private scoreService: ScoreService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.subjectId = +this.activatedRoute.snapshot.paramMap.get('subjectId');
    this.form = this.formBuilder.group({
      subjectId: [this.subjectId, Validators.required],
      studentId: ['', Validators.required],
      score: ['', Validators.required],
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

  public addStudentScore() {
    if (this.form.invalid) {
      return;
    }

    const scoreData: any = {
      subjectId: this.form.value.subjectId,
      studentId: this.form.value.studentId,
      score: this.form.value.score
    };

    this.scoreService.addScore(scoreData).subscribe((response: HttpResponse<any>) => {
      this.isShowErrorMessage = false;
      this.router.navigateByUrl(`/subjects/${this.subjectId}/scores`);
    }, () => {
      this.isShowErrorMessage = true;
      console.log('can not add subject');
    });
  }
}
