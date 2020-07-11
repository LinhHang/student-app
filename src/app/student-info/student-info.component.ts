import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../shared/service/student.service';
import {UserService} from '../shared/service/user.service';

@Component({
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {
  public studentId: number;
  public student: any;
  public pageTitle = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private userService: UserService,
  ) {}
  ngOnInit(): void {
    this.pageTitle = 'Student profile';
    this.studentId = +this.activatedRoute.snapshot.paramMap.get('id');

    setTimeout(() => {
      this.studentService.getStudentById(this.studentId).subscribe((response) => {
        this.student = response;

        this.student.gender = this.userService.getGender(this.student.gender);
      });
    });
  }
}
