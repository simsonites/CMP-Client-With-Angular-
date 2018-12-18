import {Student} from "../student/student.module";
import {StudentService} from "../student/student.service";

export class  Utils {
  selectedStudents: Student[];
  students: Student[] = [];

   constructor(private studentService: StudentService) {}




}
