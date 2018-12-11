import { Component, OnInit } from '@angular/core';
import {Instructor} from './instructor.module';
import {InstructorService} from './instructor.service';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  public instructors: Instructor[];
  private instructorService: InstructorService;

  constructor(instructorService: InstructorService) {
    this.instructorService = instructorService;
  }

  public getInstructors() {
    return this.instructorService.getInstructors().subscribe(data => {
      this.instructors = data;
    });
  }
  ngOnInit() {
    this.getInstructors();
  }

}
