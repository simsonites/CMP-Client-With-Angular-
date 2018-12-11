import {Component, Injectable, OnInit} from '@angular/core';
import {Student} from '../student.module';
import {StudentService} from '../student.service';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})

export class StudentDetailsComponent implements OnInit {
  student: Student = new Student();

  constructor(private route: ActivatedRoute,
              private _studentService: StudentService) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
   this._studentService.getStudent(id)
     .subscribe(data =>{
     this.student = data;
   })
  }
}



