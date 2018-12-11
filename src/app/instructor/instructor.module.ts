import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Course} from '../course/course.module';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class InstructorModule { }

export class Instructor {
  public id: number;
  public firstName: String;
  public lastName: String;
  public email: String;
  public mobileContact: String;
  public title: String;
  public courses: Course;

}
