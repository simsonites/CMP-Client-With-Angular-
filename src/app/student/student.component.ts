import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {StudentService} from './student.service';
import {Route, Router} from "@angular/router";
import {Student} from "./student.module";
import {Subscription} from "rxjs";



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  title = 'CMP | Students';
// @Input() student: Student;
  student: Student;
  public students: any[];
  public pages: number[];
  private page = 0;


  constructor(
    private studentService : StudentService,
    private route: Router) {}

  ngOnInit() {
 this.getStudents();
  }

  setPages(i, event: any) {
    event.preventDefault();
    this.page = i;
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents(this.page)
      .subscribe(data => {
          this.students = data['content'];
          this.pages = new Array(data['totalPages']);
        },
        (error => { console.log(error.error.message);
        }));
  }

 deleteStudent(student) {
    if(confirm('do you mean to delete this student from the database ?')){
      this.studentService.deleteStudent(student)
        .subscribe( data => {
          this.students = this.students.filter(s => s !== student);
          alert('student deleted successfully');
        });
    }
  }

viewStudent(studentId){
    this.route.navigate(['/students/' +studentId]);
}

editStudent(student){
  this.studentService.setter(student);
  this.route.navigate(['/students/edit']);
}
  createStudent(){
  let student = new Student();
    this.studentService.setter(student);
    this.route.navigate(['/students/new']);
  }



}
