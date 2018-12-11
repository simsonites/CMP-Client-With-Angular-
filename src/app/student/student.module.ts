import {Injectable, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
@Injectable()
export class StudentModule { }

export class Student {
  public id: number;
  public firstName: String;
  public lastName: String;
  public gender: String;
  public email: String;
  //public courses: Course;
}
