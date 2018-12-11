import { Injectable } from '@angular/core';
import {Student} from './student.module';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
   student: Student = new Student();
   private studentUrl = '/api/students';

  constructor(private http: HttpClient) {}

   getStudents(pageNum: number) {
    return this.http.get<Student[]>(this.studentUrl + '?page=' + pageNum);
  }

   createStudent(student) {
    return this.http.post<Student>(this.studentUrl, student);
  }

   deleteStudent(student: Student) {
    return this.http.delete(this.studentUrl + '/' + student.id);
  }
   getStudent(studentId){
    return this.http.get<Student>(this.studentUrl + '/' +studentId);
  }

  updateStudent(student){
    return this.http.put<Student>(this.studentUrl,  student);
  }

  setter(student: Student){
    this.student = student;
  }
  getter(){
    return this.student;
  }
}
