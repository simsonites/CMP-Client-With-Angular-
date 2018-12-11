import {Component, Injectable, OnInit} from '@angular/core';
import {Student} from '../student.module';
import {StudentService} from '../student.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from "../../course/course.module";


@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})

export class StudentDetailsComponent implements OnInit {
  student: Student;

  constructor(private _route: ActivatedRoute,
              private _studentService: StudentService) {}

  ngOnInit() {
    const id = +this._route.snapshot.params['id'];
   // this.student = this._studentService.getStudent(id);

  }
}



