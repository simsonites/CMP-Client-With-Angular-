import {Injectable, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Course} from "../course/course.module";



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
  public createdAt :string;
  public updatedAt: string;
  public courses : Course[];
  public selectedStudentIds: string[];
}
