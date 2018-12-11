import { Injectable } from '@angular/core';
import {RoutingModule} from '../navigation/routes/routing.module';
import {Course} from './course.module';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseUrl = 'api/courses';

  constructor(private http: HttpClient) {}
  
  public getCourses() {
        return this.http.get<Course[]>(this.courseUrl);
  }
  public createCourse(course: Course){
    return this.http.post<Course>(this.courseUrl, course);
  }
}
