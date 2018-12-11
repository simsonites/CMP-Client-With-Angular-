import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Student} from '../student/student.module';
import {Instructor} from '../instructor/instructor.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CourseModule { }


export class Course {
  public id: number;
  public title: String;
  public credits: number;
  public description: String;
  public students: Student;
  public instructor: Instructor;


}
