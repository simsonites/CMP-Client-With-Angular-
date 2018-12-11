import { Component, OnInit } from '@angular/core';
import {CourseService} from './course.service';
import {Course} from './course.module';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'List Of Courses';
  public courses: Course[];
  course: Course;



  constructor(private _courseService: CourseService) {
  }

 getCourses() {
    return this._courseService.getCourses()
      .subscribe(data => {
        this.courses = data;
      });
  }
createCourse(course){
    this._courseService.createCourse(course)
      .subscribe(data =>{
        this.getCourses();
      })
}
  ngOnInit() {
    this.getCourses();

  }



}


