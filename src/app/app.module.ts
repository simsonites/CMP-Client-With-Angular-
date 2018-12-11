import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { InstructorComponent } from './instructor/instructor.component';
import { SideNavMenuComponent } from './navigation/side-nav-menu/side-nav-menu.component';
import {StudentService} from './student/student.service';
import { HttpClientModule } from '@angular/common/http';
import {RoutingModule} from './navigation/routes/routing.module';
import {CourseService} from './course/course.service';
import {InstructorService} from './instructor/instructor.service';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavBarComponent } from './navigation/nav-bar/nav-bar.component';
import {StudentDetailsComponent} from './student/details/student-details.component';
import {AddStudentComponent} from "./student/add-student/add-student.component";
import {EditStudentComponent} from "./student/edit-student/edit-student.component";


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    CourseComponent,
    InstructorComponent,
    SideNavMenuComponent,
    NavBarComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentDetailsComponent,

  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService,
    CourseService,
    InstructorService],

  bootstrap: [AppComponent]
})
export class AppModule { }
