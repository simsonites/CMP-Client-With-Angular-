import { Injectable } from '@angular/core';
import {RoutingModule} from '../navigation/routes/routing.module';
import {Instructor} from './instructor.module';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {
  private http: HttpClient;
  private instructorUrl = '/api/instructors';

  constructor(http: HttpClient) {
    this.http = http;
  }

  public  getInstructors() {
    // @ts-ignore
    return this.http.get<Instructor[]>(this.instructorUrl);
  }


}
