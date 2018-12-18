import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import {StudentComponent} from '../../student/student.component';
import {CourseComponent} from '../../course/course.component';
import {NgModule} from '@angular/core';
import {InstructorComponent} from '../../instructor/instructor.component';
import {StudentDetailsComponent} from '../../student/details/student-details.component';
import {AddStudentComponent} from "../../student/add-student/add-student.component";
import {HomeComponent} from "../../home/home.component";



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'students/new', component: AddStudentComponent},
  { path: 'students/edit', component: AddStudentComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'students', component: StudentComponent },
  { path: 'courses', component: CourseComponent},
  { path: 'instructors', component: InstructorComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule {}
