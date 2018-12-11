import { Component, OnInit } from '@angular/core';
import {StudentService} from "../student.service";
import {Student} from "../student.module";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
   student: Student;


  constructor(private route: Router,
              private studentService: StudentService) {}

  ngOnInit() {
    this.student = this.studentService.getter();
  }

  createStudent(){
     if(this.student.id == undefined){
       this.studentService.createStudent(this.student)
         .subscribe(data =>{console.log(data);
         });
     }else{
       this.studentService.updateStudent(this.student)
         .subscribe(data =>{console.log(data);});
     }
  };

  resetForm (){
    this.student.firstName = '';
    this.student.lastName = '';
    this.student.gender = '';
    this.student.email = '';
  }
}

